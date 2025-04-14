var Login /*Criando a classe Login*/ = /** @class */ (function () {
    function Login(emailCerto, senhaCerta) {
        this.email = emailCerto;
        this.senha = senhaCerta;
        /*this.email = emailCerto significa que você está atribuindo o valor do parâmetro à propriedade email da classe. Mesma coisa com a senha.*/
    }
    Login.prototype.adm = function (email, senha) {
        //Esse é um método chamado adm. Ele recebe um email e uma senha como parâmetros e retorna um valor booleano (true ou false).
        if (email === this.email && senha === this.senha) {
            //O if verifica se o email e senha passados são iguais aos que foram salvos no objeto (dentro de this.email e this.senha).
            return true; //Se forem iguais, retorna true, ou seja, login bem-sucedido.
        }
        else {
            return false; //Se forem diferentes, retorna false, ou seja, login incorreto.
        }
    };
    return Login;
}());
var login = new Login('@hotmail.com', '123'); //Criando um novo(new) objeto Login
var loginAdm = login.adm('@hotmail.com', '123'); //loginAdm: Passa o mesmo email e senha que foram usados para criar o objeto → Vai retornar true.
var loginAdmError = login.adm('@gmail.com', '321'); //loginAdmError: Passa dados errados → Vai retornar false.
//Você imprime no console o resultado dos dois testes:
console.log(loginAdm);
console.log(loginAdmError);
