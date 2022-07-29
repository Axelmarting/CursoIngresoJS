/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
 */
function mostrar()
{
    let notaIngresada;
    let sexoIngresado;
    let contadorAlumnos = 0;
    let acumuladorNotas = 0;
    let promedioNotasTotales;
    let notaMinima;
    let sexoIngresadoMinimo;
    let banderaDelPrimero;
    let contadorHombres=0;

    banderaDelPrimero = "Primer valor";
    

    while(contadorAlumnos<5){
        notaIngresada = prompt("Ingrese nota entre 0 y 10");
        notaIngresada = parseInt(notaIngresada);

        while(notaIngresada<0 || notaIngresada >10){
            notaIngresada = prompt("Error ingrese nota entre 0 y 10");
            notaIngresada = parseInt(notaIngresada);
        }

        sexoIngresado = prompt("Ingrese sexo: F o M");
        sexoIngresado = sexoIngresado.toUpperCase();

        while(sexoIngresado != "F" && sexoIngresado != "M"){
            sexoIngresado = prompt("Ingrese sexo: F o M");
            sexoIngresado = sexoIngresado.toUpperCase();
        }

        if(banderaDelPrimero == "Primer valor"){
            notaMinima = notaIngresada;
            sexoIngresadoMinimo = sexoIngresado;
            banderaDelPrimero = "Primer valor ingresado";
        }
        else{
            if(notaIngresada < notaMinima){
                notaMinima = notaIngresada;
                sexoIngresadoMinimo = sexoIngresado;
            }
        }
        
        if(sexoIngresado == "M" && notaIngresada > 5){
            contadorHombres++;
        }

        

        contadorAlumnos++;
        acumuladorNotas=acumuladorNotas + notaIngresada;
    } 
    
    promedioNotasTotales = acumuladorNotas / contadorAlumnos;

    alert("El promedio de notas totales es de: " + promedioNotasTotales);
    alert("La nota mas baja es: " + notaMinima + " y el sexo es: " + sexoIngresadoMinimo);
    alert("La cantidad de varones que su nota es mayor o igual que 6 es de: " + contadorHombres);
}

/* let notaIngresada;
    let sexoIngresado;
    let contadorAlumnos = 0;
    let acumuladorNotas = 0;
    let promedioNotasTotales;
    let notaMinima;
    let sexoIngresadoMinimo;
    let notaMasculinaMayorCinco;
    

    while(contadorAlumnos<3){
        notaIngresada = prompt("Ingrese nota entre 0 y 10");
        notaIngresada = parseInt(notaIngresada);

        while(notaIngresada<0 || notaIngresada >10){
            notaIngresada = prompt("Error ingrese nota entre 0 y 10");
            notaIngresada = parseInt(notaIngresada);
        }

        sexoIngresado = prompt("Ingrese sexo: F o M");
        sexoIngresado = sexoIngresado.toUpperCase();

        while(sexoIngresado != "F" && sexoIngresado != "M"){
            sexoIngresado = prompt("Ingrese sexo: F o M");
            sexoIngresado = sexoIngresado.toUpperCase();
        }

        if(contadorAlumnos==0){
            notaMinima = notaIngresada;
            sexoIngresadoMinimo = sexoIngresado;
        }
        else{
            if(sexoIngresado<sexoIngresadoMinimo){
                notaMinima= notaIngresada;
                sexoIngresadoMinimo= sexoIngresado;
            }
        }

        switch(sexoIngresado){
            case "M":
                if(contadorAlumnos==0 && notaIngresada > 5){
                    notaMasculinaMayorCinco = notaIngresada;
                }
                break;
        }

        contadorAlumnos++;
        acumuladorNotas=acumuladorNotas + notaIngresada;
    } 
    
    promedioNotasTotales = acumuladorNotas / contadorAlumnos;

    alert("El promedio de notas totales es de: " + promedioNotasTotales);
    alert("La nota mas baja es: " + notaMinima + " y el sexo es: " + sexoIngresadoMinimo);
    alert("La cantidad de varones que su nota es mayor o igual que 6 es de: " + contadorAlumnos);
    */