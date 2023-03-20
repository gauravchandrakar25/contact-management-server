const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const connectDb = require("./config/dbConnection");

connectDb();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
