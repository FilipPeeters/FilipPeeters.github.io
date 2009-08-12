function setVisibleById(id, b) {
	var a;
	a = document.getElementById(id);
	if (b){
		a.style.display = 'block';
	} else {
		a.style.display = 'none';
	}
}

function playMovie(filmNumber){
	document.getElementById('film').value = filmNumber;
	window.open('movieviewer.html', 'player', 'height=240,width=680,top=1,left=0')
}
