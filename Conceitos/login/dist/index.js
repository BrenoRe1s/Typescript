var Login = /** @class */ (function () {
    function Login(emailCerta, senhaCerta) {
        this.email = emailCerta;
        this.senha = senhaCerta;
    }
    Login.prototype.adm = function (email, senha) {
        if (email === this.email && senha === this.senha) {
            return true;
        }
        else {
            return false;
        }
    };
    return Login;
}());
var login = new Login('@hotmail.com', '123');
var loginAdm = login.adm('@hotmail.com', '123');
var loginAdmError = login.adm('@gmail.com', '321');
console.log(loginAdm);
console.log(loginAdmError);
//# sourceMappingURL=index.js.map