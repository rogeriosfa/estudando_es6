var USD = new Intl.NumberFormat("en-US", { style:"currency", currency:"USD" });

var BRL = new Intl.NumberFormat("pt-BR", { style:"currency", currency:"BRL" }).format(103040485.40);

console.log(USD.format(103040485.40));
console.log(BRL);