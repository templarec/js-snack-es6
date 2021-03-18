$(document).ready(function () {
	//costruisco l'array bici con gli oggetti
	let bici = [
		{
			nome: "City Bike",
			peso: 15
		},
		{
			nome: "Mountain Bike",
			peso: 10
		},
		{
			nome: "Racing",
			peso: 8
		},
		{
			nome: "Downhill Bike",
			peso: 12
		},
		{
			nome: "BMX",
			peso: 7
		},
		{
			nome: "Chrono Bike",
			peso: 5
		},
	];
	//setto la variabile peso minimo al primo peso dell'array
	let pesoMin = bici[0].peso;
	//imposto variabile per l'indice
	let index = 0;
	//scorro l'array e verifico quale peso è il minore e lo salvo
	//nelle variabili
	for (let i = 1; i < bici.length; i++) {
		if (bici[i].peso < pesoMin){
			pesoMin = bici[i].peso;
			index = i;
		}
	}
	console.log(`La bici più leggera è la ${bici[index].nome}`);
});