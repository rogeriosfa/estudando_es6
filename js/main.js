'use strict';

var number = 1234.55;
var En = new Intl.NumberFormat('es-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);
console.log(En);
console.log(De);
