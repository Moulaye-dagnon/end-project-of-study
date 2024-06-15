const mongoose = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost/dbJobs")
  .then((r) => {
    console.log("mongodb connected");
  })
  .catch((r) => {
    console.log("mongodb not connected");
  });
