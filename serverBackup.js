const express = require("express");
// const connectDB = require("./config/db");
const path = require("path");

// routes variables
const emailRoute = require("./routes/email");

// const authRoute = require("./routes/api/auth");

const app = express();

// Connect Database
// connectDB();

// Middleware initialization
/*
 * Usually we used to install body parser and do
 * app.use(bodyparser.json()). But now bodyparser comes
 * packaged with express. So we just have to do express.json()
 * to use bodyparser
 */

app.use(express.json({ extended: false }));

// use this when on my pc
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// use this on produnction
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://138.68.61.175"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("/", (req,res) => {res.send('API Running')});

// Define Routes
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use("/api/email", emailRoute);
// app.use("/api/auth", authRoute);
// app.use("/api/profile", profileRoute);
// app.use("/api/posts", postsRoute);

// // serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // set static folder
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

/*
 * This means when the app will be deployed to heroku, it will
 * look for a port specified by heroku. But since right now
 * locally we don't have that, we will be running the app on
 * port 5000
 */
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// the backup file named serverBackup.js
// contains all the origin header code that fixes the cors issues if the node and react app runs on different
// server
