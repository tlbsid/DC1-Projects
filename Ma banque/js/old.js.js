// Je créé une variable "bouton" et je stocke
// l'élément du document qui porte l'id addItem
let bouton = document.querySelector("#addItem")

// Je récupère mon champ de saisie de texte
let input = document.querySelector("#itemInput")

// Sur mon bouton, j'ajoute un écouteur d'événément
bouton.addEventListener('click', addItemToList )

input.addEventListener('keyup', function(e){
	// J'affiche dans le navigateur la valeur de la variable e
	if(e.key == 'Enter'){
		//alert('Tu as cliqué sur Entrer')
		addItemToList();
	}
})

let lesIcones = document.querySelectorAll("i")

// Ce qui va suivre est la même foction que celle d'en bas mais c'est 
// la nouvelle manière pour écrire les "function" on met "=>"
/*lesIcones.forEach(function(icone){
	icone.addEventListener("click", removeItem)
})*/

// Je prends mon tableau d'icône, pour chaque icone, je récupère dans
// l'ordre et je lui applique un evenet listener
lesIcones.forEach(icone => {
	icone.addEventListener("click", removeItem)
})
/* Je créer une fonction pour pouvoir exécuter le code plusieurs fois.
Une première au clic sur le bouton et une seconde lros de la touche Entrer */
function addItemToList(e){

	// Si ma tâche est différente d'un string vide, j'éxécute le contenu
	// de l'accolade
	if(input.value != ""){
		// On récupère la liste
		if(revenus.checked == true)
		let liste = document.querySelector("#theList");
		// On ajoute un élément dans la liste
			// On créé d'abord un LI
			let li = document.createElement('li');
			// Mon li est composé d'un label, donc je créé le label
			let label = document.createElement('label');
			// Ensuite j'écris dans le label la valeur saisie par l'utilisateur
			label.innerText = input.value;

			// On créé l'icône de suppression
			let i = document.createElement('i')
			// Je récupère le i déjà créé et j'ajoute les class de font-awesome
			i.classList.add('fas','fa-trash')

			// J'ajoute un écouteur d'évenement à mon icône
			i.addEventListener('click', removeItem)

		// Je fusionne maintenant mes éléments 
		li.appendChild(label)
		li.appendChild(i);
		liste.appendChild(li);


		// Je vide la valeur de mon champ de saisie
		input.value = ""

	}else{
		// Sinon, j'affiche une erreur
		alert("Merci de saisir une tâche.")
	}
}

function removeItem(event) {
	// Je demande confirmation de la supression à l'utilisateur
	let reponse = confirm("êtes vous sûr de vouloir supprimer cet élément ?")
	if(reponse == true) {
	//J'écris dans la console pour m'aider à comprendre
	// ce que je fais le programme
	console.log(event.target)
	//event.target correspond à l'élément qui a subit le click
	// Si je fais .parentNode je récupère l'élément
	// parent de cet éléement
	// .remove me permet de supprimer du HTML
	event.target.parentNode.remove()
	direBonjour("Yohan","Tournadre")
	}
}

function direBonjour(prenom, nom) {
	alert(`Bonjour ${prenom} ${nom}`)
}