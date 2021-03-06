$(document).ready(function () {
	//definisco array di oggetti gatto
 	const gatti = [
	 {
	 	nome: "Daisy",
		eta: 30,
		colore: "Tigrato",
		sesso: "Femmina"
	 },
	 {
		 nome: "Liliana",
		 eta: 15,
		 colore: "Tigrato",
		 sesso: "Femmina"
	 },
	 {
		 nome: "Murphy",
		 eta: 15,
		 colore: "Tuxedo",
		 sesso: "Maschio"
	 },
	 {
		 nome: "Arturino",
		 eta: 30,
		 colore: "Bianco/Tigrato",
		 sesso: "Maschio"
	 },
	 {
		 nome: "Onofrio",
		 eta: 7,
		 colore: "Nero",
		 sesso: "Maschio"
	 },
	{
		nome: "Gigia",
		eta: 7,
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
 	gatti.forEach((elemento) => {
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
	});
	/*Milestone 3
	  Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
	  inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.*/

	const newGatti = [];
		gatti.forEach((elemento) => {

		if (elemento.sesso === "Femmina"){
			let obj = {
				nome: elemento.nome,
				colore: elemento.colore,
				opacita: setOpacityByAge(elemento.eta)
			}
			newGatti.push(obj);

		}
		if (elemento.sesso === "Maschio"){
			let obj = {
				nome: elemento.nome,
				colore: elemento.colore,
				opacita: setOpacityByAge(elemento.eta)
			}
			newGatti.push(obj);
		}
	});
	console.log("Milestone 3: ", newGatti);
	//Milestone 3.1 Bonus
	//creo nuovo array gatti come milestone 2 aggiungendoci proprietà sesso
	const bonusGatti = [];
	gatti.forEach((elemento) => {
		let obj = {
			nome: elemento.nome,
			colore: elemento.colore,
			opacita: setOpacityByAge(elemento.eta),
			sesso: elemento.sesso
		}
		bonusGatti.push(obj);
	});
	//stampo in una lista in aggiungendo classe sesso e opacità
	bonusGatti.forEach((elemento, index) => {
		let ul = $('#milestone3-1');
		let sesso = elemento.sesso //mi serve per fare il lowercase della classe
			ul.append(`<li><i class="fas fa-ribbon ${sesso.toLowerCase()}"></i> ${elemento.nome}  è un gatto di colore ${elemento.colore}</li>`);
			ul.children('li').eq(index).children('i').css("opacity", elemento.opacita);

	});

});
const setOpacityByAge = (age) => {
	let na;
	na = age * 0.03;
	return na.toFixed(2);

};

