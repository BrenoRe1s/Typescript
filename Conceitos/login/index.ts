class Login{
    email:string;
    senha:string;
    constructor(emailCerta:string,senhaCerta:string){
        this.email = emailCerta;
        this.senha = senhaCerta;

    }
    adm(email:string,senha:string):boolean{
        if(email===this.email && senha ===this.senha){
            return true
        }else{
            return false
        }
    }
}
const login = new Login('@hotmail.com','123');
const loginAdm=login.adm('@hotmail.com','123')
const loginAdmError=login.adm('@gmail.com','321')
console.log(loginAdm);
console.log(loginAdmError);