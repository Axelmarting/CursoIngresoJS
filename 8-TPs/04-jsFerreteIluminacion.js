/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let precioLamparas = 35;
    let descuento = 0;
    let porcentaje;
    let cantidadXPrecio;
    let precioFinal;
    let ingresosBrutos;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    cantidadXPrecio = cantidadLamparas * precioLamparas;

    switch(cantidadLamparas){
        case 5:
            if(marca == "ArgentinaLuz"){
                descuento = 40;
            }
            else{
                descuento = 30;
            }
            break;
        case 4: 
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                descuento = 25;
            }
            else{
                descuento = 20;
            }
            break;
        case 3:
            if(marca == "ArgentinaLuz"){
                descuento = 15;
            }
            else{
                if(marca == "FelipeLamparas"){
                    descuento = 10;
                }
                else{
                    descuento = 5;
                }
            }
            break;
        case 2:
        case 1:
            descuento = 0;
            break;

        default:
            descuento = 50;
            break;

    }
    
    porcentaje = cantidadXPrecio * descuento / 100;
    precioFinal = cantidadXPrecio - porcentaje;

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120){
        porcentaje = precioFinal * 10 / 100;
        ingresosBrutos = precioFinal + porcentaje;
        alert("IIBB usted pago " + porcentaje);
        document.getElementById("txtIdprecioDescuento").value = ingresosBrutos;
    }


}
//txtIdCantidad
//txtIdprecioDescuento

/*	TP4 IF/IF

    let cantidadLamparas;
    let marca;
    let precioLamparas = 35;
    let cantidadXPrecio;
    let descuento;
    let porcentaje = 0;
    let operacionPorcentaje;
    let ingresosBrutos;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    cantidadXPrecio = cantidadLamparas * precioLamparas;

    if(cantidadLamparas >= 6){
        porcentaje = 50;   
    }
    else{
        if(cantidadLamparas == 5){
            if(marca == "ArgentinaLuz"){
                porcentaje = 40;
            }
            else{
                porcentaje = 30; 
            }  
        }
        else{
            if(cantidadLamparas == 4){
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    porcentaje = 25;
                }
                else{
                    porcentaje = 20;
                }
            }
            else{
                if(cantidadLamparas == 3){
                    if(marca == "ArgentinaLuz"){
                        porcentaje = 15;
                    }
                    else{
                        if(marca == "FelipeLamparas"){
                            porcentaje = 10;
                        }
                        else{
                            porcentaje = 5;
                        }
                    }
                }
            }
        }   
    }

    operacionPorcentaje = cantidadXPrecio * porcentaje / 100;
    descuento = cantidadXPrecio - operacionPorcentaje;
    document.getElementById("txtIdprecioDescuento").value = descuento;

    if(descuento > 120){
        operacionPorcentaje = descuento * 10 / 100;
        ingresosBrutos = descuento + operacionPorcentaje;
        alert("IIBB usted pago " + operacionPorcentaje);
        document.getElementById("txtIdprecioDescuento").value = ingresosBrutos;
    }

*/ //----------------------------------------------------------------------

/* TP4 SWITCH/SWITCH (RESUELTO RARO PERO FUNCIONAL)

    let cantidadLamparas;
    let marca;
    let precioLamparas = 35;
    let descuento = 0;
    let porcentaje;
    let cantidadXPrecio;
    let precioFinal;
    let ingresosBrutos;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    cantidadXPrecio = cantidadLamparas * precioLamparas;

    switch(true){
        case cantidadLamparas >= 6:
            descuento = 50;
            break;

        case cantidadLamparas == 5 && marca == "ArgentinaLuz":
            descuento = 40;
            break;

        case cantidadLamparas == 5 && marca != "ArgentinaLuz":
            descuento = 30;
            break;

        case cantidadLamparas == 4 && marca == "ArgentinaLuz":
        case cantidadLamparas == 4 && marca == "FelipeLamparas":
            descuento = 25;
            break;

        case cantidadLamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas":
            descuento = 20;
            break;
            
        case cantidadLamparas == 3 && marca == "ArgentinaLuz":
            descuento = 15;
            break;

        case cantidadLamparas == 3 && marca == "FelipeLamparas":
            descuento = 10;
            break;

        case cantidadLamparas == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas":
            descuento = 5;
            break;
    }
    porcentaje = cantidadXPrecio * descuento / 100;
    precioFinal = cantidadXPrecio - porcentaje;

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120){
        porcentaje = precioFinal * 10 / 100;
        ingresosBrutos = precioFinal + porcentaje;
        alert("IIBB usted pago " + porcentaje);
        document.getElementById("txtIdprecioDescuento").value = ingresosBrutos;
    }
    *///--------------------------------------------------------------------------
   
    /*  TP4 SWITCH\SWITCH (PERFECTO)

    let cantidadLamparas;
    let marca;
    let precioLamparas = 35;
    let descuento = 0;
    let porcentaje;
    let cantidadXPrecio;
    let precioFinal;
    let ingresosBrutos;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    cantidadXPrecio = cantidadLamparas * precioLamparas;

    switch(cantidadLamparas){
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                    descuento = 40;
                    break;

                default:
                    descuento = 30;
                    break;
            } 
        case 4:
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;

                default:
                    descuento = 20;
                    break;
            }
        case 3:
            switch(marca){
                case "ArgentinaLuz":
                    descuento = 15;
                    break;

                case "FelipeLamparas":
                    descuento = 10;
                    break;

                default:
                    descuento = 5;
                    break;
            }
        case 2:
        case 1:
            descuento = 0;
            break;

        default:
            descuento = 50;
            break;
    }
    porcentaje = cantidadXPrecio * descuento / 100;
    precioFinal = cantidadXPrecio - porcentaje;

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120){
        porcentaje = precioFinal * 10 / 100;
        ingresosBrutos = precioFinal + porcentaje;
        alert("IIBB usted pago " + porcentaje);
        document.getElementById("txtIdprecioDescuento").value = ingresosBrutos;
    }*///--------------------------------------------------------------------
    
    /*   TP4 IF/SWITCH
    let cantidadLamparas;
    let marca;
    let precioLamparas = 35;
    let descuento = 0;
    let porcentaje;
    let cantidadXPrecio;
    let precioFinal;
    let ingresosBrutos;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    cantidadXPrecio = cantidadLamparas * precioLamparas;

    if(cantidadLamparas == 5){
            switch(marca){
                case "ArgentinaLuz":
                    descuento = 40;
                    break;

                default:
                    descuento = 30;
                    break;
            } 
    }
    else{
        if(cantidadLamparas == 4){
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;

                default:
                    descuento = 20;
                    break;
            }
        }
        else{
            if(cantidadLamparas == 3){
                switch(marca){
                    case "ArgentinaLuz":
                        descuento = 15;
                        break;
    
                    case "FelipeLamparas":
                        descuento = 10;
                        break;
    
                    default:
                        descuento = 5;
                        break;
                }
            }
            else{
                if(cantidadLamparas <= 2){
                    descuento = 0;
                }
                else{
                    descuento = 50;
                }
            }
        }
    }
    
    porcentaje = cantidadXPrecio * descuento / 100;
    precioFinal = cantidadXPrecio - porcentaje;

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120){
        porcentaje = precioFinal * 10 / 100;
        ingresosBrutos = precioFinal + porcentaje;
        alert("IIBB usted pago " + porcentaje);
        document.getElementById("txtIdprecioDescuento").value = ingresosBrutos;
    }*/