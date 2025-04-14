class Login/*Criando a classe Login*/{
    email:string; 
    senha:string;//Ambas as linha declaram que propriedades com tipagem
    constructor(emailCerto:string,senhaCerta:string)/*O construtor da classe. Ele é executado automaticamente quando você cria um novo objeto da classe(Ex: const user = new Login()). emailCerto e senhaCerta são os parâmetros que você passa quando cria um novo Login*/{
        this.email = emailCerto;
        this.senha = senhaCerta;
        /*this.email = emailCerto significa que você está atribuindo o valor do parâmetro à propriedade email da classe. Mesma coisa com a senha.*/
    }
    adm(email:string,senha:string):boolean/*Faz com que o retorno da função seja um boolean*/{
        //Esse é um método chamado adm. Ele recebe um email e uma senha como parâmetros e retorna um valor booleano (true ou false).
        if(email===this.email && senha ===this.senha){
            //O if verifica se o email e senha passados são iguais aos que foram salvos no objeto (dentro de this.email e this.senha).
            return true;//Se forem iguais, retorna true, ou seja, login bem-sucedido.
        }else{
            return false;//Se forem diferentes, retorna false, ou seja, login incorreto.
        }
    }
}
const login = new Login('@hotmail.com','123');//Criando um novo(new) objeto Login

const loginAdm=login.adm('@hotmail.com','123')//loginAdm: Passa o mesmo email e senha que foram usados para criar o objeto → Vai retornar true.
const loginAdmError=login.adm('@gmail.com','321')//loginAdmError: Passa dados errados → Vai retornar false.

//Você imprime no console o resultado dos dois testes:
console.log(loginAdm);
console.log(loginAdmError);