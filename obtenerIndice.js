function obtenerIndice (valor,array)
{
    let indice=-1;
    for(let i=0; i<array.length; i++)
    {
        if (valor==array[i])
        {
            indice=i;
            break;
        }
    }
    return indice;
}

console.log(obtenerIndice(3 , [1,2,3]))
