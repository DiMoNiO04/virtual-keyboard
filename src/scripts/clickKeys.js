import { textarea } from "./createKeyboard";
const keys = document.querySelectorAll('.key'); 

document.addEventListener('keydown', (event) => {
	keys.forEach(function(key) {
		if( event.code == key.getAttribute('data-key') ) {
			textarea.textContent += event.key;
			key.classList.add('active')
		}
	})
})

document.addEventListener('keyup', (event) => {
	keys.forEach(function(key) {
		if( event.code == key.getAttribute('data-key') ) {
			setTimeout(() => {
				key.classList.remove('active')
			}, 100)
		}
	})
})

