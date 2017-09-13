var Classe = (function () {
    function Classe(param1, param2) {
        this.propriedade1 = param1;
        this.propriedade2 = param2;
    }
    Classe.prototype.obterPropriedade1 = function () {
        return this.propriedade1;
    };
    return Classe;
}());
