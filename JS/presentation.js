/* =======================================*/
/*                LANTERNE                */
/* =======================================*/
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


/* =======================================*/
/*                 AIM                    */
/* =======================================*/

/* Permet de déplacer la cible */
var value = 0;
var hauteur = 1;
var longueur = 1;
function aim() {
  	value++;
  	hauteur = Math.random() * (window.innerHeight - 50);
  	longueur = Math.random() * (window.innerWidth - 50);
    document.getElementById("aim").innerHTML = value;
	document.getElementById("cible").style.top = hauteur + "px";
  	document.getElementById("cible").style.left = longueur + "px";
}

/* Fonction du timer */
function jouer() {
	var count=15;
	var gagner = false;
	document.getElementById("cible").style.display = "block";
	document.getElementById("aim").style.display = "block";
	var counter=setInterval(timer, 1000);
	document.getElementById("cible").style.display = "block";
	document.getElementById("jouer").style.display = "none";
	function timer() {
		count--;
		if (count < 0) {
		    clearInterval(counter);
		    return;
		}
		document.getElementById("timer").innerHTML=count + " secondes";
		gagner = value > 17;
		if (gagner && count==0) {
	    	document.getElementById("cible").style.display = "none";
	    	document.getElementById("result").style.display = "block";
		} else if (!gagner && count==0){
			document.getElementById("jouer").style.display = "block";
			document.getElementById("cible").style.display = "none";
			document.getElementById("aim").style.display = "none";
			value = 0;
		} 
	}
}


