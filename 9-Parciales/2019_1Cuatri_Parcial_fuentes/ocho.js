/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let contadorNumPar=0;
    let contadorNumImpar=0;
    let contadorCeros=0;
    let contadorPositivos=0;
    let acumuladorPositivos=0;
    let promedioPositivo;
    let acumuladorNegativos=0;
    let banderaDelPrimero;
    let maxNum;
    let minNum;
    let maxLetra;
    let minLetra;

    respuesta = "si";

    banderaDelPrimero = "Primer valor";

    while(respuesta == "si"){
        letra = prompt("Ingrese una letra.");
        letra = letra.toLowerCase();

        numero = prompt("Ingrese un numero entre -100 y 100");
        numero = parseInt(numero);

        while(numero < -100 || numero > 100){
            numero = prompt("Error, ingrese un numero entre -100 y 100");
            numero = parseInt(numero);
        }

        if(numero%2 == 0 && numero != 0){
            contadorNumPar++;
        }
        else{
            if(numero%2 != 0 && numero != 0){
                contadorNumImpar++;
            }
        }

        if(numero == 0){
            contadorCeros++;
        }

        if(numero > 0){
            contadorPositivos++;
            acumuladorPositivos+= numero;
        }
        else{
            if(numero < 0){
                acumuladorNegativos += numero;
            }
        }

        if(banderaDelPrimero == "Primer valor"){
            maxNum = numero;
            maxLetra = letra;
            minNum = numero;
            minLetra = letra;
            banderaDelPrimero = "Valor ya ingresado.";
        }
        else{
            if(numero > maxNum){
                maxNum = numero;
                maxLetra = letra;
            }
            else{
                if(numero < minNum){
                    minNum = numero;
                    minLetra = letra;
                }
            }
        }

        respuesta = prompt("Desea continuar?");
    }
    promedioPositivo = acumuladorPositivos / contadorPositivos;

    console.log("La cantidad de numeros pares es de: " + contadorNumPar);
    console.log("La cantidad de numeros impares es de: " + contadorNumImpar);
    console.log("La cantidad de numeros ceros es de: " + contadorCeros);
    console.log("El promedio de numeros positivos es de: " + promedioPositivo);
    console.log("La suma de numeros negativos es de: " + acumuladorNegativos);
    console.log("El numero y la letra max son : " + maxLetra + ", " + maxNum + " . El numero y la letra min son : " + minLetra + ", " + minNum);
}
