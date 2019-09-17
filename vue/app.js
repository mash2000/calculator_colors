const len = new Vue({
	el: ".len",
	data: {
		value: "Длина",
		answ: 0
	}
});

const wid = new Vue({
	el: ".wid",
	data: {
		value: "Ширина",
		answ: 0
	}
});

const height = new Vue({
	el: ".height",
	data: {
		value: "Высота",
		answ: 0
	}
});

const btn = new Vue({
	el: ".btn",
	data: {
		litr: [
			'литр',
			'литров'
		]
	},
	computed: {
		getResult: function() {
			
		}
	}
});