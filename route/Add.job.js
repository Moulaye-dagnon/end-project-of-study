const route = require("express").Router();
const jobs = require("../mongoose/jobSchema");

route.post("/", async (req, res) => {
  const job = req.body;

 await jobs.create(job)
  res.json({
    status: true,
    message: " djob ajouter",
  });
});

module.exports = route;
