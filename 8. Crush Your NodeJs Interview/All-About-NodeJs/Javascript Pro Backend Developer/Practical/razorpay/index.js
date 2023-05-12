const express = require("express");
const Razorpay=require('razorpay')
const app = express();
const port = 5000;
app.use(express.static("./public"))
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/order", async (req, res) => {
  const amount = req.body.amount; //this is the amount that i have to deduct
  var instance = new Razorpay({ //key id and secret needs to go in .env
    key_id: "rzp_test_0yUMU8XEJfHCgS",
    key_secret: "Vvx2jpH7ixmyCqWZY6Lg4sBK",
  });

  const myOrder=await instance.orders.create({
    amount: amount*100, //this is the amount that we are going to deduct
    currency: "INR",
    receipt: "receipt#1",  //we can use uuid package to generate unique id
  });
  //after creating order,we will send to the frontend
  res.status(200).json({
    success:true,
    amount,
    order:myOrder
})
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
