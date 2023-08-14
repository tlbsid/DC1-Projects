let bouton = document.querySelector('#addItem');

let input = document.querySelector("#itemInput");

let itemprice = document.querySelector("#itemprice");

let nboccurence =0;

bouton.addEventListener('click', function(){

	let lib = document.querySelector('#itemInput');

// split sert à mettre dans un et même texte deux valeurs et pouvoir
// par la suite choisr quoi prendre avec le 0 donc pour ignorer et 
// le 1 pour le prendre en compte 

let lib_value = lib.value.split('-');

let type = document.querySelector('input[name="valeur"]:checked').value;

// Condition pour récupérer seulement la deuxième partie après
// avoir mis le split en haut pour pouvoir séparer le texte des chiffres
if(lib_value[0] != "" && lib_value[1] != ""){

	let liste = document.querySelector("#theList")
	if(type =='depenses'){
		liste = document.querySelector("#depenseListe") 
	}

	let li = document.createElement("li")
	let label = document.createElement('label');
	label.classList.add("occurence")
	label.innerText = input.value;
	li.appendChild(label);
	liste.appendChild(li);
	label.id="occurence"+ nboccurence;
	

// C'est pour calculer les valeurs entrées dans la box
// Et donc mettre le let solde et déclarer avec #

let solde = document.querySelector("#solde")

// innerText c'est pour récupérer l'interieur du texte

let solde_valeur = parseInt(solde.innerText)

// console.log est pour vérifier les erreurs 

console.log(solde_valeur)

// La condition c'est pour justement récupérer les revenus et les
// rajouter, parseInt c'est pour récupérer les entier dans la valeur
// lib_value

if (type == "revenus") {
	solde_valeur += parseInt(lib_value[1]) 
}
else {solde_valeur -= parseInt(lib_value[1])};
solde.innerText = solde_valeur

}




})

// Maintenant c'est pour trouver la valeur la plus élevé dans les dépenses
// et rajouter un autre eventListener

itemprice.addEventListener('click', function(){

	let max = 0;
	let ligne_id;
	let maxi = document.querySelector('#itemprice');

		document.querySelectorAll('.occurence').forEach(el => {
		let price = el.innerText.split("-") // => Price [1]
		if(price[1] > max ) {
			max = price[1];
			ligne_id = el.id;

		}

		else {
			const div = document.getElementById("occurence");

		div.style.color = "tomato";
		}
	})

} )