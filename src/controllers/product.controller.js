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
        // console.log(products[0].name);
        res.render("products",{products,userName: req.session.userName})
        // //sending the file back to client
        // return res.sendFile(path.join(path.resolve(),'src','views','products.ejs'))
    }

    //to display new product form data
    newProduct(req,res){
        //it is to render new product page
        res.render("new-product",{errorMessage:null,userName: req.session.userName});
    }

    //to process the data from new product form
    //post method 
    addNewProduct(req,res){
        //access data from form
        //console.log(req.body);
        //sending data to the model
        ProductModel.add(req.body)
        //calling next middleware
        res.redirect('/products')
    }

    getUpdateProductView(req,res){

        //console.log(req.params.id)
        //check product exists or not
        const id = req.params.id;
        //console.log(id)
        const prodFound = ProductModel.checkById(id);
        //console.log(prodFound)
        //if found return view
        if(prodFound){
            res.render('update-product',{prodFound,errorMessage:null,userName: req.session.userName})
        }else{
            res.status(401).send("Product not exist ")
        }
    }

    updateProduct(req,res){
        const prodObj = req.body;
        // console.log(prodObj)
        ProductModel.updateProduct(prodObj);
        res.redirect('/products');
    }

    deleteProduct(req,res){
        const id = req.params.id;

        ProductModel.checkById(id);
        //console.log(prodFound)
        //if found return view
        if(ProductModel.checkById(id)){
            ProductModel.deleteProduct(id);

        }
        
        res.redirect('/products');
    }
}