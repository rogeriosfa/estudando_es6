class Cliente {
    constructor(nome, email) {
        this.email = email;
        this.nome = nome;
    }
}

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

var color = () => console.log("red");
color();


//novo
var bob = {
    _name: "bob",
    _frieds: ["Guilherme", "Camila", "João"],
    printFriends: function printFriends() {
        this._frieds.forEach(f => console.log(this._name + " knows " + f)
        );
    }
};

bob.printFriends();