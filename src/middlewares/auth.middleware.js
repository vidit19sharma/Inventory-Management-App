export const auth=(req,res,next)=>{
    //we attached it when login
    if(req.session.userName){
        next()
    }else{
        res.redirect('/');
    }
}