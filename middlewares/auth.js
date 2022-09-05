
//Middlewares
const logger = (req,res,next) => {
    req.greet ="Hi";
    console.log("this is a logger middleware");
    next();
}



const validateuser = (req,res,next) => {
    console.log("User is validator");
    next();
}
//app.use("/",logger);

module.exports = {logger,validateuser};