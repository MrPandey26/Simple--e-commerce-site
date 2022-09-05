const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose.connect("mongodb+srv://adarsha:adarsha@cluster0.klc1ps6.mongodb.net/e_commerce?retryWrites=true&w=majority", 
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("database has been connected succesfully");
        }
    }
    );
};


module.exports=connectDatabase;