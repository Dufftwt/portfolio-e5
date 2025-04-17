const express = require("express");
const path = require("path");
let app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_,res) =>{
	res.sendFile(path.join(__dirname, "e5.html"));
})

app.listen(3000, ()=>{
	console.log('Successfully listening on port 3000');
})