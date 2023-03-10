const express=require("express")
const path=require("path")
const hbs=require("hbs")
const app=express()
const port=8000

// path of website
const staticPath=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials/")
console.log(staticPath)

app.set('view engine', 'hbs');
app.set('views',templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath));



//routing
app.get("",(req,res)=>{ 
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404err")
})

app.listen(port,()=>{
   console.log("Server Started at 8000")
})