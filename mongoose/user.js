const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
	nom:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		required:true,
	},
	password:{
		type:String,
		required:true,
	},
	role:{
		type:String,
		required:true,
		enum : ['admin','chercheur','recruteur']
	}
})
userSchema.pre('save', async function(next){
	const salt = await bcrypt.genSalt(10)
	this.password =  await bcrypt.hash(this.password , salt)
	console.log('data added ', this);
	next()
})


module.exports = users = mongoose.model('user',userSchema)