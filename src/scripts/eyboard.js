// import { BODY } from "./consts";

// const BACKSPACE = 'Backspace';
// const TAB = 'Tab';
// const DEL = 'Del';
// const CAPS_LOCK = 'CapsLock';
// const ENTER = 'Enter';
// const SHIFT = 'Shift';
// const CTRL = 'Ctrl';
// const WIN = 'Win';
// const ALT = 'Alt';
// const ARROW_LEFT =  '⇐';
// const ARROW_RIGHT = '⇒';
// const ARROW_TOP = '⇑';
// const ARROW_BOTTOM = '⇓';
// const SPACE = 'space';

// const BACKSPACE_CODE = 8;
// const TAB_CODE = 9;
// const DEL_CODE = 127;
// const CAPS_LOCK_CODE = 20;
// const ENTER_CODE = 13;
// const SHIFT_CODE = 16;
// const CTRL_CODE = 17;
// const WIN_CODE = 91;
// const ALT_CODE = 18;
// const SPACE_CODE = 32;
// const ARROW_LEFT_CODE = 37;
// const ARROW_BOTTOM_CODE = 40;
// const ARROW_RIGHT_CODE = 39;
// const ARROW_TOP_CODE = 38;

// const KEYBOARD_EN_SM = [
// 	96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
// 	9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 127, 
// 	20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 34, 13,
// 	16, 122, 120, 99, 118, 98, 110, 109, 44, 62, 47, 38, 16,
// 	17, 91, 18, 32, 18, 37, 40, 39, 17
// ];

// const KEYBOARD_EN_BIG_LETTER = [
// 	96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, BACKSPACE,
// 	TAB, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92, DEL, 
// 	CAPS_LOCK, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, ENTER,
// 	SHIFT, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47, ARROW_TOP, SHIFT,
// 	CTRL, WIN, ALT, SPACE, ALT, ARROW_LEFT, ARROW_BOTTOM, ARROW_RIGHT, CTRL
// ];

// const KEYBOARD_EN_BIG = [
// 	45, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, BACKSPACE,
// 	TAB, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124, DEL, 
// 	CAPS_LOCK, 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, ENTER,
// 	SHIFT, 90, 88, 67, 86, 66, 78, 77, 60, 62, 63, ARROW_TOP, SHIFT,
// 	CTRL, WIN, ALT, SPACE, ALT, ARROW_LEFT, ARROW_BOTTOM, ARROW_RIGHT, CTRL
// ];

// const KEYBOARD_RU_SM = [
// 	1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, BACKSPACE,
// 	TAB, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, DEL, 
// 	CAPS_LOCK, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, ENTER,
// 	SHIFT, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, ARROW_TOP, SHIFT,
// 	CTRL, WIN, ALT, SPACE, ALT, ARROW_LEFT, ARROW_BOTTOM, ARROW_RIGHT, CTRL
// ];

// const KEYBOARD_RU_BIG_LETTER = [
// 	1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, BACKSPACE,
// 	TAB, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92, DEL, 
// 	CAPS_LOCK, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, ENTER,
// 	SHIFT, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46, ARROW_TOP, SHIFT,
// 	CTRL, WIN, ALT, SPACE, ALT, ARROW_LEFT, ARROW_BOTTOM, ARROW_RIGHT, CTRL
// ];

// const KEYBOARD_RU_BIG = [
// 	1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, BACKSPACE,
// 	TAB, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47, DEL, 
// 	CAPS_LOCK, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, ENTER,
// 	SHIFT, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44, ARROW_TOP, SHIFT,
// 	CTRL, WIN, ALT, SPACE, ALT, ARROW_LEFT, ARROW_BOTTOM, ARROW_RIGHT, CTRL
// ];



// let mainBlock = document.createElement('div');
// mainBlock.className = 'main';
// BODY.append(mainBlock);

// let title = document.createElement('h1');
// title.className = 'title';
// title.textContent = 'RSSchool Виртуальная клавиатура';
// mainBlock.append(title);

// let textarea = document.createElement('textarea');
// textarea.className = 'textarea';
// textarea.rows = 6;
// textarea.cols = 72;
// mainBlock.append(textarea)

// let keyboardBody = document.createElement('div');
// keyboardBody.className = 'keyboard';
// mainBlock.append(keyboardBody);

// let arr = []
// document.addEventListener('keyup', (event) => {
// 	console.log(event.keyCode)
// 	console.log(event.code)
// })



// const init = (keyboard) => {
// 	let out = '';
// 	for(let key = 0; key < keyboard.length; key++) {
// 		if( key == 14 || key == 29 || key == 42 || key == 55 ) {
// 			out += '<div class="clearfix"></div>';
// 		}

// 		if(keyboard[key] === BACKSPACE_CODE) {
// 			out += '<div class="key" data-key="' + BACKSPACE.toLowerCase() + '">' + BACKSPACE + '</div>\n';
// 		} else if (keyboard[key] === TAB_CODE) {
// 			out += '<div class="key" data-key="' + TAB.toLowerCase() + '">' + TAB + '</div>\n';
// 		} else if (keyboard[key] === DEL_CODE) {
// 			out += '<div class="key" data-key="' + DEL.toLowerCase() + '">' + DEL + '</div>\n';
// 		} else if (keyboard[key] === CAPS_LOCK_CODE) {
// 			out += '<div class="key" data-key="' + CAPS_LOCK.toLowerCase() + '">' + CAPS_LOCK + '</div>\n';
// 		} else if (keyboard[key] === ENTER_CODE) {
// 			out += '<div class="key" data-key="' + ENTER.toLowerCase() + '">' + ENTER + '</div>\n';
// 		} else if (keyboard[key] === SHIFT_CODE) {
// 			out += '<div class="key" data-key="' + SHIFT.toLowerCase() + '">' + SHIFT + '</div>\n';
// 		} else if (keyboard[key] === CTRL_CODE) {
// 			out += '<div class="key" data-key="' + CTRL.toLowerCase() + '">' + CTRL + '</div>\n';
// 		} else if (keyboard[key] === WIN_CODE) {
// 			out += '<div class="key" data-key="' + WIN.toLowerCase() + '">' + WIN + '</div>\n';
// 		} else if (keyboard[key] === ALT_CODE) {
// 			out += '<div class="key" data-key="' + ALT.toLowerCase() + '">' + ALT + '</div>\n';
// 		} else if (keyboard[key] === SPACE_CODE) {
// 			out += '<div class="key" data-key="' + SPACE.toLowerCase() + '">' + '' + '</div>\n';
// 		} else if (keyboard[key] === ARROW_BOTTOM_CODE) {
// 			out += '<div class="key" data-key="' + ARROW_BOTTOM.toLowerCase() + '">' + ARROW_BOTTOM + '</div>\n';
// 		} else if (keyboard[key] === ARROW_TOP_CODE) {
// 			out += '<div class="key" data-key="' + ARROW_TOP.toLowerCase() + '">' + ARROW_TOP + '</div>\n';
// 		} else if (keyboard[key] === ARROW_LEFT_CODE) {
// 			out += '<div class="key" data-key="' + ARROW_LEFT.toLowerCase() + '">' + ARROW_LEFT + '</div>\n';
// 		} else if (keyboard[key] === ARROW_RIGHT_CODE) {
// 			out += '<div class="key" data-key="' + ARROW_RIGHT.toLowerCase() + '">' + ARROW_BOTTOM + '</div>\n';
// 		} else {
// 			out += '<div class="key" data-key="' + keyboard[key] + '">' +  String.fromCharCode(keyboard[key]) + '</div>\n';
// 		}
//  		// if(typeof keyboard[key] != 'string') {
// 		// 	out += '<div class="key" data-key="' + keyboard[key] + '">' +  String.fromCharCode(keyboard[key]) + '</div>\n';
// 		// } else {
// 		// 	out += '<div class="key" data-key="' + keyboard[key].toLowerCase() + 'Key' + '">' + keyboard[key] + '</div>\n';
// 		// }
// 	}
// 	keyboardBody.innerHTML = out
// }





// init(KEYBOARD_EN_SM);



// let keys = document.querySelectorAll('.key');
// let spaceKey = document.querySelectorAll('[data-key="spaceKey"]');
// let shiftKey = document.querySelectorAll('[data-key="shiftKey"]');
// let capsKey = document.querySelectorAll('[data-key="capsKey"]');
// let ctrlKey = document.querySelectorAll('[data-key="ctrlKey"]');
// let winKey = document.querySelectorAll('[data-key="winKey"]');
// let altKey = document.querySelectorAll('[data-key="altKey"]');
// let enterKey = document.querySelectorAll('[data-key="enterKey"]');
// let delKey = document.querySelectorAll('[data-key="delKey"]');
// let backspaceKey = document.querySelectorAll('[data-key="backspaceKey"]');
// let leftArrowKey = document.querySelectorAll('[data-key="⇐Key"]');
// let rightArrowKey = document.querySelectorAll('[data-key="⇒Key"]');
// let upArrowKey = document.querySelectorAll('[data-key="⇑Key"]');
// let downArrowKey = document.querySelectorAll('[data-key="⇓Key"]');



// // document.addEventListener('keyup', (event) => {
// // 	document.querySelectorAll('.key').forEach(function(element) {
// // 		element.classList.remove('active');
// // 	})
// // 	document.querySelector(`[data-key="${event.keyCode}"]`).classList.add('active');
// // })

// // document.querySelectorAll('.key').forEach(function(element) {
// // 	element.onclick = function(event) {
// // 		document.querySelectorAll('.key').forEach(function(element) {
// // 			element.classList.remove('active');
// // 		})
// // 		let code = this.id;
// // 		this.classList.add('active');
// // 	}
// // })