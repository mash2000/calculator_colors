const 
		result = document.querySelector(".result"),
		ranges = document.querySelectorAll('#answ'),
		rves = document.querySelectorAll(".rves"),

		constantes = {
			litr: 6,
			bottle: 5
		},
		variants =  ['банка краски', 'банки красок', 'банок краски'];

function getResult(eles) {
	let 
		text  = '',
		array = [],
		count = 0,
		len_h = 0,
		h_wid = 0;

	eles.forEach(el => {
		if (el.value != '') {
			array.push(parseFloat(el.value));
		}
	});
	len_h = 2 * array[0] * array[2];
	h_wid = 2 * array[1] * array[2];
	count = Math.ceil((len_h + h_wid) / constantes.litr / constantes.bottle);
	text += 'Вам потребуется ';
	text += count + ' ';
	if (count % 100 >= 11 && count % 100 < 15) {
		text += variants[2];
	}
	else if (count % 10 === 1) {
		text += variants[0];
	}
	else if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) {
		text += variants[1];
	}
	else {
		text += variants[2];
	}
	result.textContent = text;
}

ranges.forEach(el => {
	el.addEventListener('keydown', function() {
		getResult(ranges);
	});
	el.addEventListener('keyup', function() {
		getResult(ranges);
	});
});

rves.forEach(rve => {
	rve.addEventListener('change', function() {
		getResult(rves);
	})
});