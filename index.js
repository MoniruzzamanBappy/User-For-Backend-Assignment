const express = require("express");
const cors = require("cors");
const userRouter = require('./routes/user.route.js');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;




app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.get("/", (req, res) => {
  res.send("Server Running");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
