import path from 'path';
//importing product model
import ProductModel from '../models/product.model.js';


//creating es6 module by class
export default class ProductController{

    //creating a middleware for prodcuts
    getProducts(req,res){

    //getting data from models
    //static method so need to create instamce to call
    let products = ProductModel.getTestData();

    //now for ejs
    //we use render function
        //render use name of the template and data-> data in key value pair whatevr key we can use in ejs
        //as it is using layout now it will use layout as main file and putwhicher view we will select and render inside layout <%-body%> - because od layout 
    res.render("products",{products})

        // //sending the file back to client
        // return res.sendFile(path.join(path.resolve(),'src','views','products.ejs'))
    }
}