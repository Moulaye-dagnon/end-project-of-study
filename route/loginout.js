const route = require("express").Router();
route.get("/",async function (req, res) {
	res.clearCookie('token')
	return res.json({status:true,message:'login out'})
});
module.exports = route;
