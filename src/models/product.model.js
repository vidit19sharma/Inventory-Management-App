//models are just classes with properties

export default class ProductModel{
    constructor(_id,_name,_desc,_price,_quantity,_imageUrl){
        this.id =_id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.quantity = _quantity;
        this.imageUrl = _imageUrl;  
    }
    //static methods dont need instance directly call by class name
    static getTestData(){
      //console.log(products)
        return products
    }

    // write a method to add any product
    static add(prodObj){
      let newProduct = new ProductModel(products.length+1, 
      prodObj.name,
      prodObj.description,
      prodObj.price,
      prodObj.quantity,
      prodObj.url,
    )

    //pushing the data to main file
    products.push(newProduct)
    }

    //method to check the product
    static  checkById(id){
      // console.log(id);
      return products.find(p=>p.id==id);
        
    }

    //to update the product
    static updateProduct(prodObj){
      // console.log(prodObj)
      const index = products.findIndex(p=>p.id==prodObj.id);
      // console.log(index)
      products[index] = prodObj;
    }

    //to delete the product{}
    static deleteProduct(id){
      const index = products.findIndex(p=>p.id==id);
      products.splice(index,1);
      // console.log(products);
    }
}

var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99, 
      1,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      1,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      1,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    ),
]