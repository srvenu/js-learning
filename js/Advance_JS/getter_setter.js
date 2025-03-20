class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email.toUpperCase()}PUTER`;
    }
    set email(val){
        this._email = val ; 
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const venu =new User('venu@gmail.com','abc123')

console.log(venu.password);
console.log(venu.email);