var moviewindow = null;

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
	if(moviewindow != null){
		moviewindow.close();
	}
	document.getElementById('film').value = filmNumber;
	moviewindow = window.open('movieviewer.html', 'player', 'height=245,width=680,top=1,left=0');
}
