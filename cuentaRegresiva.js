function crearCuentaRegresiva(numero){
    const cuentaRegresiva =[];

    for(let i=numero; i>=0; i--)
    {
        cuentaRegresiva.push(i);
    }
    return cuentaRegresiva;
}

console.log(crearCuentaRegresiva(7).join(" "))
