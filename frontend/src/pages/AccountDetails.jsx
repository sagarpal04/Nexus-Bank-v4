import React, { useEffect } from "react";
import BalanceOverview from "./BalanceOverview";
import TransactionList from "./TransactionList";
import ActionButtons from "./ActionButtons";
import Footer from "./Footer";
import { useState } from "react";
import { ChevronsUp, LogOut } from "lucide-react";
import { useNavigate, Navigate } from "react-router-dom"; // Import Navigate
import { useAuth } from "../useContext/AuthContext";
import axios from "axios";

export default function AccountDetails() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setRemainingTime } = useAuth(); // No need to setIsAuthenticated if you aren't using it
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [lastLogin, setLastLogin] = useState(""); // State for last login time

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuthenticated) {
      navigate("/");
      return; // Early return if not authenticated
    }

    const fetchData = async (email) => {
      try {
        // Fetch account details
        const response = await axios.get(
          "http://localhost:5000/api/accountdetails",
          { params: { email } }
        );

        // Fetch transaction history
        const response2 = await axios.get(
          "http://localhost:5000/api/transactionshistory",
          { params: { email } }
        );

        // Update state with fetched data
        if (response.data) {
          setBalance(response.data.balance); // Example
          setName(response.data.name); // Example
        }

        if (response2.data && response2.data.transactions) {
          setTransactions(response2.data.transactions); // Ensure transactions is set correctly
        }

        console.log(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Assuming isAuthenticated holds the user's email when true
    const email = isAuthenticated; // Adjust based on your authentication state structure
    fetchData(email); // Call fetchData with the email
    setLastLogin(new Date().toLocaleString("en-IN")); // Set last login time once
  }, [isAuthenticated]); // Depend on isAuthenticated

  const withdrawAmount = transactions
    .filter((transaction) => transaction.type === "WITHDRAWAL")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  const depositAmount = transactions
    .filter((transaction) => transaction.type === "DEPOSIT")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  const IND_CURRENCY_SYMBOL = "₹";
  return (
    <div className="bg-gray-100 flex justify-center min-h-screen">
      <div className="w-9/12 my-12">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-3xl font-medium text-gray-900 ">
            Welcome Back, {name.split(" ")[0]}
          </p>
          <LogOut
            className="cursor-pointer"
            size={30}
            onClick={() => {
              setIsAuthenticated("");
              setRemainingTime(0);
              navigate("/");
            }}
          />
        </div>
        <BalanceOverview
          balance={balance}
          IND_CURRENCY_SYMBOL={IND_CURRENCY_SYMBOL}
          lastLogin={lastLogin}
        />
        <div className="flex mt-14 gap-4">
          <TransactionList transactions={transactions} />
          <ActionButtons
            email={isAuthenticated}
            setTransactions={setTransactions}
            balance={balance}
            setBalance={setBalance}
            name={name}
          />
        </div>
        <Footer withdrawAmount={withdrawAmount} depositAmount={depositAmount} />
      </div>
    </div>
  );
}
