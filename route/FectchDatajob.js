const route = require("express").Router();
const jobs = require("../mongoose/jobSchema");

route.post("/", async (req, res) => {

  const data = await jobs.find();
	res.json(data)
  
});

module.exports = route;
