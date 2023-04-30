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

function keyboardChange(language, languageClass) {
	for(let i = 0; i < language.length; i++) {
		if(languageClass === RU) {
			let keyElemRu = RU_ELEM[i];
			keyElemRu.children[0].classList.remove('hidden')

			let keyElemEn = EN_ELEM[i];
			keyElemEn.children[0].classList.add('hidden')
		} else {
			let keyElemRu = RU_ELEM[i];
			keyElemRu.children[0].classList.add('hidden')

			let keyElemEn = EN_ELEM[i];
			keyElemEn.children[0].classList.remove('hidden')
		}
	}
}

const showKeyboard = (language) => {
	if( localStorage.getItem('language') === EN) {
		keyboardChange(EN_ELEM, EN)
	} else {
		keyboardChange(RU_ELEM, RU)
	}
}

document.addEventListener('load', showKeyboard(language))


//Обработка оптициональных клавиш
const changeLanguage = (event) => {
	if( event.altKey && event.ctrlKey ) {
		if(getLanguageFromLocalestorage() === EN) {
			language = RU;
		} else {
			language = EN
		}
		setLocaleStorage(language);
		showKeyboard(language)
	}
}
window.addEventListener('keydown', changeLanguage)
