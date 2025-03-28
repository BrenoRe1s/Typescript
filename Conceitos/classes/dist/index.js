var Usuarios = /** @class */ (function () {
    function Usuarios(id, name, lastName, email, status) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
    }
    ;
    Usuarios.prototype.add = function (id) {
        //Adiciona o usuario ao banco de dados
        return id;
    };
    Usuarios.prototype.edit = function (id) {
        return id;
    };
    Usuarios.prototype.delete = function (id) {
        return id;
    };
    return Usuarios;
}());
var usuarios = new Usuarios(0, 'breno', 'francisco', '@hotmail.com', true);
usuarios.add(1); //Ascessando o action de dentro da classe
//# sourceMappingURL=index.js.map