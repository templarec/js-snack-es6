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
	{
		nome: "Gigia",
		eta: 1,
		colore: "Rosso",
		sesso: "Femmina"
	}
 ];
	/*Milestone 1
	  Definire un array di oggetti; ogni oggetto rappresenta un gatto,
	  che è caratterizzato da: nome, età, colore e sesso.
	  Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
	  ciascuno con il proprio colore e il proprio nome.*/

 	//scorro array e appendo nell'ul un li con il nome e colore
 	gatti.forEach((elemento, index, array) => {
 		let ul = $('#milestone1');
 		ul.append(`<li>${elemento.nome}  è un gatto di colore ${elemento.colore}</li>`);
 	});
	/*Milestone 2
	 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco
	 di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
	 Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro
	 se il gatto è più vecchio.*/

    // creo due array diversi maschi e femmine
	let maschi = gatti.filter((elemento) => elemento.sesso === "Maschio");
	let femmine = gatti.filter((elemento) => elemento.sesso === "Femmina");
	//stampo nel ul
	maschi.forEach((elemento) => {
		let ul = $('#milestone2');
		if (elemento.eta <= 2){
			ul.append(`<li><i class="fas fa-ribbon maschio giovane"></i> ${elemento.nome}  è un gatto di colore ${elemento.colore}</li>`);
		} else {
			ul.append(`<li><i class="fas fa-ribbon maschio"></i> ${elemento.nome}  è un gatto di colore ${elemento.colore}</li>`);
		}


	})
	femmine.forEach((elemento) => {
		let ul = $('#milestone2');
		if (elemento.eta <= 2) {
			ul.append(`<li><i class="fas fa-ribbon femmina giovane"></i> ${elemento.nome}  è un gatto di colore ${elemento.colore}</li>`);
		} else {
			ul.append(`<li><i class="fas fa-ribbon femmina"></i> ${elemento.nome}  è un gatto di colore ${elemento.colore}</li>`);
		}
	})
});