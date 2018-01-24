"use strict";

var name = "Rogério";
var age = 25;

var text = "\n    name: " + name + "\n    age: " + age + "\n";

console.log(text);
"use strict";

var bob = {
    _name: "bob",
    _frieds: ["Guilherme", "Camila", "João"],
    printFriends: function printFriends() {
        var self = this;
        this._frieds.forEach(function (f) {
            return console.log(self._name + " knows " + f);
        });
    }
};

bob.printFriends();
"use strict";

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
