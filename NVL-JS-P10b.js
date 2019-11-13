var pares = [];
var impares = [];
for(var i = 0; i <= 50; i++){
     var randomNum = (Math.floor(Math.random() * 100) + 1);
    if(randomNum % 2 === 0){
       pares.push(randomNum);
} else {
    impares.push(randomNum);
}
}
console.log(pares);
console.log(impares);