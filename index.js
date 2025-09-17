import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
//import ProductController from path.join('src','controllers','product.controller');
import ProductController from './src/controllers/product.controller.js';

const server = express();

//set the data parsing encoding
server.use(express.urlencoded({extended:true}))

//setting the view engine
//telling the server we are using view engine and which one
server.set("view engine","ejs")
//setting where the views are -> telling ejs where it is
server.set("views", path.join(path.resolve(),'src','views'))

//using the Layout as middleware
//it use the resuable code -> reusable code in layout file
server.use(ejsLayouts);

//create an instance of the product controller
const productController = new ProductController();

//sending product page
//from middleware
server.get('/',productController.getProducts)

//for new product page
server.get("/new",productController.newProduct)

//for form submit
server.post("/",productController.addNewProduct,productController.getProducts) 

// making views available to access
server.use(express.static(path.join('src','views')))

server.listen(3300,()=>{
    console.log("server is listening at port 3300")
})