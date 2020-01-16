module.exports = function (req, res, next){
	if (!req.session.email_user){
		res.redirect('/logout'); 

	}else{
		next();
	}

}