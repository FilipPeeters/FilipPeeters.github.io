var filmPlayed = 1;

function setFilmPlayed(value){
	filmPlayed = value;
}

function setTitle(title){
	document.title = title+' - filippeeters.com';
}

function playFilmByURL(url){
	document.getElementById('video').src = 'video/'+getQualityString(getQuality())+getTitle(url)+'.mp4';
	document.getElementById('video').src = 'video/'+getQualityString(getQuality())+getTitle(url)+'.mp4';
}

function playFilm(){
	playFilmByURL(filmPlayed);
	setTitle(getTitle(filmPlayed));
}

function getQualityString(useHighQuality){
	if (useHighQuality == 1){	
		return 'HQ/';
	}
	else{
		return 'LQ/';
	}
}

function getTitle(filmNumber){
	filmNumber = filmNumber + '';
	switch (filmNumber){
		case '0': return "Showreel"
		case '1': return "De Hel van Tanger";
		case '2': return "Ein Langes Abschied";
		case '3': return "Die Frau vom Checkpoint Charlie_1";
		case '4': return "Die Frau vom Checkpoint Charlie_2";
		case '5': return "Stratospheregirl_1";
		case '6': return "Stratospheregirl_2";
		case '7': return "De Indringer";
		case '8': return "Resistance";
	}
}

function getQuality(){
	return document.quality[0].checked;
}

function playFilmOfOpener(){
	if(opener != null){
		element = opener.document.getElementById('film');
		setFilmPlayed(element.value);
		playFilm();
	}
}

function toHQ(){
	self.resizeTo(1100, 750);
	movie = document.getElementById('video');
	movie.height="576";
	movie.width="1050";
	document.getElementById("menu").className="horizontal";
	playFilm();
	
}

function toLQ(){
	self.resizeTo(680, 400);
	movie = document.getElementById('video');
	movie.height="192";
	movie.width="350";
	document.getElementById("menu").className="vertical";
	playFilm();
}
