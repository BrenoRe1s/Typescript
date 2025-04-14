/*Calculadora simples pra treinar os conceitos básicos */
class Calculadora{
    n1:number;
    n2:number;
    constructor(primeiroNumero:number,segundoNumero:number){
        this.n1 = primeiroNumero;
        this.n2 = segundoNumero;
       
    }
    somar():number{
        return this.n1 + this.n2 ;
    }
    subtrair(){
        return this.n1 - this.n2 ;
        
    }
    multiplicar(){
        return this.n1 * this.n2 ;
        
    }
    dividir(){
        return this.n1 / this.n2 ;

    }
}
const calculadora = new Calculadora(15, 54);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());