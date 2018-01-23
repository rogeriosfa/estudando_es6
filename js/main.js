"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cliente = function Cliente(nome, email) {
    _classCallCheck(this, Cliente);

    this.email = email;
    this.nome = nome;
};

//antigo
// var bob = {
//     _name: "bob",
//     _frieds: ["Guilherme", "Camila", "João"],
//     printFriends: function printFriends() {
//         var self = this; 
//         this._frieds.forEach(function (f) {
//             return console.log(self._name + " knows " + f);
//         });
//     }
// };

// bob.printFriends();

var color = function color() {
    return console.log("red");
};
color();

//novo
var bob = {
    _name: "bob",
    _frieds: ["Guilherme", "Camila", "João"],
    printFriends: function printFriends() {
        var _this = this;

        this._frieds.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};

bob.printFriends();
