/* Axel Gonzalez div c parcial 2018 ejer 4
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/
function mostrar()
{
    let numero1;
    let numero2;
    let mensaje;
    let suma;
    let resta;


    numero1 = prompt("Ingrese un numero entero");
    numero1 = parseInt(numero1);

    numero2 = prompt("Ingrese otro numero entero");
    numero2 = parseInt(numero2);

    suma = numero1 + numero2;
    resta = numero1 - numero2;

    if(numero1 == numero2){
        mensaje= suma;
    }
    else{
        if(numero1 > numero2){
            mensaje= resta;
        }
        else{
            if(numero1 < numero2){
                mensaje= suma;
            }
        }
    }
    if(suma > 10){
                mensaje= "La suma es: " + suma + " y supero el 10";
            }
    alert(mensaje);

}
