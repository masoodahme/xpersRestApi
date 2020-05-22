const expenseSchema=require("../models/expenditure");

exports.getExpenseId=(req,res,next,id)=>{
    console.log(id);
  expenseSchema.findById(id).exec((err,expenseId)=>{
    if(err)
    {
        return res.status(400).json({
            message:"error in finding the id"
        })
    }
    req.expense=expenseId;
    console.log(req.expense);
    next();
  })
}
exports.createExpenditure=(req,res)=>{
    const amount=req.body.amount;
    const desc=req.body.desc;
    console.log(amount);
    console.log(desc);
    const expense=new expenseSchema({amount:amount,description:desc});
    expense.save((err,expense)=>{
        if(err){
            return res.status(400).json({
                error:"Not able to save expense in DB"
            });
        }
        res.status(200).json({expense});
    });
}

exports.getExpenditure=(req,res)=>{
    expenseSchema.find({},(err,expenses)=>{
        if(err)
        {
            return res.status(400).json({
                error:"Not able to get expense in DB"
            })
        }
         res.json(expenses);

    });
}

exports.deleteExpenseById=(req,res)=>{
    const id=req.expense;
    console.log(id);
    id.remove((err,expenses)=>{
            if(err)
            {
                return res.status(400).json({
                    error:"Not Able to Delete the record"
                })           
            } 
            res.json({
                message:`Deletion of ${expenses} was successfully executed`
            })
    });
}