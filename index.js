const express = require('express');
 
const productRouter = require('./routes/products');
const app = express();
const productData = require('./data/products.json');
const cors = require('cors');
const {logger,validateuser} = require('./middlewares/auth');
const hbs = require('hbs');
const connectDatabase = require('./database/connection');
const { request } = require('express');

//app.use bhana middleaware ho 
//SETUP SERVER 
app.use(cors () );
app.use(express.static(__dirname + '/public'))  //Ja file rakha pani image,css rakha pani load hancha 
app.use(express.json());   //data post gharna lagi use ghara ho 



//connecting database
connectDatabase();


//Setup server side rendering 
app.set('view engine','hbs');

//Setup HBS
hbs.registerPartials(__dirname + '/views/partials');









//Routes
// app.get("/",logger,(req,res) => {          this is for single middlware below this is for multiple middlware you have to give in the form of arrays.
app.get("/", [logger,validateuser], (req,res,) => {      
    res.render('index',{productData});
});


app.get("/products/:productID", (req, res) => {
    const { productID} = req.params;
    const selectedProduct = productData.find(
        (product) => product.id === parseInt(productID)
    );
    res.render('details',selectedProduct);
});
/** 
app.get('/css/index.css',(req,res) => {
    res.sendFile(__dirname + '/public/index.css')          //   Not a practical solution
})  */

app.get('/',(req,res) => {
    res.send("Welcome to the Ecommerce site")
})

app.use("/api/products",productRouter);

app.get("*",(req,res) =>{
    res.status(404).send("Page not found!!")
})


app.listen(4000, () => {
    console.log("Server started at the port 4000")
})



//The flow of MVC of every project
//index.js --> route --> middleware --> controller --> model --> return 