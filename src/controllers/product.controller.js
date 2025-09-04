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
    console.log(products)

        //sending the file back to client
        return res.sendFile(path.join(path.resolve(),'src','views','products.html'))
    }
}