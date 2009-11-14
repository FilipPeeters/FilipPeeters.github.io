var height = "205";
var width = "345";
var isLQ = true;

function setTitle(title){
	document.title = title+' - filippeeters.com';
}

function changeFilm(film){
	var title = getTitle(film);
	var url = 'video/'+getQualityString(getQuality())+title+'.mp4';
	setTitle(title);
	return document.getElementById('video').href = url;
}


function playFilm(film){
	flowplayer().getClip().update({url: changeFilm(film), accelerated: true});
	flowplayer().play();
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
	switch (+filmNumber){
		case 0: return "Showreel"; break;
		case 1: return "De Hel van Tanger"; break;
		case 2: return "Ein Langes Abschied"; break;
		case 3: return "Die Frau vom Checkpoint Charlie_1"; break;
		case 4: return "Die Frau vom Checkpoint Charlie_2"; break;
		case 5: return "Stratospheregirl_1"; break;
		case 6: return "Stratospheregirl_2"; break;
		case 7: return "De Indringer"; break;
		case 8: return "Resistance"; break;
		default: throw new Error('unknown film '+ filmNumber + ' requested'); break;
	}
}

function getQuality(){
	return document.quality[0].checked;
}

function playFilmOfOpener(){
	if(opener != null){
		element = opener.document.getElementById('film');
		changeFilm(element.value);
	} else {
		changeFilm(1);
	}
	flowplayer("video", "video/flowplayer-3.1.5.swf");
}

function toHQ(){
	if (isLQ) {
	flowplayer().hide().stop().unload();
	self.resizeBy(385, 0);
	self.resizeBy(0,385)
	height="590";
	width="1050";
	document.getElementById('video').style.cssText = 'display: block; width: ' + width + 'px; height: ' + height + 'px;';
	document.getElementById('menu').className = 'horizontal';
	flowplayer("video", "video/flowplayer-3.1.5.swf");
	isLQ = false;
	}
}

function toLQ(){
	if (!isLQ) {
	flowplayer().hide().stop().unload();
	self.resizeBy(0, -385);
	self.resizeBy(-385, 0);
	height = "205";
	width = "345";
	document.getElementById('video').style.cssText = 'display: block; width: ' + width + 'px; height: ' + height + 'px;';
	document.getElementById('menu').className = 'vertical';
	flowplayer("video", "video/flowplayer-3.1.5.swf");
	isLQ = true;
	}
}
