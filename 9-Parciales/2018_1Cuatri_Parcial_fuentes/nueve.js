/*
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el 
cual debe ser entre 1 y 100 (validar), la temperatura de almacenamiento(entre -30 y 30)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
    let respuesta;
    let marcaProducto;
    let pesoProducto;
    let temperaturaAlmacenamiento;
    let contadorTemperaturaPar=0;
    let banderaDelPrimero;
    let pesoMax;
    let marcaMax;
    let contadorMenosCeroGrados=0;
    let contadorPeso=0;
    let acumuladorPeso=0;
    let promedioPesoTotal;
    let pesoMin;
    

    respuesta = "si";

    banderaDelPrimero = "primer valor";

    while(respuesta == "si"){
        marcaProducto = prompt("Ingrese la marca del producto");
        marcaProducto = marcaProducto.toLowerCase();

        pesoProducto = prompt("Ingrese el peso del producto");
        pesoProducto = parseFloat(pesoProducto);

        while(pesoProducto < 1 || pesoProducto > 100){
            pesoProducto = prompt("Erroe ingrese el peso del producto");
            pesoProducto = parseFloat(pesoProducto);
        }

        contadorPeso++;
        acumuladorPeso+= pesoProducto;

        temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento.");
        temperaturaAlmacenamiento = parseFloat(temperaturaAlmacenamiento);

        while(temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30){
            temperaturaAlmacenamiento = prompt("Error ingrese la temperatura de almacenamiento.");
            temperaturaAlmacenamiento = parseFloat(temperaturaAlmacenamiento);
        }

        if(temperaturaAlmacenamiento %2 == 0){
            contadorTemperaturaPar++;
        }

        if(banderaDelPrimero == "primer valor"){
            pesoMax = pesoProducto;
            marcaMax = marcaProducto;
            pesoMin = pesoProducto;
            banderaDelPrimero = "primer valor ingresado";
        }
        else{
            if(pesoProducto > pesoMax){
                pesoMax = pesoProducto;
                marcaMax = marcaProducto;
            }
            else{
                if(pesoProducto < pesoMin){
                    pesoMin = pesoProducto;
                }
            }
        }

        if(temperaturaAlmacenamiento < 0){
            contadorMenosCeroGrados++;
        }


        

        respuesta = prompt("Desea continuar?");
    }
    promedioPesoTotal = acumuladorPeso / contadorPeso;

    console.log("La cantidad de temperaturas pares es de: " + contadorTemperaturaPar);
    console.log("La marca del producto mas pesado es: " + marcaMax + ", y su peso es de: " + pesoMax);
    console.log("La cantidad de productos que se conservan a menos de 0 grados es de: " + contadorMenosCeroGrados);
    console.log("El promedio del peso de todos los productos es de: " + promedioPesoTotal);
    console.log("El peso máximo es de: " + pesoMax  + " y el mínimo: " + pesoMin);



}
