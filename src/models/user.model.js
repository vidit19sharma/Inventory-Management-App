
export default class UserModel{
    constructor(_id,_name,_email,_password,){
        this.id=_id;
        this.name = _name;
        this.email = _email;
        this.password = _password;
    }

    //to check user
    static addUser(obj){
        const newUser = new UserModel(users.length+1,obj.name,obj.email,obj.password);
        users.push(newUser);
        // console.log(users);
    }
    static checkUser(obj){
        const user = users.find(curr=>{
            if(curr.email == obj.email && curr.password == obj.password){
                return true;
            }
        })  
        return user;
    }

}




var users =[
    new UserModel(1,"Vidit Sharma","vidit19sharma@gmail.com","password"),
]
