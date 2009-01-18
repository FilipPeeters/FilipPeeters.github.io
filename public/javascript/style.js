function setActiveStyleSheet(title) {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	if(a.getAttribute("rel").indexOf("style") != -1
		&& a.getAttribute("title")) {
		a.disabled = true;
		if(a.getAttribute("title") == title) a.disabled = false;
		}	
	}
	setVisible('img', false);
	setVisible('div', false);
}
function setVisible(tagName, b) {
	var i, a;
	for(i=0; a = document.getElementsByTagName(tagName)[i]; i++) {
		if (b){
			a.style.visibility = 'visible';
		} else {
			a.style.visibility = 'hidden';
		}
	}
}
function setVisibleById(id, b) {
	var a;
	a = document.getElementById(id);
	if (b){
		a.style.visibility = 'visible';
	} else {
		a.style.visibility = 'hidden';
	}
}