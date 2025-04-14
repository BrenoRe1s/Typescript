//Boolean
//Nesse tipo só é aceito "true"(verdade) ou "false"(falso)
 const loginEfetuado = true;
 const loginError = false;
 
//String
 const primeiroNome = "Breno";
 const segundoNome = 'Francisco';
 const sobrenome = `Sim`;

//Number
//Nesse tipo são aceito apenas números(incluindo floats)
let idade = 18;
let valor = 19.99;

//Array(number,string) [index]
let pessoas: string[];//* Isso faz com que o array "pessoas" só receba dentro dele valores string
pessoas = ['Maria', 'Bento', 'Ana']; 

let apartamento: number[];//* Isso faz com que o array "pessoas" só receba dentro dele valores number
apartamento = [102, 202, 304];

//Tuple
//É array que representa uma sequência de valores de tipos específicos e fixos
let alunos: [number,string,boolean];//* Isso faz com que o array "alunos" só receba valores dentro da ordem e que seja do tipo pedido
alunos = [1,'Breno',true];

//Object
//Esse tipo pode ter qualquer coisa(exceto boolean, string, number e array)
let cliente: object;
cliente = {
    id: 1,
    name: 'primeiroCliente',
};
//ANY
//É um tipo especial que desabilita a verificação de tipos. Isso significa que você pode atribuir qualquer valor a uma variável do tipo any, sem que o compilador reclame.

//Void
//Faz com que retorne nada se aplicado numa function
function mandarEmail(email:string):void{

};
//Null e Undefined
//Geralmente usado para parâmetros que não foram enviados ou recebidos tipo mandar uma mensagem com nada
let mensagem:null//tem NADA dentro mensagem
let indefinida:undefined//Ainda não foi definida