let event, ok,i=0;
let answer = [];

function AnswerWindow(event,window){
	this.window = window;
	this.event = event;
}

function showWindow(text,answer1,answer2,q,windowCount){
	do{
		ok = false;
		event = +prompt(text + answer1 + answer2 + '-1 - Выход из игры');

		if (event == -1){
			break;
		}
		else{
			ok = isAnswer(q,event);
			answer[i] = {};
			answer[i] = new AnswerWindow(event,windowCount);
			i++;
		}
	} while (!ok);
}

showWindow(works.a00,works.a1,works.a2,works.a0,works.a3); // Вывод первого вопроса
switch(event){
	case 1: // Первое действие - если в первом окне ввели 1, то открываем серию окон - окно 2
		showWindow(works.b00,works.b1,works.b2,works.b0,works.b3);
		switch(event){
			case 1: // Второе действие - если во втором окне ввели 1, то переходим на 4 окно
				showWindow(works.c00,works.c1,works.c2,works.c0,works.c3);
			case 2: // Второе действие - если ввели 2, то открываем 4 окно
				showWindow(works.d00,works.d1,works.d2,works.d0,works.d3);
			case -1: // Второе действие
				break;
			default:
				alert('Ошибка!');
		}
		break;
	case 2: // Первое действие - если в 1 окне ввели 2, то открываем 3 окно
		showWindow(works.c00,works.c1,works.c2,works.c0,works.c3);
		switch(event){
			case 1: // Второе действие
				showWindow(works.c00,works.c1,works.c2,works.c0,works.c3);
				break;
			case 2: // Второе действие
				showWindow(works.d00,works.d1,works.d2,works.d0,works.d3);
				break;
			case -1: // Первое действие
				break;
			default:
				alert('Ошибка!');
		}
	case -1: // Первое действие
		break;
	default:
		alert('Ошибка!');
};

let step = parseInt(prompt('Введите номер хода',''));
if (step < 1 || step > 3 || isNaN(step) || step == 0) step = parseInt(prompt('Вы ввели недопустимое значение. Введите номер хода',''));
console.log('Ваш ответ в ходе №' + step + ' был ' + answer[step-1].event);

alert('Спасибо за игру!');

function isAnswer(q,event){
	if (isNaN(event) || !isFinite(event)){
		alert('Вы ввели недопустимый символ');
		return false;
	}
	else if (event<1 || event>q){
		alert('Ваше число выходит из допустимого диапазона');
		return false;
	}
	return true;
}