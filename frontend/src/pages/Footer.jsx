import React from "react";
import { useAuth } from "../useContext/AuthContext";
export default function Footer({ withdrawAmount, depositAmount }) {
  const { remainingTime } = useAuth();
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <div className="flex justify-between items-center mt-12 text-gray-700 ">
      <div className="flex gap-5">
        <div>
          <span className="text-[12px] mr-1">IN</span>{" "}
          <span className="text-[22px] text-[#66c873]">
            {depositAmount.toLocaleString()}
          </span>
        </div>
        <div>
          <span className="text-[12px] mr-1">OUT</span>{" "}
          <span className="text-[22px] text-[#f5465d]">
            {withdrawAmount.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="text-gray-500 text-sm">
        You will be logged out in{" "}
        <span className="font-semibold">{formatTime(remainingTime)}</span>
      </div>
    </div>
  );
}
