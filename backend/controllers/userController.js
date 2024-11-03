import db from "../config/db.js";
import { randomUUID } from "crypto"; // Import randomUUID from the crypto module
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import { signupTemplate as originalSignupTemplate } from "../nodeMailer/mail_template.js"; // Import the template
import transporter from "../nodeMailer/nodemailer.js";
import { loginTemplate as originalLoginTemplate } from "../nodeMailer/mail_template.js";
import {moneyAddedTemplate as originalMoneyAddedTemplate} from "../nodeMailer/mail_template.js";
import {transferTemplate as originalTransferTemplate} from "../nodeMailer/mail_template.js";
import {closureTemplate as originalClosureTemplate} from "../nodeMailer/mail_template.js";

// Signup function with password hashing
export function signup(req, res) {
  let signupTemplate = originalSignupTemplate; // Use let to allow reassignment
  signupTemplate = signupTemplate.replace(`{%CUSTOMER_NAME%}`, req.body.name); // Replace {%CUSTOMER_NAME%}
  console.log(signupTemplate)
  const { name, email, password, balance } = req.body;
  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  // Hash the password before saving
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    db.query(
      "INSERT INTO users (name, email, password, balance) VALUES (?, ?, ?, ?)",
      [formattedName, email, hashedPassword, Number(balance)],
      (err, result) => {
        if (err) {
          return res.status(400).json({ message: "User already exists" });
        }
        const mailOptions = {
          from: '"Nexus Bank" <nexus.bank.org@gmail.com>', // Sender address
          to: email, // List of recipients
          subject: 'Account Create Successfully', // Subject line
          html: signupTemplate
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log('Email sent: ' + info.response);  
      })
        return res.status(201).json({ message: "User created" });
      }
    );
  });
}

// Login function with password verification
export function login(req, res) {
  let loginTemplate = originalLoginTemplate; // Use let to allow reassignment
  
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const user = result[0];

    // Compare the provided password with the hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Password incorrect" });
      }
      loginTemplate = loginTemplate.replace(`{%CUSTOMER_NAME%}`, user.name);
      const mailOptions = {
        from: '"Nexus Bank" <nexus.bank.org@gmail.com>', // Sender address
        to: email,
        subject: 'Login Successfully', // Subject line
        html: loginTemplate
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log('Email sent: ' + info.response);  
    })
      return res.status(200).json({ message: "Login successful" });
    });
  });
}

// Function to get transaction history
export function transactionsHistory(req, res) {
  const { email } = req.query;

  db.query(
    "SELECT * FROM transactions WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database query error" });
      }
      return res.status(200).json({ transactions: result });
    }
  );
}

// Function to get account details
export function accountDetails(req, res) {
  const { email } = req.query;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }
    return res.status(200).json({ name: result[0].name, balance: result[0].balance });
  });
}

// Function to delete a user account with password verification
export function deleteAccount(req, res) {
  const { email, password , name} = req.body;
  let closureTemplate = originalClosureTemplate;
  closureTemplate = closureTemplate.replace(`{%CUSTOMER_NAME%}`, name);

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "Email is incorrect" });
    }

    const user = results[0];

    // Compare the provided password with the stored password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ message: "Password is incorrect" });
      }

      // Proceed to delete the account
      db.query("DELETE FROM users WHERE email = ?", [email], (err) => {
        if (err) {
          return res.status(500).json({ message: "Database query error" });
        }
        const mailOptions = {
          from: '"Nexus Bank" <nexus.bank.org@gmail.com>', // Sender address
          to: email,
          subject: 'Account Deleted Successfully', // Subject line
          html: closureTemplate
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log('Email sent: ' + info.response);  
      })
        return res.status(200).json({ message: "Account deleted" });
      });
    });
  });
}

// Function to delete user transactions
export function deleteAccountTransactions(req, res) {
  const { email } = req.body;

  db.query("DELETE FROM transactions WHERE email = ?", [email], (err) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }
    return res.status(200).json({ message: "Transactions deleted" });
  });
}

// Function to add money and create a transaction entry
export function addMoney(req, res) {
  const { email, amount, type , name} = req.body;
  let moneyAddedTemplate = originalMoneyAddedTemplate;
  moneyAddedTemplate = moneyAddedTemplate.replace('{%CUSTOMER_NAME%}', name).replace('{%AMOUNT%}', amount);

  db.query(
    "INSERT INTO transactions (email, type, date, amount) VALUES (?, ?, ?, ?)",
    [email, type, new Date(), Number(amount)],
    (transactionErr) => {
      if (transactionErr) {
        console.log(transactionErr);
        res.status(500).json({ error: "Error creating transaction entry" });
      } else {
        console.log("Transaction entry created");
        const mailOptions = {
          from: '"Nexus Bank" <nexus.bank.org@gmail.com>', // Sender address
          to: email,
          subject: 'Amount Added Successfully', // Subject line
          html: moneyAddedTemplate
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log('Email sent: ' + info.response);  
      })
        res.json({ message: "Transaction added successfully" });
      }
    }
  );
}

// Function to update user balance
export function updateBalance(req, res) {
  const { email, amount } = req.body;
  db.query(
    "UPDATE users SET balance = ? WHERE email = ?",
    [amount, email],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating balance" });
      } else {
        console.log("Balance updated");
        res.json({ message: "Balance updated successfully" });
      }
    }
  );
}

// Function to transfer money between users
export function transferTo(req, res) {
  const { email, amount, user, name } = req.body;
  let transferTemplate = originalTransferTemplate;
  transferTemplate = transferTemplate
    .replace('{%CUSTOMER_NAME%}', name)
    .replace('{%AMOUNT%}', amount)
    .replace('{%RECIPIENT_NAME%}', email);
    let moneyAddedTemplate = originalMoneyAddedTemplate;
  moneyAddedTemplate = moneyAddedTemplate.replace('{%CUSTOMER_NAME%}', name).replace('{%AMOUNT%}', amount);

  // Check if the recipient exists
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error checking user" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the sender has sufficient balance
    db.query("SELECT balance FROM users WHERE email = ?", [user], (err, userResults) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error fetching user balance" });
      }

      const currentBalance = Number(userResults[0]?.balance) || 0;
      if (currentBalance < amount) {
        return res.status(400).json({ message: "Insufficient balance." });
      }

      // Proceed with the transaction
      const transactionDate = new Date();
      const depositTransaction = new Promise((resolve, reject) => {
        db.query(
          "INSERT INTO transactions (email, type, date, amount) VALUES (?, ?, ?, ?)",
          [email, "DEPOSIT", transactionDate, Number(amount)],
          (transactionErr) => {
            if (transactionErr) {
              console.log(transactionErr);
              reject("Error creating transaction entry for deposit");
            } else {
              resolve();
            }
          }
        );
      });

      const updateRecipientBalance = new Promise((resolve, reject) => {
        db.query(
          "UPDATE users SET balance = balance + ? WHERE email = ?",
          [amount, email],
          (err) => {
            if (err) {
              console.error(err);
              reject("Error updating recipient balance");
            } else {
              resolve();
            }
          }
        );
      });

      const withdrawalTransaction = new Promise((resolve, reject) => {
        db.query(
          "INSERT INTO transactions (email, type, date, amount) VALUES (?, ?, ?, ?)",
          [user, "WITHDRAWAL", transactionDate, Number(amount)],
          (transactionErr) => {
            if (transactionErr) {
              console.log(transactionErr);
              reject("Error creating transaction entry for withdrawal");
            } else {
              resolve();
            }
          }
        );
      });

      const updateSenderBalance = new Promise((resolve, reject) => {
        db.query(
          "UPDATE users SET balance = balance - ? WHERE email = ?",
          [amount, user],
          (err) => {
            if (err) {
              console.error(err);
              reject("Error updating sender balance");
            } else {
              resolve();
            }
          }
        );
      });

      // Execute all promises in sequence
      Promise.all([depositTransaction, updateRecipientBalance, withdrawalTransaction, updateSenderBalance])
        .then(() => {
          // Send email after successful transaction
          const mailOptions = {
            from: '"Nexus Bank" <nexus.bank.org@gmail.com>', // Sender address
            to: user,
            subject: 'Amount Transferred Successfully', // Subject line
            html: transferTemplate,
          };
          const mailOptions2 = {
            from: '"Nexus Bank" <nexus.bank.org@gmail.com>', // Sender address
            to: email,
            subject: 'Amount Added to Your Account', // Subject line
            html: moneyAddedTemplate,
          }
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error sending email:', error);
              return res.status(500).json({ message: "Failed to send email" });
            }

            console.log('Email sent: ' + info.response);
            return res.json({ message: "Transaction added successfully" });
          });
          transporter.sendMail(mailOptions2, (error, info) => {
            if (error) {
              console.error('Error sending email:', error);
              return res.status(500).json({ message: "Failed to send email" });
            }
            console.log('Email sent: ' + info.response);
            return res.json({ message: "Transaction added successfully" });
          })
        })

        .catch((errorMessage) => {
          return res.status(500).json({ error: errorMessage });
        });
    });
  });
}
