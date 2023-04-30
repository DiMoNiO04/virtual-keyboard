import { textarea } from "./createKeyboard";
import { showKeyboard } from "./showKeyboard";
const keys = document.querySelectorAll('.key'); 

document.addEventListener('keydown', (event) => {
	keys.forEach(function(key) {
		if( event.code == key.getAttribute('data-key') ) {
			key.classList.add('active');
			if( event.code === 'CapsLock' || event.code === 'Space' || 
					event.code === 'Tab' || event.code === 'ShiftLeft' || 
					event.code === 'ShiftRight' || event.code === 'Backspace' || 
					event.code === 'Delete' || event.code === 'Enter' || 
					event.code === 'ControlLeft' || event.code === 'ControlRight' || 
					event.code === 'MetaLeft' || event.code === 'AltLeft' || 
					event.code === 'AltRight' ) {
				return;
			}
			textarea.textContent += event.key;
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

