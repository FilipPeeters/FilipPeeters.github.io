function setVisibleById(id, b) {
	var a;
	a = document.getElementById(id);
	if (b){
		a.style.display = 'block';
	} else {
		a.style.display = 'none';
	}
}