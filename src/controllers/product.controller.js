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
        //specied where to look in index file set (views property)
        res.render("products",{products})
        // //sending the file back to client
        // return res.sendFile(path.join(path.resolve(),'src','views','products.ejs'))
    }

    //to display new product form data
    newProduct(req,res){
        //it is to render new product page
        res.render("new-product");
    }

    //to process the data from new product form
    //post method 
    addNewProduct(req,res,next){
        //access data from form
        console.log(req.body);
        //sending data to the model
        ProductModel.add(req.body)
        //calling next middleware
        next();
    }

}