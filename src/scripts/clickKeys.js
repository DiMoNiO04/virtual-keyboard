import { textarea } from "./createKeyboard";
import { createKeyboard } from "./showKeyboard";
import { keys } from "./keys";
const keysHTML = document.querySelectorAll('.key'); 

document.addEventListener('keydown', (event) => {
	keysHTML.forEach(function(key) {
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
			console.log(event.keyCode)
		}
	})
})


document.addEventListener('keyup', (event) => {
	keysHTML.forEach(function(key) {
		if( event.code == key.getAttribute('data-key') ) {
			if( event.code === 'CapsLock' ) {
				return;
			}
			setTimeout(() => {
				key.classList.remove('active')
			}, 100)
		}
	})
})


const changeKeyboard = (language) => {
	for(let i = 0; i < keysHTML.length; i++) {
		keysHTML[i].textContent = keys[i][language]
	}
}

// document.addEventListener('keydown', (event) => {
// 	if(event.altKey && event.shiftKey) {
// 		changeKeyboard('keyRuDown')
// 	}
// })

// document.addEventListener('keydown', (event) => {
// 	if(event.code === document.querySelector('[data-key="CapsLock"]').getAttribute('data-key')) {
// 		changeKeyboard('keyEnCaps');
// 	}
// })

// document.addEventListener('keyup', (event) => {
// 	if(event.code === document.querySelector('[data-key="ShiftLeft"]').getAttribute('data-key')) {
// 		changeKeyboard('keyEn');
// 	}
// })

// document.addEventListener('keyup', (event) => {
// 	if(event.code === document.querySelector('[data-key="CapsLock"]').getAttribute('data-key')) {
// 		changeKeyboard('keyEn');
// 	}
// })