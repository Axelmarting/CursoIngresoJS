/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros
(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de 
básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/

function mostrar()
{
    let contadorCincoJugadores=0
    let alturaJugador;
    let sexoJugador;
    let acumuladorAlturas=0;
    let promedioAlturas;
    let banderaDelPrimero;
    let alturaMin;
    let sexoMin;
    let contadorMujeres190Cm=0;

    banderaDelPrimero = 1;

    while(contadorCincoJugadores < 2){
        alturaJugador = prompt("Ingrese la altura del jugador");
        alturaJugador = parseFloat(alturaJugador);

        while(alturaJugador < 0 || alturaJugador > 250){
            alturaJugador = prompt("Error Ingrese la altura del jugador");
            alturaJugador = parseFloat(alturaJugador);
        }

        acumuladorAlturas+= alturaJugador;

        sexoJugador = prompt("Ingrese sexo f o m");
        sexoJugador = sexoJugador.toLowerCase();

        while(sexoJugador != "f" && sexoJugador != "m"){
            sexoJugador = prompt("Error ingrese sexo f o m");
            sexoJugador = sexoJugador.toLowerCase();
        }

        if(banderaDelPrimero == 1){
            alturaMin = alturaJugador;
            sexoMin = sexoJugador;
            banderaDelPrimero = 0;
        }
        else{
            if(alturaJugador < alturaMin){
                alturaMin = alturaJugador;
                sexoMin = sexoJugador;
            }
        }

        if(sexoJugador == "f" && alturaJugador > 190){
            contadorMujeres190Cm++;
        }


        contadorCincoJugadores++;
    }
    promedioAlturas = acumuladorAlturas / contadorCincoJugadores;

    console.log("El promedio de las alturas totales es de: " + promedioAlturas);
    console.log("La altura min es: " + alturaMin + " y su sexo es: " + sexoMin);
    console.log("La cantidad de mujeres que supere los 190cm es de: " + contadorMujeres190Cm);
}
