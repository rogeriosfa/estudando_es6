var US = new Intl.DateTimeFormat("en-US");
var BR = new Intl.DateTimeFormat("pt-BR");

console.log(US.format(new Date("2016-09-02")));
console.log(BR.format(new Date("2016-10-03")));