const app = require("express")();
const port = 5050 || process.env.PORT;
const userRouter = require("./routes/user.route");
app.use(userRouter)
app.listen(port, ()=>{
   console.log("Server is running successfully.")
});