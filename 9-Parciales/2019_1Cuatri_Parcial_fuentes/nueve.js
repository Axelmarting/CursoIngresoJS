/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes 
en millones entre 1 y 7000 (validar) la temperaruta mínima que se registra en su territorio
(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/

function mostrar()
{
    let respuesta;
    let nombrePais;
    let NroHabitantes;
    let temperatura;
    let contadorTemperaturaPar=0;
    let banderaDelPrimero;
    let paisMin;
    let NroHabitantesMin;
    let contadorPaisMas40=0;
    let acumuladorHabitantes=0;
    let contadorHabitantes=0;
    let promedioHabitantes;
    let temperaturaMin;
    let temperaturaPaisMin;
    let banderaDelSegundo;

     respuesta = "si";
     respuesta = respuesta.toLowerCase();

     banderaDelPrimero = 0;

     banderaDelSegundo = 0;

     while(respuesta == "si"){
        nombrePais = prompt("Ingrese el nombre de un pais.");

        NroHabitantes = prompt("Ingrese un numero entre 1 y 7000");
        NroHabitantes = parseInt(NroHabitantes);

        while(NroHabitantes < 1 || NroHabitantes > 7000){
            NroHabitantes = prompt("Error ingrese un numero entre 1 y 7000");
            NroHabitantes = parseInt(NroHabitantes);
        }

        acumuladorHabitantes+= NroHabitantes;
        contadorHabitantes ++;

        temperatura = prompt("Ingrese la temperatura entre -50 y 50");
        temperatura = parseFloat(temperatura);

        while(temperatura < -50 || temperatura > 50){
            temperatura = prompt("Error ingrese la temperatura entre -50 y 50");
            temperatura = parseFloat(temperatura);
        }

        if(temperatura % 2 == 0){
            contadorTemperaturaPar++;
        }

        if(banderaDelPrimero == 0){
            paisMin = nombrePais;
            NroHabitantesMin = NroHabitantes;
            banderaDelPrimero = 1;
        }
        else{
            if(NroHabitantes < NroHabitantesMin){
                paisMin = nombrePais;
                NroHabitantesMin = NroHabitantes;
            }
        }

        if(temperatura > 40){
            contadorPaisMas40++;
        }

        if(banderaDelSegundo == 0){
            temperaturaMin = temperatura;
            temperaturaPaisMin = nombrePais;
            banderaDelSegundo = 1;
        }
        else{
            if(temperatura < temperaturaMin){
                temperaturaMin = temperatura;
                temperaturaPaisMin = nombrePais;
            }
        }



        respuesta = prompt("Desea continuar?");
     }
     promedioHabitantes = acumuladorHabitantes / contadorHabitantes;
            
     console.log("La cantidad de temperaturas pares es de: " + contadorTemperaturaPar);
     console.log("El nombre del pais con menos habitantes es: " + paisMin + " y sus habitantes son: " + NroHabitantesMin);
     console.log("La cantidad de paises que superan los 40 grados es de: " + contadorPaisMas40);
     console.log("El promedio de habitantes entre los paises ingresados es: " + promedioHabitantes);
     console.log("La temperatura min ingresada es: " + temperaturaMin + " y pertenece al pais: " + temperaturaPaisMin);
}
