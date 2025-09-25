//-------------------To Handle Controller For Users---------------------------------------

//import Statements
import UserModel from "../models/user.model.js";


export default class UserController{

    //general controller
    getHome(req,res){
        res.render("home",{userName: req.session.userName});
    }
    getFeatures(req,res){
        res.render("features",{userName: req.session.userName});
    }
    getContactUS(req,res){
        res.render("contact",{userName: req.session.userName});
    }
    getAboutUS(req,res){
        res.render("about",{userName: req.session.userName});
    }


    getSignup(req,res){
        res.render("signup",{userName: req.session.userName});
    }
    
    getLogin(req,res){
        res.render("login",{errorMessage: null,userName: req.session.userName})
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
            //console.log(user.name);
            //acccesing session object
                //attaching client info to the session
                //now we can validate it on other requests
                //now when user logged in they will get the seseion id and it will be stored in cookie browser
            req.session.userName = user.name;
            res.redirect('/');
        }else{
            res.render('login',{errorMessage : "Invalid Credentials",userName: req.session.userName})
        }

    }
    logoutUser(req,res){
        //on lougout destroy the session
        req.session.destroy((err)=>{
            //sometimes destroying can lead t error
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }
        })
    }

}
