const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"static")));

app.listen(80, (err)=>{
	if(err) return console.log(err);
	console.log("running on 8080");
});