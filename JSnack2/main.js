$(document).ready(function () {
	//costanti per il valore massimo dei falli e punti da
	//generare
	const maxFalli = 200;
	const maxPunti = 60;
	//creazione oggetto
	let squadre = [
		{
			nome: "Mislano",
			punti: getRandomInt(maxPunti),
			falli: getRandomInt(maxFalli)
		},
		{
			nome: "Intruso",
			punti: getRandomInt(maxPunti),
			falli: getRandomInt(maxFalli)
		},
		{
			nome: "Giugentus",
			punti: getRandomInt(maxPunti),
			falli: getRandomInt(maxFalli)
		},
		{
			nome: "Napole",
			punti: getRandomInt(maxPunti),
			falli: getRandomInt(maxFalli)
		},
		{
			nome: "Parmis",
			punti: getRandomInt(maxPunti),
			falli: getRandomInt(maxFalli)
		},
		{
			nome: "Udineso",
			punti: getRandomInt(maxPunti),
			falli: getRandomInt(maxFalli)
		}
	];
	//stampa oggetto
	console.log(squadre);
	//creo array in cui salvare dati Destrutturati
	let newSquadre = [];
	//scorro array oggetti e pusho in array solo le due
	//proprietà
	for (let i = 0; i < squadre.length; i++) {
		let {nome, falli} = squadre[i];
		newSquadre.push(nome);
		newSquadre.push(falli);
	}
	//stampo il nuovo array
	console.log(newSquadre);
});
	//funzione random
	function getRandomInt(max) {
		let min = 0;
		return Math.floor(Math.random() * (max - min)) + min;
}