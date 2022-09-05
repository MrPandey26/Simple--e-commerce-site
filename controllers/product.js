//const productData= require("../data/products.json");




const ProductModel = require('../models/Products');





const returnAllProducts = async (req,res) => {
    //console.log(typeof(req.query))
        const {category, price} = req.query;
    

        const productData = await ProductModel.find();
        console.log(productData);


        if (category && price ){
            const filterData = productData.filter((product) => product.price >= price && product.category);
            res.json(filterData);
            return;
        }
        
        if (category){
            //this is filtering the data of the categories of jewelery, men's clothing and so on.
            const filterData = productData.filter((product) => product.category === category);  
            res.json(filterData);
        }
    
    
        if (price){
            //this is filtering the data of the categories of jewelery, men's clothing and so on.
            const filterData = productData.filter((product) => product.price === price);  
            res.json(filterData);
        }
    
    
        else{
            res.json(productData)
        }
    }

    const returnSingleProducts = async (req,res) => {
        const { productID } = req.params;

        const productData = await ProductModel.find({_id : productID});
        res.json(productData)
    }




    //CRUD OPERATIONS STARTS FROM HERE:
    //Creating a product
    const createProduct = async (req,res)=> {
        try{
            //const product = new ProductModel(req.body);
            //await product.save();   //await has to be used where promise function is called (asyncoronus)
            //res.send(product);

            //2nd process
            const result = await ProductModel.create(req.body);
            res.send(result);
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }







    //REPLACING A PRODUCT
    const replaceProduct = async (req,res)=> {
        const {productID} = req.params;
        try{
            console.log(req.body)
            console.log(productID)
            const result = await ProductModel.findOneAndReplace({_id : productID} ,req.body);
            res.send(result);
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }

    //UPDATE 
    const updateProduct = async (req,res)=> {
        const {productID} = req.params;
        try{
            const result = await ProductModel.findByIdAndUpdate(productID,req.body);
            res.send(result);
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }

    //DELETE 
    const deleteproduct = async (req,res)=> {
        const {productID} = req.params;
        try{
            const result = await ProductModel.findByIdAndDelete(productID);
            res.send(result);
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }


    module.exports = {returnAllProducts, returnSingleProducts,createProduct,replaceProduct,updateProduct,deleteproduct};
    



