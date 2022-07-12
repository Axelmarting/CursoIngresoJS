/*Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/
function mostrar()
{
    let numero1;
    let numero2;
    let mensaje;
    let suma;
    let division;

    numero1 = prompt("Ingrese un numero entero");
    numero1 = parseInt(numero1);

    numero2 = prompt("Ingrese un segundo numero entero");
    numero2 = parseInt(numero2);

    suma = numero1 + numero2;
    division = numero1 / numero2;

    if(numero1 == numero2){
        mensaje = suma;
    }
    else{
        if(numero1 > numero2){
            mensaje = division;
        }
        else{
            if(numero1 < numero2){
                mensaje = suma;
            }
        }
    }
    
    alert(mensaje);

    if(suma < 50){
        alert("La suma es: " + suma + " y es menor a 50");
    }


}
