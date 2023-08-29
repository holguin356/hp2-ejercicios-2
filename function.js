function sumaimpareshasta (numero) {
    let suma = 0;

    for(let i =1; i<=numero; i+=2){
        suma+=i;
    }
    return suma;
}

console.log(sumaimpareshasta(10))