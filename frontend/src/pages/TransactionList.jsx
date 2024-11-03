import React from "react";
import TransactionItem from "./TransactionItem";
export default function TransactionList({ transactions }) {
  return (
    <div
      className="rounded-lg h-[490px] overflow-y-scroll   [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300 bg-white flex-1"
    >
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </div>
  );
}
