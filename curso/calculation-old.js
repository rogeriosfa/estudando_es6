function calculation(valueA) {
    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
    return valueA + valueB;
}

console.log(calculation(2));