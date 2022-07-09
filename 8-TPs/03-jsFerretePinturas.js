/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosFarenheit;
    let enCelcius;
    let enCelcius2;

    gradosFarenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    enCelcius = gradosFarenheit - 32;
    enCelcius2 = enCelcius * 0.5556;

    alert(gradosFarenheit + " farenheit son " + enCelcius2 + " centigrados");
}

function CentigradosFahrenheit () 
{
	let gradosCelcius;
    let enFarenheit;
    let enFarenheit2;

    gradosCelcius = parseInt(document.getElementById("txtIdTemperatura").value);

    enFarenheit = gradosCelcius * 1.8;
    enFarenheit2 = enFarenheit + 32;

    alert(gradosCelcius + " centigrados son " + enFarenheit2 + " farenheit");
}

//txtIdTemperatura