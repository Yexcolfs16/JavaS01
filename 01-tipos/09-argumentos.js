function suma(a, b) { //argumentos son los que pide dentreo de la función
    console.log(arguments);
    return a + b;
}


let resultado = suma(5, 6, 1, 2, 3); //parametrtos los valores de los argumentos, que pueden recibir varios a la vez
console.log(resultado);
console.log(typeof suma);