import { keys } from './keys';
import { keyboardBody } from './createKeyboard';

export const createKeyboard = () => {
  let out = '';
	keys.forEach(function(key) {
		out += `
			<div class="key" data-key="${key.code}">
				<div class="en">
					<span class="down hidden">${key['keyEnDown']}</span>
					<span class="up hidden">${key['keyEnUp']}</span>
					<span class="caps hidden">${key['keyEnCaps']}</span>
					<span class="shiftCaps hidden">${key['keyEnShiftCaps']}</span>
				</div>
				<div class="ru">
					<span class="down hidden">${key['keyRuDown']}</span>
					<span class="up hidden">${key['keyRuUp']}</span>
					<span class="caps hidden">${key['keyRuCaps']}</span>
					<span class="shiftCaps hidden">${key['keyRuShiftCaps']}</span>
				</div>
			</div>
			`;
	})
  keyboardBody.innerHTML = out;
};



document.addEventListener('DOMContentLoaded', createKeyboard());


const EN = 'en';
const RU = 'ru';

//Работа с localeStorage 
let language = EN;

const getLanguageFromLocalestorage = () => {
	if(localStorage.getItem('language')) {
		language = localStorage.getItem('language')
	}
	return language;
}

const setLocaleStorage = (language) => localStorage.setItem('language', language)
document.addEventListener('load', setLocaleStorage(getLanguageFromLocalestorage()))



//Смена раскладки клавиатуры
const EN_ELEM = document.querySelectorAll('.en');
const RU_ELEM = document.querySelectorAll('.ru');
const KEY_DOWN = 0;
const KEY_UP = 1;
const KEY_CAPS = 2;
const KEY_SHIFT_CAPS = 3;
const KEYS_VIEWS = [KEY_DOWN, KEY_UP, KEY_CAPS, KEY_SHIFT_CAPS]
 

function keyboardChang(language, languageClass, viewKeys) {
	for(let i = 0; i < language.length; i++) {
		if(languageClass == EN) {
			for(let j = 0; j < KEYS_VIEWS.length; j++) {
				if(viewKeys !== j) {
					EN_ELEM[i].children[j].classList.add('hidden');
				} else {
					EN_ELEM[i].children[j].classList.remove('hidden')
				}
			}
			for(let j = 0; j < KEYS_VIEWS.length; j++) {
				if(viewKeys !== j) {
					RU_ELEM[i].children[j].classList.add('hidden');
				} else {
					RU_ELEM[i].children[j].classList.add('hidden')
				}
			}
		} 
		if(languageClass == RU) {
			for(let j = 0; j < KEYS_VIEWS.length; j++) {
				if(viewKeys !== j) {
					RU_ELEM[i].children[j].classList.add('hidden');
				} else {
					RU_ELEM[i].children[j].classList.remove('hidden')
				}
			}
			for(let j = 0; j < KEYS_VIEWS.length; j++) {
				if(viewKeys !== j) {
					EN_ELEM[i].children[j].classList.add('hidden');
				} else {
					EN_ELEM[i].children[j].classList.add('hidden')
				}
			}
		} 
	}
}


const showKeyboard = (language, KEY_VIEW) => {
	if( localStorage.getItem('language') === EN) {
		keyboardChang(EN_ELEM, EN, KEY_VIEW)
	} else {
		keyboardChang(RU_ELEM, RU, KEY_VIEW)
	}
}

document.addEventListener('load', showKeyboard(language, KEY_DOWN))


//CapsLock
let isDownCaps = false;
const CAPS_LOCK_KEY = document.querySelector('[data-key="CapsLock"]')
const capsLockKeys = (event) => {
	if(event.key === "CapsLock" && isDownCaps === false) {
		CAPS_LOCK_KEY.classList.toggle('active');
		showKeyboard(language, KEY_CAPS)
		isDownCaps = !isDownCaps;
	} else if(event.key === "CapsLock" && isDownCaps === true) {
		CAPS_LOCK_KEY.classList.toggle('active');
		showKeyboard(language, KEY_DOWN)
		isDownCaps = !isDownCaps;
	}
}

window.addEventListener('keydown', capsLockKeys)


//Shift
const shiftKeyDown = (event) => {
	if(event.key === 'Shift') {
		showKeyboard(language, KEY_UP)
	}
}


const shiftKeyUp = (event) => {
	if(event.key === 'Shift') {
		showKeyboard(language, KEY_DOWN)
	}
}

window.addEventListener('keydown', shiftKeyDown)
window.addEventListener('keyup', shiftKeyUp)



//Shift + Caps
const shiftCapsKeyDown = (event) => {
	if(event.key === 'Shift' && isDownCaps) {
		showKeyboard(language, KEY_SHIFT_CAPS)
	}
}


const shiftCapsKeyUp = (event) => {
	if(event.key === 'Shift' && isDownCaps) {
		showKeyboard(language, KEY_CAPS)
	}
}

window.addEventListener('keydown', shiftCapsKeyDown)
window.addEventListener('keyup', shiftCapsKeyUp)



//Ctrl + Alt
const changeLanguage = (event) => {
	if( event.altKey && event.ctrlKey ) {
		if(getLanguageFromLocalestorage() === EN) {
			language = RU;
		} else {
			language = EN
		}
		setLocaleStorage(language);

		if(isDownCaps) {
			showKeyboard(language, KEY_CAPS)
		} else{
			showKeyboard(language, KEY_DOWN)
		}

	}
}

window.addEventListener('keydown', changeLanguage)
