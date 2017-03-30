var img = document.getElementsByClassName('animal');

var select = document.getElementById('filtros');
select.onchange = function() {

	if (select.value == "original") {
		for (var i = 0; i < img.length; i++) {
			img[i].classList.remove("blanco-negro");
			img[i].classList.remove("invertir-colores");
			img[i].classList.remove("sepia");
		}
	}

	if (select.value == "blanco-negro") {
		for (var j = 0; j < img.length; j++) {
			img[j].classList.add("blanco-negro");
			img[j].classList.remove("original");
			img[j].classList.remove("invertir-colores");
			img[j].classList.remove("sepia");
		}
	}

	if (select.value == "invertir-colores") {
		for (var k = 0; k < img.length; k++) {
			img[k].classList.add("invertir-colores");
			img[k].classList.remove("blanco-negro");
			img[k].classList.remove("original");
			img[k].classList.remove("sepia");
		}
	}

	if (select.value == "sepia") {
		for (var l = 0; l < img.length; l++) {
			img[l].classList.add("sepia");
			img[l].classList.remove("blanco-negro");
			img[l].classList.remove("original");
			img[l].classList.remove("invertir-colores");
		}
	}
}