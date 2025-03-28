var Calculadora = /** @class */ (function () {
    function Calculadora(primeiroNumero, segundoNumero) {
        this.n1 = primeiroNumero;
        this.n2 = segundoNumero;
    }
    Calculadora.prototype.somar = function () {
        return this.n1 + this.n2;
    };
    Calculadora.prototype.subtrair = function () {
        return this.n1 - this.n2;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.n1 * this.n2;
    };
    Calculadora.prototype.dividir = function () {
        return this.n1 / this.n2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(15, 54);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());
//# sourceMappingURL=index.js.map