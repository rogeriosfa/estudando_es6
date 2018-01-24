var bob = {
    _name: "bob",
    _frieds: ["Guilherme", "Camila", "João"],
    printFriends: function printFriends() {
        this._frieds.forEach(f => console.log(this._name + " knows " + f)
        );
    }
};

bob.printFriends();