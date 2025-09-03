import express from 'express';
import path from 'path';
//import ProductController from path.join('src','controllers','product.controller');
import ProductController from './src/controllers/product.controller.js';

const server = express();

//create an instance of the product controller
const productController = new ProductController();

//sending product page
//from middleware
server.get('/',productController.getProducts)

// making views available to access
server.use(express.static(path.join('src','views')))

server.listen(3300,()=>{
    console.log("server is listening at port 3300")
})