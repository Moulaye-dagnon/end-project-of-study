const route = require('express').Router()
const user = require('../mongoose/user')

route.post('/',async(req,res)=>{
	const {nom , email ,password, role } = req.body

	const cheick_email = await user.findOne({email})

	if(cheick_email){
		res.json({status:true,message:" Email existe deja"})
		return
	}

	await user.create({
		nom,
		email,
		password,
		role
	})

	res.json({
		status:true,
		message:" Utilisateur ajouter"
	})
})

module.exports = route