class Color {
    constructor(codeColor, namecolor) {
        this.codeColor = codeColor;
        this.namecolor = namecolor;
    };

    getColor() {
        return { codeColor: this.codeColor, namecolor: this.namecolor };
    }
}

let red = new Color("red", "Vermelho");
console.log(red.getColor());