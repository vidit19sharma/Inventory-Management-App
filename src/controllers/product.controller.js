import path from 'path';

//creating es6 module by class

export default class ProductController{
    //creating a middleware for prodcuts
    getProducts(req,res){
        //sending the file back to client
        return res.sendFile(path.join(path.resolve(),'src','views','products.html'))
    }
}