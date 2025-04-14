
class Usuarios/*Você está criando uma classe chamada Usuarios*/{
    //Essas são as propriedades (ou atributos) da classe. Cada instância de Usuarios vai ter:
    id: number;
    name: string;
    lastName: string;
    email: string;
    status: boolean;


    constructor(id: number,name:string,lastName:string,email:string,status:boolean)/*O constructor é tipo uma função onde eu vai receber parâmetros por isso elas são diferentes das variáveis da classe que será referênciadas com o this.'var' */{
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
    };

    //A classe possui 3 métodos add,edit,delete

    add(id:number):number/*Sempre informar o que ela retorna*/{
        //Adiciona o usuario ao banco de dados
        return id;
    };
    edit(id:number):number {
        return id;
    };
    delete(id:number):number{
        return id;
    };

}
const usuarios = new Usuarios(0,'breno','francisco','@hotmail.com',true);

usuarios.add(1)//Chama o método add() e passa 1 como parâmetro. Ele retorna 1, mas o foco aqui é mostrar como acessar os métodos da classe.