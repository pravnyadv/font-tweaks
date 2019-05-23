function exist(e) {
	return e.length;
}

function setCss(e) {
	e.style.fontSize = '16px';
	e.style.fontWeight = 400;
	e.style.letterSpacing = 'normal';
	e.style.wordSpacing = 'normal';
	e.style.lineHeight = '21.6px';
	e.style.color = '#242729';
	e.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
}


window.onload = function() {

	let all_para = document.querySelectorAll("body p");
	let para = document.querySelectorAll(".overview p");
	let li = document.querySelectorAll(".overview li");

	
	all_para.forEach(function(e) {
		setCss(e);
	})

	if(exist(para)) {
		para.forEach(function(e) {
			setCss(e);
		})
	}

	if(exist(li)) {
		li.forEach(function(e) {
			setCss(e);
		})
	}
	
}


