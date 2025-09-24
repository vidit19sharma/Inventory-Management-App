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
        const user = UserModel.checkUser(req.body);
        
        if(user){
            console.log(user.name);
            //acccesing session object
                //attaching client info to the session
                //now we can validate it on other requests
                //now when user logged in they will get the seseion id and it will be stored in cookie browser
            req.session.userName = user.name;
            res.redirect('/products')
        }else{
            res.render('login',{errorMessage : "Invalid Credentials"})
        }

    }

}
