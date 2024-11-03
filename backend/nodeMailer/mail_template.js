export const signupTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Nexus Bank</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #0078d4;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .content h2 {
      color: #0078d4;
      font-size: 20px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin: 15px 0;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      margin: 15px 0;
      color: #ffffff;
      background-color: #0078d4;
      text-decoration: none;
      border-radius: 4px;
      text-align: center;
    }
    .footer {
      background-color: #f4f4f4;
      color: #666666;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nexus Bank</h1>
    </div>
    <div class="content">
      <h2>Your Account is Successfully Created 🎉</h2>
      <p>Dear {%CUSTOMER_NAME%},</p>
      <p>Welcome to Nexus Bank! We’re thrilled to have you on board. Your account has been created successfully, giving you access to a simple and secure way to manage your finances.</p>
      <p>Through your account, you can:</p>
      <ul>
        <li>Transfer funds easily</li>
        <li>Track your payment history</li>
        <li>Manage loans and finances with confidence</li>
      </ul>
      <p><strong>MAKE PAYMENTS EASY, SIMPLIFY YOUR FINANCES</strong></p>
    </div>
    <div class="footer">
      <p>Thank you for choosing Nexus Bank!</p>
    </div>
  </div>
</body>
</html>
`;



export const loginTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Notification - Nexus Bank</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #0078d4;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .content h2 {
      color: #0078d4;
      font-size: 20px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin: 15px 0;
    }
    .footer {
      background-color: #f4f4f4;
      color: #666666;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nexus Bank</h1>
    </div>
    <div class="content">
      <h2>Login Notification</h2>
      <p>Hello, <strong>{%CUSTOMER_NAME%}</strong>,</p>
      <p>We noticed a successful login to your Nexus Bank account. If this was you, no further action is needed.</p>
      <p>If you did not log in, please contact our support team for further assistance.</p>
      <p>Your security is our top priority. To keep your account safe, remember to:</p>
      <ul>
        <li>Use a strong, unique password.</li>
        <li>Avoid sharing your account details with others.</li>
        <li>Enable two-factor authentication if available.</li>
      </ul>
      <p>Thank you for trusting Nexus Bank with your finances.</p>
    </div>
    <div class="footer">
      <p>Need help? Contact our support team at <a href="mailto:support@nexusbank.com">support@nexusbank.com</a></p>
      <p>&copy; 2024 Nexus Bank. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const  moneyAddedTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Account Update Notification - Nexus Bank</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #0078d4;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .content h2 {
      color: #0078d4;
      font-size: 20px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin: 15px 0;
    }
    .footer {
      background-color: #f4f4f4;
      color: #666666;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1><a href="https://www.nexusbank.com" style="color: #ffffff; text-decoration: none;">Nexus Bank</a></h1>
    </div>
    <div class="content">
      <h2>Account Update Notification</h2>
      <p>Dear {%CUSTOMER_NAME%},</p>
      <p>We are pleased to inform you that an amount of <strong>₹{%AMOUNT%}</strong> has been successfully added to your Nexus Bank account.</p>
      <p>If you have any questions regarding this transaction, please do not hesitate to contact our support team.</p>
      <p>Your security is our top priority. To help protect your account, please keep these tips in mind:</p>
      <ul>
        <li>Create a strong and unique password.</li>
        <li>Never share your account details with anyone.</li>
        <li>Activate two-factor authentication if you haven't done so already.</li>
      </ul>
      <p>Thank you for choosing Nexus Bank for your banking needs.</p>
    </div>
    <div class="footer">
      <p>Need assistance? Contact our support team at <a href="mailto:support@nexusbank.com">support@nexusbank.com</a></p>
      <p>&copy; 2024 Nexus Bank. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const transferTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transfer Confirmation - Nexus Bank</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #0078d4;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .content h2 {
      color: #0078d4;
      font-size: 20px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin: 15px 0;
    }
    .footer {
      background-color: #f4f4f4;
      color: #666666;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1><a href="https://www.nexusbank.com" style="color: #ffffff; text-decoration: none;">Nexus Bank</a></h1>
    </div>
    <div class="content">
      <h2>Transfer Confirmation</h2>
      <p>Dear {%CUSTOMER_NAME%},</p>
      <p>We are pleased to inform you that a transfer of <strong>₹{%AMOUNT%}</strong> has been successfully made to <strong>{%RECIPIENT_NAME%}</strong>.</p>
      <p>If you have any questions or concerns about this transfer, please reach out to our support team.</p>
    </div>
    <div class="footer">
      <p>Need assistance? Contact our support team at <a href="mailto:support@nexusbank.com">support@nexusbank.com</a></p>
      <p>&copy; 2024 Nexus Bank. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export function account_close() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Account Closure Notification - Nexus Bank</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #0078d4;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .content h2 {
      color: #0078d4;
      font-size: 20px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin: 15px 0;
    }
    .footer {
      background-color: #f4f4f4;
      color: #666666;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1><a href="https://www.nexusbank.com" style="color: #ffffff; text-decoration: none;">Nexus Bank</a></h1>
    </div>
    <div class="content">
      <h2>Account Closure Notification</h2>
      <p>Dear {%CUSTOMER_NAME%},</p>
      <p>We are sorry to see you go. Your account has been successfully closed as per your request.</p>
      <p>If you have any questions or need further assistance, please do not hesitate to reach out to our customer support team.</p>
      <p>Thank you for being a part of Nexus Bank. We hope to serve you again in the future!</p>
    </div>
    <div class="footer">
      <p>Need assistance? Contact our support team at <a href="mailto:support@nexusbank.com">support@nexusbank.com</a></p>
      <p>&copy; 2024 Nexus Bank. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
}
