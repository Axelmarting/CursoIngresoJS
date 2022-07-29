/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	let contador5Productos=0;
	let tipoProducto;
	let precioProducto;
	let cantidadUnidades=0;
	let marcaProducto;
	let fabricanteProducto;
	let banderaDelPrimero;
	let precioAlcoholMin;
	let unidadesAlcoholMin;
	let fabricanteAlcoholMin;
	let banderaDelSegundo;
	let unidadesMax;
	let tipoProductoUnidadesMax;
	let acumuladorUnidadesProductoMax=0;
	let contadorUnidadesProductoMax=0;
	let promedio;
	let acumuladorJabones=0;


	banderaDelPrimero = 0;

	banderaDelSegundo = 0;

	while(contador5Productos < 2){
		tipoProducto = prompt("Ingrese el tipo del producto, barbijo jabon o alcohol");
		tipoProducto = tipoProducto.toLowerCase();

		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol"){
			tipoProducto = prompt("Error, ingrese el tipo del producto, barbijo jabon o alcohol");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precioProducto = prompt("Ingrese el precio del producto entre 100 y 300");
		precioProducto = parseInt(precioProducto);

		while(precioProducto < 100 || precioProducto > 300){
			precioProducto = prompt("Error, ingrese el precio del producto entre 100 y 300");
			precioProducto = parseInt(precioProducto);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades no puede ser 0 o negativo y no debe superar las 1000 unidades")
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 0 || cantidadUnidades > 1000){
			cantidadUnidades = prompt("Error ingrese la cantidad de unidades no puede ser 0 o negativo y no debe superar las 1000 unidades")
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marcaProducto = prompt("Ingrese la marca del producto");

		fabricanteProducto = prompt("Ingrese el fabricante del producto");

		//aca empieza el A.

		if(banderaDelPrimero == 0 && tipoProducto == "alcohol"){
			precioAlcoholMin = precioProducto;
			unidadesAlcoholMin = cantidadUnidades;
			fabricanteAlcoholMin = fabricanteProducto;

			banderaDelPrimero = 1;
		}
		else{
			if(precioProducto < precioAlcoholMin){
				precioAlcoholMin = precioProducto;
				unidadesAlcoholMin = cantidadUnidades;
				fabricanteAlcoholMin = fabricanteProducto;
			}
		}

		//aca empieza el B.

		if(banderaDelSegundo == 0){
			unidadesMax = cantidadUnidades;
			tipoProductoUnidadesMax = tipoProducto;

			banderaDelSegundo = 1;
		}
		else{
			if(cantidadUnidades > unidadesMax){
				unidadesMax = cantidadUnidades;
				tipoProductoUnidadesMax = tipoProducto;
				
			}
		}

		if(tipoProducto == tipoProductoUnidadesMax){
				acumuladorUnidadesProductoMax+= cantidadUnidades;
				contadorUnidadesProductoMax++;
		}

		//aca empieza el C.

		if(tipoProducto == "jabon"){
			acumuladorJabones+= cantidadUnidades;
		}



		contador5Productos ++;
	}
	promedio = acumuladorUnidadesProductoMax / contadorUnidadesProductoMax;

	console.log("Del mas barato de los alcohol, la cantidad de unidades es: " + unidadesAlcoholMin + " y el fabricante es: " + fabricanteAlcoholMin);
	console.log("El tipo con mas unidades es: " + tipoProductoUnidadesMax + " y el promedio por compra es: " + promedio);
	console.log("La cantidad de unidades de jabon es de: " + acumuladorJabones);
}