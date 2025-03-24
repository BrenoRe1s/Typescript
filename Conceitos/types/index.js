//Boolean
//Nesse tipo só é aceito "true"(verdade) ou "false"(falso)
var loginEfetuado = true;
var loginError = false;
String;
var primeiroNome = "Breno";
var segundoNome = 'Francisco';
var sobrenome = "Sim";
//Number
//Nesse tipo são aceito apenas números(incluindo floats)
var idade = 18;
var valor = 19.99;
//Array(number,string) [index]
var pessoas; //* Isso faz com que o array "pessoas" só receba dentro dele valores string
pessoas = ['Maria', 'Bento', 'Ana'];
var apartamento; //* Isso faz com que o array "pessoas" só receba dentro dele valores number
apartamento = [102, 202, 304];
//Tuple
//É array que representa uma sequência de valores de tipos específicos e fixos
var alunos; //* Isso faz com que o array "alunos" só receba valores dentro da ordem e que seja do tipo pedido
alunos = [1, 'Breno', true];
//Object
//Esse tipo pode ter qualquer coisa(exceto boolean, string, number e array)
var cliente;
cliente = {
    id: 1,
    name: 'primeiroCliente',
};
//ANY
//É um tipo especial que desabilita a verificação de tipos. Isso significa que você pode atribuir qualquer valor a uma variável do tipo any, sem que o compilador reclame.
//Void
//Faz com que retorne nada se aplicado numa function
function mandarEmail(email) {
}
;
//Null e Undefined
//Geralmente usado para parâmetros que não foram enviados ou recebidos tipo mandar uma mensagem com nada
var mensagem; //tem NADA dentro mensagem
var indefinida; //Ainda não foi definida
