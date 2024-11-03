import express from "express";
import {
  signup,
  login,
  addMoney,
  transactionsHistory,
  accountDetails,
  deleteAccount,
  deleteAccountTransactions,
  updateBalance,
  transferTo,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addmoney", addMoney);
router.get("/transactionshistory", transactionsHistory);
router.get("/accountdetails", accountDetails);
router.delete("/deleteaccount", deleteAccount);
router.delete("/deleteaccounttransactions", deleteAccountTransactions);
router.post("/updatebalance", updateBalance);
router.post("/transfer", transferTo);

export default router;
