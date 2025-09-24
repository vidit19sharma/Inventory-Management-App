//-------------------To Handle Controller For Users---------------------------------------

//import Statements
import UserModel from "../models/user.model.js";


export default class UserController{

    getHome(req,res){
        res.render("home");
    }

    getSignup(req,res){
        res.render("signup");
    }
    
    getLogin(req,res){
        res.render("login",{errorMessage: null})
    }

    //Signing up user
    signupUser(req,res){
        UserModel.addUser(req.body);
        res.redirect('/login')
    }

    //login user
    loginUser(req,res){
        //console.log(req.body)
        if(UserModel.checkUser(req.body)){
            res.redirect('/products')
        }else{
            res.render('login',{errorMessage : "Invalid Credentials"})
        }
    }

}
