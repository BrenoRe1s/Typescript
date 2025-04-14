//Uma Interface é usada principalmente para Documentar,Validar o código e Ajudar no desenvolvimento.
//Interfaces são como modelos de estrutura de objetos. Elas definem quais propriedades um objeto precisa ter, e quais tipos essas propriedades devem ter.
interface Usuario{
    id:number,
    nome: string,
    email: string,
    senha: string,
    idade: number
}

let user:Usuario={
    id: 1,
    nome: 'Breno',
    email: '@gmail.com',
    senha: '123',
    idade: 18
    //Se preencher todas as propriedades corretamente (com os tipos certos), o TypeScript aceita de boa.
    //Se você esquecer uma propriedade ou usar o tipo errado (ex: colocar idade: '18' como string), o TypeScript vai dar erro.
}//Criando um objeto chamado user, e dizendo que ele deve seguir a estrutura da interface Usuario.

