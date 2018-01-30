class People {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    toString() {
        return `
            Name: ${this.name}
            Email: ${ this.email}
            Phone: ${ this.phone}
        `;
    }
}

class Client extends People {
    constructor(id, name, email, phone) {
        super(name, email, phone);
        this.id = id;
    };
    toString() {
        return `
            id: ${ this.id }
        ${super.toString()}
        `;
    }
}

var teste = new Client(1, "Rogério", "rogerio@teste.com", "(00) 0000-0000");
console.log(teste.toString());