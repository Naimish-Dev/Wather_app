const express=require("express")
const app= express();
const hbs=require("hbs")
const path=require("path")
const port=process.env.PORT || 8000

// static page render from publice directry 
const static_path=path.join(__dirname,"../pulic")

// set views engine to server 
app.set("view engine", "hbs")

//rename VIEWS direct name bt TEMPLATE
const Tpath=path.join(__dirname, "../template/views")
app.set("views",Tpath)

// register partials 
const Ppath=path.join(__dirname,"../template/partials")
hbs.registerPartials(Ppath) 

app.use(express.static(static_path))
// Routing pages 
app.get("/",(req,res)=>{
    // if static page not avilable thent this code is execitude
    // res.send("<h1>THis is home page</h1>")
    
    // get rendering page using views
    console.log(req.url)
    res.render("index" ,req.url==="/" ?{effect : "active"}:{effect : null})
})

app.get("/about",(req,res)=>{
    res.render("about" ,req.url==="/about" ?{effect : "active"}:{effect : null})
})

app.get("/weather",(req,res)=>{
    res.render("weather",{effect:"active"})
})

app.get("*",(req,res)=>{
    res.render("404" )
})

//  creatinf server no. 8000 

app.listen({port},()=>{
    console.log(`server is ruining on port no.${port}`)
})