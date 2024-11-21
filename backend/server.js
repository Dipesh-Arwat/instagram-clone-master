const path = require("path");
const dotenv = require("dotenv");
const app = require(path.join(__dirname, "app.js"));
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

// Attach an unhandled promise rejection handler
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Promise Rejection:", reason);
});


mongoose
  .connect("mongodb+srv://dipesharwat80:dipesharwat80@cluster0insta.fwn4a.mongodb.net/insta")
  .then(() => {
    console.log(`Successfully connected to database`);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);
