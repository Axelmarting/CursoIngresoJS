/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let diametroMayor;
	let diametroMenor;
	let ladosMenores;
	let ladosMayores;
	let sumaCantidades;
	let metrosVarillasPlastico;
	let cmPapel;
	let metrosPapel;
	let metrosPapelX10;
	let metrosVarillasX10;


	diametroMayor = prompt("Ingrese cm del diametro mayor"); //4.5
	diametroMayor = parseFloat(diametroMayor);

	diametroMenor = prompt("Ingrese cm del diametro menor"); //3
	diametroMenor = parseFloat(diametroMenor);

	ladosMayores = prompt("Ingrese los cm de los lados mayores"); //3.5
	ladosMayores = parseFloat(ladosMayores);

	ladosMenores = prompt("Ingrese los cm de los lados menores");//2
	ladosMenores = parseFloat(ladosMenores);

	sumaCantidades = diametroMayor + diametroMenor + ladosMayores*2 + ladosMenores*2;

	metrosVarillasPlastico = sumaCantidades / 100;
	cmPapel = sumaCantidades * 1.10;
	metrosPapel = cmPapel / 100;

	metrosVarillasX10 = metrosVarillasPlastico * 10;
	metrosPapelX10 = metrosPapel *10;

	alert("La cantidad de varillas es de: " + metrosVarillasX10 + " mts y la cantidad de papel es de: " + metrosPapelX10 + " mts.");



	




}
//cm / 100 = m

// alert("Esto funciona de maravillaa");