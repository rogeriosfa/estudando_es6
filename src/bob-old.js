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