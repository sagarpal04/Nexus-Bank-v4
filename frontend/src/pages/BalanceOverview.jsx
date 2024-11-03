import React, { useState } from "react";

export default function BalanceOverview({
  balance,
  IND_CURRENCY_SYMBOL,
  lastLogin,
}) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-2xl text-[#444444] font-medium">Current balance</p>
          <p className="text-grayCustom text-sm">
            last login <span>{lastLogin}</span>
          </p>
        </div>
      </div>
      <div>
        <span className="text-5xl text-[#444444]">
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) + IND_CURRENCY_SYMBOL}
        </span>
      </div>
    </div>
  );
}
