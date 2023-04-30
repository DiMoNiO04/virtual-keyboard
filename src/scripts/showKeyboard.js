import { keys } from './keys';
import { keyboardBody } from './createKeyboard';

export const showKeyboard = (language) => {
  let out = '';
  for (let key = 0; key < keys.length; key += 1) {
    out += `<div class="key" data-key="${keys[key].code}">${keys[key][language]}</div>`;
  }
  keyboardBody.innerHTML = out;
};

document.addEventListener('DOMContentLoaded', showKeyboard('keyEn'));
