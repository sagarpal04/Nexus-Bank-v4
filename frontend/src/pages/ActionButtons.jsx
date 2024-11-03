import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useContext/AuthContext";

export default function ActionButtons({
  email,
  setTransactions,
  balance,
  name,
  setBalance,
}) {
  const { setIsAuthenticated, setRemainingTime } = useAuth(); // No need to setIsAuthenticated if you aren't using it
  const navigator = useNavigate();
  const [addMoney, setAddMoney] = useState("");
  const [deleteEmail, setDeleteEmail] = useState("");
  const [deleteEmailPassword, setDeleteEmailPassword] = useState("");
  const [transferToEmail, setTransferToEmail] = useState("");
  const [transferToAmount, setTransferToAmount] = useState("");

  const onSubmitTransfer = async () => {
    try {
      // Check if user balance is sufficient
      if (Number(addMoney) > Number(balance)) {
        alert("Insufficient balance.");
        return;
      }

      const response = await axios.post("http://localhost:5000/api/transfer", {
        email: transferToEmail,
        amount: transferToAmount, // Ensure to use transferToAmount for the transaction
        user: email,
        name: name, // Use your source of the user's email
      });
      setTransactions((prev) => [
        ...prev,
        {
          type: "WITHDRAWAL",
          amount: parseFloat(transferToAmount).toFixed(2),
          date: new Date(),
          email: email,
        },
      ]);

      setBalance((prev) => {
        const newBalance = Number(prev) - Number(transferToAmount);
        return parseFloat(newBalance.toFixed(2)); // Store as a number
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error transferring money:", error);
      alert("Failed to transfer money. Please try again.");
    } finally {
      setTransferToEmail("");
      setTransferToAmount("");
    }
  };
  const onSubmitDelete = async () => {
    try {
      // Delete the user account
      const response = await axios.delete(
        "http://localhost:5000/api/deleteaccount",
        {
          data: {
            email: deleteEmail,
            password: deleteEmailPassword,
            name: name,
          },
        }
      );

      // Delete associated transactions
      await axios.delete(
        "http://localhost:5000/api/deleteaccounttransactions",
        {
          data: {
            email: deleteEmail,
          },
        }
      );
      setIsAuthenticated("");
      setRemainingTime(0);
      setDeleteEmail("");
      setDeleteEmailPassword("");

      navigator("/");
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account. Please try again.");
    }
  };

  const onSubmitAddMoney = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/addmoney", {
        email: email, // Use transferTo or any appropriate email source
        amount: addMoney,
        type: "DEPOSIT",
        name: name,
      });
      await axios.post("http://localhost:5000/api/updatebalance", {
        email: email,
        amount: Number(addMoney) + Number(balance),
      });
      setBalance((prev) => {
        const newBalance = Number(prev) + Number(addMoney);
        return parseFloat(newBalance.toFixed(2)); // Store as a number
      });

      alert(response.data.message);
      setTransactions((prev) => [
        ...prev,
        {
          type: "DEPOSIT",
          amount: parseFloat(addMoney).toFixed(2),
          date: new Date(),
          email: email,
        },
      ]);

      setAddMoney("");
    } catch (error) {
      console.error("Error adding money:", error);
      alert("Failed to add money. Please try again.");
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-gradient-to-tl from-[#ffb003] to-[#ffcb03] py-7 px-9 rounded-lg flex flex-col">
        <p className="text-lg font-semibold mb-4 text-darkGray">
          Transfer money
        </p>
        <div className="flex gap-3 items-start">
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              value={transferToEmail}
              onChange={(e) => setTransferToEmail(e.target.value)}
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="transferTo" className="text-sm">
              Transfer to
            </label>
          </div>
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              value={transferToAmount}
              onChange={(e) => setTransferToAmount(e.target.value)}
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="amount" className="text-sm">
              Amount
            </label>
          </div>
          <button
            onClick={onSubmitTransfer}
            className="text-sm self-start bg-white px-4 py-1 rounded-lg flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-tl-custom py-7 px-9 rounded-lg flex flex-col">
        <p className="text-lg font-semibold mb-4 text-darkGray">Add money</p>
        <div className="flex gap-3 items-starts">
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="addMoney"
              id="addMoney"
              value={addMoney}
              onChange={(e) => setAddMoney(e.target.value)}
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="addMoney" className="text-sm">
              Amount
            </label>
          </div>
          <button
            onClick={onSubmitAddMoney}
            className="text-sm self-start bg-white px-4 py-1 rounded-lg flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-custom-red-1 to-custom-red-2 py-7 px-9 rounded-lg flex flex-col">
        <p className="text-lg font-semibold mb-4 text-darkGray">
          Close account
        </p>
        <div className="flex gap-3 items-starts">
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="confirmUser"
              id="confirmUser"
              value={deleteEmail}
              onChange={(e) => setDeleteEmail(e.target.value)}
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="confirmUser" className="text-sm">
              Confirm user
            </label>
          </div>
          <div className="flex flex-col items-center gap-1">
            <input
              type="password"
              name="confirmPin"
              id="confirmPin"
              value={deleteEmailPassword}
              onChange={(e) => setDeleteEmailPassword(e.target.value)}
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="confirmPin" className="text-sm">
              Confirm PIN
            </label>
          </div>
          <button
            onClick={onSubmitDelete}
            className="text-sm self-start bg-white px-4 py-1 rounded-lg flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
