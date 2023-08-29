let frase="hola mundo, soy el mejor programador del mundo"
let palabras= frase.split(" ")
function PonerCardinalidad(frase){
    let arrayMayuscula= frase.split(" ")
    let fraseCompleta=""
    for(let i=0; i<arrayMayuscula.length; i++)
    {
        arrayMayuscula[i]=arrayMayuscula[i][0].toUpperCase()+arrayMayuscula[i].slice(1)
        fraseCompleta+=arrayMayuscula[i]+" "
        //console.log(fraseMayuscula[i][0].toUpperCase())
    }
    return fraseCompleta
}

console.log(PonerCardinalidad(frase))
//