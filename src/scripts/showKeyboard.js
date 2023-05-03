import { keys } from './keys';
import { keyboardBody, textarea } from './createKeyboard';

const createKeyboard = () => {
  let out = '';
  keys.forEach((key) => {
    out += `
      <div class="key" data-key="${key.code}">
        <div class="en">
          <span class="down hidden">${key.keyEnDown}</span>
          <span class="up hidden">${key.keyEnUp}</span>
          <span class="caps hidden">${key.keyEnCaps}</span>
          <span class="shiftCaps hidden">${key.keyEnShiftCaps}</span>
        </div>
        <div class="ru">
          <span class="down hidden">${key.keyRuDown}</span>
          <span class="up hidden">${key.keyRuUp}</span>
          <span class="caps hidden">${key.keyRuCaps}</span>
          <span class="shiftCaps hidden">${key.keyRuShiftCaps}</span>
        </div>
      </div>
      `;
  });
  keyboardBody.innerHTML = out;
};

document.addEventListener('load', createKeyboard());

const EN = 'en';
const RU = 'ru';

// Работа с localeStorage
let language = EN;

const getLanguageFromLocalestorage = () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
  return language;
};

const setLocaleStorage = () => localStorage.setItem('language', language);
document.addEventListener('load', setLocaleStorage(getLanguageFromLocalestorage()));

const EN_ELEM = document.querySelectorAll('.en');
const RU_ELEM = document.querySelectorAll('.ru');
const KEY_DOWN = 0;
const KEY_UP = 1;
const KEY_CAPS = 2;
const KEY_SHIFT_CAPS = 3;
const KEYS_VIEWS = [KEY_DOWN, KEY_UP, KEY_CAPS, KEY_SHIFT_CAPS];

const addRemoveHiddenChildrenElem = (LANGUAGE_ELEM, key, viewKeys) => {
  KEYS_VIEWS.forEach((viewKey) => {
    if (viewKeys !== viewKey) {
      LANGUAGE_ELEM[key].children[viewKey].classList.add('hidden');
    } else {
      LANGUAGE_ELEM[key].children[viewKey].classList.remove('hidden');
    }
  });
};

const removeHiddenChildrenElem = (LANGUAGE_ELEM, key, viewKeys) => {
  KEYS_VIEWS.forEach((viewKey) => {
    if (viewKeys !== viewKey) {
      LANGUAGE_ELEM[key].children[viewKey].classList.add('hidden');
    } else {
      LANGUAGE_ELEM[key].children[viewKey].classList.add('hidden');
    }
  });
};

const keyboardChange = (lang, languageClass, viewKeys) => {
  for (let key = 0; key < lang.length; key += 1) {
    if (languageClass === EN) {
      addRemoveHiddenChildrenElem(EN_ELEM, key, viewKeys);
      removeHiddenChildrenElem(RU_ELEM, key, viewKeys);
    }
    if (languageClass === RU) {
      addRemoveHiddenChildrenElem(RU_ELEM, key, viewKeys);
      removeHiddenChildrenElem(EN_ELEM, key, viewKeys);
    }
  }
};

const showKeyboard = (KEY_VIEW) => {
  if (localStorage.getItem('language') === EN) {
    keyboardChange(EN_ELEM, EN, KEY_VIEW);
  } else {
    keyboardChange(RU_ELEM, RU, KEY_VIEW);
  }
};

document.addEventListener('load', showKeyboard(KEY_DOWN));

// CapsLock
let isDownCaps = false;
const CAPS_LOCK_KEY = document.querySelector('[data-key="CapsLock"]');

const capsLockKeys = () => {
  if (isDownCaps === false) {
    CAPS_LOCK_KEY.classList.add('active');
    showKeyboard(KEY_CAPS);
    isDownCaps = !isDownCaps;
    return;
  }
  if (isDownCaps === true) {
    CAPS_LOCK_KEY.classList.remove('active');
    showKeyboard(KEY_DOWN);
    isDownCaps = !isDownCaps;
  }
};

// Shift
const shiftKeyDown = () => showKeyboard(KEY_UP);
const shiftKeyUp = () => showKeyboard(KEY_DOWN);

// Shift + Caps
const shiftCapsKeyDown = () => showKeyboard(KEY_SHIFT_CAPS);
const shiftCapsKeyUp = () => showKeyboard(KEY_CAPS);

// Ctrl + Alt
const changeLanguage = () => {
  if (getLanguageFromLocalestorage() === EN) {
    language = RU;
  } else {
    language = EN;
  }

  setLocaleStorage(language);

  if (isDownCaps) {
    showKeyboard(KEY_CAPS);
  } else {
    showKeyboard(KEY_DOWN);
  }
};

// Вывод печатных символов в textarea
const printKey = (event) => {
  const keyElemLang = document.querySelector(`[data-key=${event.code}]`);
  let keyElemChilds;
  if (language === RU) {
    [, keyElemChilds] = keyElemLang.children;
  } else {
    [keyElemChilds] = keyElemLang.children;
  }

  for (let keyElemChild = 0; keyElemChild < keyElemChilds.children.length; keyElemChild += 1) {
    if (!keyElemChilds.children[keyElemChild].classList.contains('hidden')) {
      if (event.key === 'Tab') {
        textarea.value += '    ';
        return;
      }
      if (event.key === 'Enter') {
        textarea.value += '\n';
        return;
      }
      if (event.key === 'Backspace') {
        textarea.value = textarea.value.slice(0, -1);
        return;
      }
      if (event.key === ' ') {
        textarea.value += ' ';
        return;
      }
      if (event.key === 'Delete') {
        return;
      }
      if (event.key === 'Control' || event.key === 'Meta'
        || event.key === 'CapsLock' || event.key === 'Shift' || event.key === 'Alt'
      ) {
        return;
      }
      textarea.value += keyElemChilds.children[keyElemChild].textContent;
    }
  }
};

const keysHTML = document.querySelectorAll('.key');

const pressKey = (event) => {
  keysHTML.forEach((key) => {
    if (event.code === key.getAttribute('data-key')) {
      if (event.key !== 'CapsLock') {
        key.classList.add('active');
      }
    }
  });
};

const releaseKey = (event) => {
  keysHTML.forEach((key) => {
    if (event.code === key.getAttribute('data-key')) {
      if (event.code !== 'CapsLock') {
        setTimeout(() => key.classList.remove('active'), 100);
      }
    }
  });
};

// Нажатие клавиши
window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.altKey && event.ctrlKey) {
    changeLanguage();
  }
  if (event.key === 'CapsLock') {
    capsLockKeys();
  }
  if (event.key === 'Shift') {
    shiftKeyDown();
  }
  if (event.key === 'Shift' && isDownCaps) {
    shiftCapsKeyDown();
  }
  pressKey(event);
  printKey(event);
});

// Отпускание клавиши
window.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    shiftKeyUp();
  }
  if (event.key === 'Shift' && isDownCaps) {
    shiftCapsKeyUp();
  }
  releaseKey(event);
});

keysHTML.forEach((key) => {
  key.addEventListener('click', (event) => {
    key.classList.add('active');
    const keyName = event.currentTarget.getAttribute('data-key');

    if (keyName !== 'CapsLock') {
      setTimeout(() => key.classList.remove('active'), 500);
    }

    if (keyName === 'CapsLock') {
      capsLockKeys();
    }

    if (keyName === 'Tab') {
      textarea.value += '    ';
      return;
    }

    if (keyName === 'Enter') {
      textarea.value += '\n';
      return;
    }

    if (keyName === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
      return;
    }

    if (keyName === 'Space') {
      textarea.value += ' ';
      return;
    }

    if (keyName === 'Delete') {
      return;
    }

    if (keyName === 'Control' || keyName === 'Meta'
      || keyName === 'CapsLock' || keyName === 'Shift' || keyName === 'Alt'
      || keyName === 'ShiftLeft' || keyName === 'ShiftRight'
    ) {
      return;
    }

    let keyElemChilds;
    if (language === RU) {
      [, keyElemChilds] = key.children;
    } else {
      [keyElemChilds] = key.children;
    }

    for (let keyElemChild = 0; keyElemChild < keyElemChilds.children.length; keyElemChild += 1) {
      if (!keyElemChilds.children[keyElemChild].classList.contains('hidden')) {
        textarea.value += keyElemChilds.children[keyElemChild].textContent;
      }
    }
  });
});

const SHIFT_LEFT = document.querySelector('[data-key="ShiftLeft"]');
const SHIFT_RIGHT = document.querySelector('[data-key="ShiftRight"]');

SHIFT_LEFT.addEventListener('mousedown', () => {
	showKeyboard(KEY_UP)
});

SHIFT_LEFT.addEventListener('mouseup', () => {
	showKeyboard(KEY_DOWN)
});

SHIFT_RIGHT.addEventListener('mousedown', () => {
	showKeyboard(KEY_UP)
});

SHIFT_RIGHT.addEventListener('mouseup', () => {
	showKeyboard(KEY_DOWN)
});
