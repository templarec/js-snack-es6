$(document).ready(function () {
	//definisco array di oggetti gatto
 	const gatti = [
	 {
	 	nome: "Daisy",
		eta: 4,
		colore: "Tigrato",
		sesso: "Femmina"
	 },
	 {
		 nome: "Liliana",
		 eta: 4,
		 colore: "Tigrato",
		 sesso: "Femmina"
	 },
	 {
		 nome: "Murphy",
		 eta: 3,
		 colore: "Tuxedo",
		 sesso: "Maschio"
	 },
	 {
		 nome: "Arturino",
		 eta: 3,
		 colore: "Bianco/Tigrato",
		 sesso: "Maschio"
	 },
	 {
		 nome: "Onofrio",
		 eta: 1,
		 colore: "Nero",
		 sesso: "Maschio"
	 },
 ];
 	//MILESTONE 1
 	//scorro array e appendo nell'ul un li con il nome e colore
 	gatti.forEach((elemento, index, array) => {
 		let ul = $('#gatti');
 		ul.append(`<li>${elemento.nome}  è un gatto di colore ${elemento.colore}</li>`);
 	});

});