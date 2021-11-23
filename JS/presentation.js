/* Lanterne */
	var droite = 30;
	var gauche = 70;
	var sauv;
function lanterne() {
	sauv = droite;
	droite = gauche;
	gauche = sauv;
	document.getElementById("bouton").style.right = droite + "%";
	document.getElementById("fond").style.backgroundColor="#ffea7b";
	var temps = 1;
	var downloadTimer = setInterval(function(){
    	if(temps <= 0){
    	clearInterval(downloadTimer);
    	document.getElementById("fond").style.backgroundColor="black";
  	}
  	temps -= 1;
  	}, 40);
}

function levier() {
	document.getElementById("bouton").style.padding = "0px";
	document.getElementById("bouton").style.backgroundColor="#ffea7b";
	document.getElementById("fond").style.backgroundColor="#ffea7b";
}

/* aim */
var value = 1;
var hauteur = 1;
var longueur = 1;

/* Test en nuage de point pour la repartition de la cible sur la page*/
function aim() {
 	for (boucle = 0; boucle < 5000; boucle++) {
  		value++;
  		hauteur = Math.random() * (window.innerHeight - 40);
  		longueur = Math.random() * (window.innerWidth - 40);
    	document.getElementById("aim").innerHTML = value;
    	
		document.getElementById("cible").style.top = hauteur + "px";
  		document.getElementById("cible").style.left = longueur + "px";
	}
}

