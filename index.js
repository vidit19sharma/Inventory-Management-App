import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
//import ProductController from path.join('src','controllers','product.controller');
import ProductController from './src/controllers/product.controller.js';
import UserController from './src/controllers/user.controller.js';
import validateNewProductRequest from './src/middlewares/newProductvalidation.middleware.js';
import validateUpddateProductRequest from './src/middlewares/updateProduct.middleware.js';

const server = express();

// making views available to access
server.use(express.static(path.join('src','views')))
server.use(express.static(path.join('public','assets')))
server.use(express.static(path.join('public')))

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

//create instance of USerr Class
const userController = new UserController();

server.get('/',userController.getHome);
server.get('/signup',userController.getSignup);
server.get('/login',userController.getLogin);

server.post('/signup',userController.signupUser);
server.post('/login', userController.loginUser);

//sending product page
//from middleware
server.get('/products',productController.getProducts)

//for new product page
server.get("/new",productController.newProduct)

//for form submit
server.post("/product",validateNewProductRequest,productController.addNewProduct) 

//for update product
server.get("/update/:id", productController.getUpdateProductView)
server.post("/update",productController.updateProduct)

//for deleting the product
//fetch funtion sends post req
server.post("/delete/:id",productController.deleteProduct)

server.listen(3300,()=>{
    console.log("server is listening at port 3300")
})