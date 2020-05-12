const express = require("express");
// const connectDB = require("./config/db");
const path = require("path");

// routes variables
const emailRoute = require("./routes/email");



const app = express();

// Connect Database
// connectDB();

app.use(express.json({ extended: false }));



app.use("/api/email", emailRoute);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});



const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// the backup file named serverBackup.js
// contains all the origin header code that fixes the cors issues if the node and react app runs on different 
// server