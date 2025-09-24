// custom validation middleware

//this is the body from req
import {body,validationResult} from "express-validator";

const validateUpdateProductRequest = async (req,res,next) => {
    //----------------------------  1. setup rules for validation
        const rules = [
            //when false then error with message will be populated
            body('name').notEmpty().withMessage("Name is required"),
            body('price').isFloat({gt:0}).withMessage("Price should be greater than 0"),
            body('quantity').isNumeric({gt:0}).withMessage("Quantity should be atleast 1"),
            body('url').isURL().withMessage('Invalid URL')    
        ]

    //----------------------------- 2. run those rules
        await Promise.all(rules.map(rule=>rule.run(req)))

    //----------------------------- 3. check if there are any errors after running the rules

    
    var error = validationResult(req);

    //----------------------------- 4. if eroore are found return error msg
    if(!error.isEmpty()){
        //.array to convert error into array then it return the  obj ffor the error message we select the msg fied of the array
        console.log(error.array()[0].msg)
        return res.render("update-product",{errorMessage:error.array()[0].msg})
    }

    //if not exit on last return
    next();
}

export default validateUpdateProductRequest;