const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3177;

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

mongoose.connect(
  process.env.CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (e) => {
    console.log(e ? e : "Connected successfully to database");
  }
);

app.use("/api/auth", require("./routers/authRouter"));
app.use("/api/user", require("./routers/userRouter"));
app.use("/api/bank", require("./routers/bankRouter"));
app.use("/api/camps", require("./routers/campRouter"));

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);


// Git is working fine !!