var saisieTexte = document.querySelector('.saisieTexte');
var bouton = document.querySelector('.bouton');
var cpt = 0;
var espace = 0;

const compter = () => {
	var texte = saisieTexte.value;
	let nbChar = texte.length;
	let tabNbChar = texte.split('');
	var mots = texte.split(' ').length;

	//ne pas compter les espace
	for (let i = 0; i < tabNbChar.length; i++) {
		if (tabNbChar[i] === ' ') {
			espace++;
		}
	}
console.log(`nombre de char : ${nbChar} .... nb d'espace : ${espace}`);
	document.querySelector('.nbMots').textContent = `${mots} mots pour ${
		nbChar - espace
	} lettres`;
	espace=0;
};

bouton.addEventListener('click', compter);

// enlever `'-_
