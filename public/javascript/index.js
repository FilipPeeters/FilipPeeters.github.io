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
	setMovieViewerTopLeftCoordinates();
	if(moviewindow != null){
		moviewindow.close();
	}
	document.getElementById('film').value = filmNumber;
	moviewindow = window.open('movieviewer.html', 'player', 'height=260,width=680,top='+movieWindowTopLeftY+',left='+movieWindowTopLeftX);
}

function setMovieViewerTopLeftCoordinates(){
	if(moviewindow != null && !moviewindow.closed){
		if(navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Opera"){
			movieWindowTopLeftX = moviewindow.screenLeft;
			movieWindowTopLeftY = moviewindow.screenTop;
		} else{
			movieWindowTopLeftX = moviewindow.screenX;
			movieWindowTopLeftY = moviewindow.screenY;
		}
	}
}
