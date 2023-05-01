const BODY = document.body;

// Главный блок центрирующий
const mainBlock = document.createElement('div');
mainBlock.className = 'main';
BODY.append(mainBlock);

// Заголовок
const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Virtual Keyboard';
mainBlock.append(title);

// Поля для ввода и выводы
export const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.rows = 6;
textarea.cols = 72;
mainBlock.append(textarea);

// Клавиатура
export const keyboardBody = document.createElement('div');
keyboardBody.className = 'keyboard';
mainBlock.append(keyboardBody);

// Блок с текстом под клавиатурой
const textBody = document.createElement('div');
textBody.className = 'text';

const textCreate = document.createElement('p');
textCreate.textContent = 'Клавиатура создана в операционной системе Windows';
textCreate.className = 'text__content';

const languageChange = document.createElement('p');
languageChange.className = 'text__content';
languageChange.textContent = 'Для переключения языка комбинация: левыe Ctrl + Alt';
textBody.append(textCreate);

textBody.append(languageChange);
mainBlock.append(textBody);
