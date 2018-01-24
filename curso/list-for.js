var list = ["teste", 25, { name: 'Rogério' }];

for (var i in list) {
    console.log(list[i]);
}

for (let i of list) {
    console.log(i);
}