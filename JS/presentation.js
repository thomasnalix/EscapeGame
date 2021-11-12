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
  	}, 50);
}

function levier() {
	document.getElementById("fond").style.backgroundColor="#ffea7b";
}

/* Course */
