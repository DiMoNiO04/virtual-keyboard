import { keys } from './keys';
import { keyboardBody, textarea } from './createKeyboard';

const createKeyboard = () => {
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

document.addEventListener('load', createKeyboard());



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



const EN_ELEM = document.querySelectorAll('.en');
const RU_ELEM = document.querySelectorAll('.ru');
const KEY_DOWN = 0;
const KEY_UP = 1;
const KEY_CAPS = 2;
const KEY_SHIFT_CAPS = 3;
const KEYS_VIEWS = [KEY_DOWN, KEY_UP, KEY_CAPS, KEY_SHIFT_CAPS];

 
const addRemoveHiddenChildrenElem = (LANGUAGE_ELEM ,key, viewKeys) => {
	KEYS_VIEWS.forEach(function(viewKey) {
		if(viewKeys !== viewKey) {
			LANGUAGE_ELEM[key].children[viewKey].classList.add('hidden');
		} else {
			LANGUAGE_ELEM[key].children[viewKey].classList.remove('hidden')
		}	
	})
}

const removeHiddenChildrenElem = (LANGUAGE_ELEM ,key, viewKeys) => {
	KEYS_VIEWS.forEach(function(viewKey) {
		if(viewKeys !== viewKey) {
			LANGUAGE_ELEM[key].children[viewKey].classList.add('hidden');
		} else {
			LANGUAGE_ELEM[key].children[viewKey].classList.add('hidden')
		}
	})
}

const keyboardChange = (language, languageClass, viewKeys) => {
	for(let key = 0; key < language.length; key++) {
		if(languageClass == EN) {
			addRemoveHiddenChildrenElem(EN_ELEM, key, viewKeys)
			removeHiddenChildrenElem(RU_ELEM, key, viewKeys)
		} 
		if(languageClass == RU) {
			addRemoveHiddenChildrenElem(RU_ELEM, key, viewKeys)
			removeHiddenChildrenElem(EN_ELEM, key, viewKeys)
		} 
	}
}


const showKeyboard = (language, KEY_VIEW) => {
	if( localStorage.getItem('language') === EN) {
		keyboardChange(EN_ELEM, EN, KEY_VIEW)
	} else {
		keyboardChange(RU_ELEM, RU, KEY_VIEW)
	}
}

document.addEventListener('load', showKeyboard(language, KEY_DOWN))


//CapsLock
let isDownCaps = false;
const CAPS_LOCK_KEY = document.querySelector('[data-key="CapsLock"]')

const capsLockKeys = (event) => {
	if(isDownCaps === false) {
		CAPS_LOCK_KEY.classList.toggle('active');
		showKeyboard(language, KEY_CAPS)
		isDownCaps = !isDownCaps;
		return;
	} 
	if(isDownCaps === true) {
		CAPS_LOCK_KEY.classList.toggle('active');
		showKeyboard(language, KEY_DOWN)
		isDownCaps = !isDownCaps;
		return;
	}
}


//Shift
const shiftKeyDown = (event) => showKeyboard(language, KEY_UP)
const shiftKeyUp = (event) => showKeyboard(language, KEY_DOWN)


//Shift + Caps
const shiftCapsKeyDown = (event) => showKeyboard(language, KEY_SHIFT_CAPS)
const shiftCapsKeyUp = (event) => showKeyboard(language, KEY_CAPS)


//Ctrl + Alt
const changeLanguage = (event) => {
	(getLanguageFromLocalestorage() === EN) ? language = RU : language = EN;
	setLocaleStorage(language);

	(isDownCaps) ? showKeyboard(language, KEY_CAPS) : showKeyboard(language, KEY_DOWN)
}



//Вывод печатных символов в textarea
const printKey = (event) => {

	let keyElemLang = document.querySelector(`[data-key=${event.code}]`)
	let keyElemChilds;
	(language === RU) ? keyElemChilds = keyElemLang.children[1] : keyElemChilds = keyElemLang.children[0];

	for(let keyElemChild = 0; keyElemChild < keyElemChilds.children.length; keyElemChild++) {
		if(!keyElemChilds.children[keyElemChild].classList.contains('hidden')) {
			if(event.key === 'Tab') {
				textarea.value += '    ';
				return;
			} 
			if(event.key === 'Enter') {
				textarea.value += '\n';
				return;
			} 
			if(event.key === 'Backspace') {
				textarea.value = textarea.value.slice(0, -1);
				return;
			} 
			if(event.key === ' ') {
				textarea.value += ' ';
				return;
			} 
			if(event.key === 'Delete') {
				return;
			} 
			if (event.key === 'Control' || event.key === 'Meta' || 
				event.key === 'CapsLock' || event.key === 'Shift' || event.key === 'Alt'
				) {
					return;
			}
			textarea.value += keyElemChilds.children[keyElemChild].textContent
		}
	}
}


const keysHTML = document.querySelectorAll('.key'); 

const pressKey = (event) => {
	keysHTML.forEach(function(key) {
		if( event.code == key.getAttribute('data-key')) {
			if(event.key !== 'CapsLock') {
				key.classList.add('active');
			}
		}
	})
}

const releaseKey = (event) => {
	keysHTML.forEach(function(key) {
		if( event.code == key.getAttribute('data-key') ) {
			if( event.code !== 'CapsLock' ) {
				setTimeout(() => key.classList.remove('active'), 100)
			}
		}
	})
}


//Нажатие клавиши
window.addEventListener('keydown', (event) => {
	event.preventDefault();
	if( event.altKey && event.ctrlKey ) {
		changeLanguage(event);
	}
	if(event.key === 'CapsLock') {
		capsLockKeys(event)
	}
	if(event.key === 'Shift') {
		shiftKeyDown(event);
	}
	if(event.key === 'Shift' && isDownCaps) {
		shiftCapsKeyDown(event);
	}
	pressKey(event);
	printKey(event)
})


//Отпускание клавиши
window.addEventListener('keyup', (event) => {
	if(event.key === 'Shift') {
		shiftKeyUp(event);
	}
	if(event.key === 'Shift' && isDownCaps) {
		shiftCapsKeyUp(event);
	}
	releaseKey(event)
})