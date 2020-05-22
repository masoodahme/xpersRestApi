const express=require("express");
const router=express.Router();
const {createExpenditure,getExpenditure,getExpenseId,deleteExpenseById}=require("../controllers/expenditure");
//param
router.param("expenseId",getExpenseId);
//post
router.post("/insertExpense",createExpenditure);
//get
router.get("/getExpenses",getExpenditure);
//delete
router.delete("/removeExpenses/:expenseId",deleteExpenseById);
module.exports=router;
