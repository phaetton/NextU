// librerias requeridas 
var BodyParser =  require("body-parser");
var express    =  require("express");
var MongoClient=  require("mongodb").MongoClient;
var session    =  require("express-session");
var http       =  require("http");
var events     =  require("./router");

// variable de base datos
var url = "mongodb://localhost:27017/agendaGP";
var PORT= 3000;
var app = express();

//usa las librerias necesarias
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(express.static("client"));
app.use(session({
	secret: "1986gp20",
	resave: false,
	saveUninitialized: false
}));


//creo el servidor 
http.createServer(app);

//escuchador del inicio de sesion 
app.post("/login",function (req, res){
	//almacenamos los datos en variables
	var user = req.body.user;
	var pass = req.body.pass;

	//* conectamos a la base de datos 
	MongoClient.connect(url, function (err, db){
		if (err)throw err; // gestiono el erro
		var base = db.db("agendaGP");
		var coleccion = base.collection("usuarios");
		coleccion.findOne({email: user, password: pass}, function (error, user){
			if (error) throw error;
			if (user){
				req.session.email_user = user.email;
				res.send("Validado");
			}else{
				res.send("Usuario o contraseña Invalidos.");
			}
		});
		  db.close();

	});
}); 

app.use("/events", events);
//escucha el servidor 
app.listen(PORT, function (){
	console.log("El servidor de la agendaGP está corriendo por el servidor : " + PORT);
});