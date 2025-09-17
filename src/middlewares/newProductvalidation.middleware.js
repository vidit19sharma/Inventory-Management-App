// custom validation middleware

const validateRequest = (req,res,next) => {
    //validate data
    
    //destructure
    const {name,price} = req.body;

    let errors = []; //initiliazation to use array functions

    if(!name || name.trim ==""){
        errors.push("name is required");
    }
    if(!price || parseFloat(price)<1){
        errors.push("price must be positive");
    }

    //if error{}
    if(errors.length){
        return res.render("new-product",{errorMessage:errors[0]})
    }

    //if not exit on last return
    next();
}

export default validateRequest;