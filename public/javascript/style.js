var moviewindow = null;
var movieWindowTopLeftX = 0;
var movieWindowTopLeftY = 0;

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
		setMovieViewerTopLeftCoordinates();
		moviewindow.close();
	}
	document.getElementById('film').value = filmNumber;
	moviewindow = window.open('movieviewer.html', 'player', 'height=245,width=680,top='+movieWindowTopLeftY+',left='+movieWindowTopLeftX);
}

function setMovieViewerTopLeftCoordinates(){
	if(moviewindow != null){
		movieWindowTopLeftX = moviewindow.screenLeft || moviewindow.screenX;
		movieWindowTopLeftY = moviewindow.screenTop || moviewindow.screenY;
	}
}