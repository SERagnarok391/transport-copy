import Vue from 'vue';

if ('netlifyIdentity' in window) {
	window.netlifyIdentity.on('init', user => {
		if (!user) {
			window.netlifyIdentity.on('login', () => {
				document.location.href = '/admin/';
			});
		}
	});
}

let base = 'background-color: #575757; font: x-large serif; ';
let desc = 'color: #888; font-style: italic;';
let gray = 'color: #ddd';
let dig = 'color: #111';

console.log('%cSite constructed by %cGrayscale %cDigital', base + desc, base + gray, base + dig);
console.log(
	'%chttps://grayscale.digital',
	'background-color: #000; color: #fff; font: medium serif;'
);

new Vue({
	el: '#main-nav',
	data: {
		isMenuOpen: false
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		}
	}
});
