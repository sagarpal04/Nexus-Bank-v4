import React from "react";

export default function TransactionItem({ type, date, amount }) {
  const typeStyles =
    type === "DEPOSIT"
      ? "bg-gradient-to-tl from-custom-green-1 to-custom-green-2"
      : "bg-gradient-to-tl from-custom-red-1 to-custom-red-2";
  return (
    <div className="flex justify-between items-center py-6 px-10 border-b">
      <div className="flex gap-6">
        <div
          className={`text-[11px] ${typeStyles} uppercase text-white rounded-full py- px-2 font-medium`}
        >
          {type}
        </div>
        <div
          className="text-[12px]  uppercase font-medium"
          style={{ color: "#666" }}
        >
          {new Date(date).toLocaleDateString("en-IN")}
        </div>
      </div>
      <div className="text-[17px]">{amount.toLocaleString() + "  ₹"}</div>
    </div>
  );
}
