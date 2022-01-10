var express = require("express");
var app = express();
let fs = require("fs");
const toto = require('./test.js');
let bodyParser=require("body-parser")
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
console.log(toto)
app.post('/name',(req,res)=>{
    console.log(req.body.test)


})
app.get(
    "/now",
     (req, res,next) => {
	let data = `${new Date().toLocaleString("fr-FR")} ${req.method} ${req.path} ${req.ip} \n`;
  req.string=data;
  next()
},
(req,res)=>{
      fs.appendFile(__dirname + "/log.txt", req.string, () => console.log("loggin...."));
res.send(req.string)
  })
app.get("/:word/echo",(req,res)=>{
    console.log("req.params")
    console.log(req.params)
    res.json({
    echo:req.params.word})
})
app.get("/echo",(req,res)=>{
    console.log("req.params")
    console.log(req.params)
   
})

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
	// res.send("Hello expresss!")
	res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", (req, res) => {
	// res.send("Hello expresss!")
	if (process.env.MESSAGE_STYLE == "uppercase") res.json({ message: "hello json".toUpperCase() });
	else res.json({ message: "hello json".toLowerCase() });
});

module.exports = app;
