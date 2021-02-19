let gameIsRunning = false;
// Поле, на котором всё будет происходить, — тоже как бы переменная
let canvas = document.querySelector('#game');

// Классическая змейка — двухмерная, сделаем такую же
let context = canvas.getContext('2d');

// Размер одной клеточки на поле — 15 пикселей
let grid = 15;

// Служебная переменная, которая отвечает за скорость змейки
let count = 0;

// Счетчик съеденных яблок
let score = 0;

//Текст счетчика
let span = document.querySelector('span');

// Змейка - зеленая
let snake = {
	// Начальные координаты
	x: 210,
	y: 240,

	// Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
	dx: 0,
	dy: -grid,

	// Тащим за собой хвост, который пока пустой
	cells: [],

	// Стартовая длина змейки — 2 клеточки
	maxCells: 2,
};

// Еда. Она будет красным цветом.
let food = {
	// Начальные координаты яблока
	x: 300,
	y: 300,
};

// Препятствие
let bomb = {
	x: 30,
	y: 30,
};

// Генератор случайных чисел в заданном диапазоне
function randomGen(max,min){
	return Math.floor(Math.random()*(max-min)) + min;
}

// Генерация новых координат препятствия
function bombGen(){
	bomb.x = randomGen(0, 28) * grid;
	bomb.y = randomGen(0, 28) * grid;
}

// Основная функция
function move(){
	document.getElementById('snake-start').removeEventListener('click',startGame);
	// Закрашиваем игровое поле
	context.fillStyle = 'black';
	context.fillRect(0,0,canvas.clientWidth,canvas.height);

	// Двигаем змейку с нужной скоростью
	snake.x += snake.dx;
	snake.y += snake.dy;

	// Если змейка достигла края поля по горизонтали — продолжаем её движение с противоположной стороны
	if (snake.x < 0){
		snake.x = canvas.width - grid;
	} else
	if (snake.x >= canvas.width) snake.x = 0;
	
	// Делаем то же самое для движения по вертикали
	if (snake.y < 0){
		snake.y = canvas.height - grid;
	} else 
	if (snake.y >= canvas.height) snake.y = 0;

	// Продолжаем двигаться в выбранном направлении. Голова всегда впереди, поэтому добавляем её координаты в начало массива, который отвечает за всю змейку.
	snake.cells.unshift({x: snake.x, y: snake.y});

	// Сразу после этого удаляем последний элемент из массива змейки, потому что она движется и постоянно особождает клетки после себя
	if (snake.cells.length > snake.maxCells){
		snake.cells.pop();
	}

	// Рисуем еду
	context.fillStyle = 'red';
	context.fillRect(food.x,food.y,grid-1,grid-1);

	// Рисуем препятствие
	context.fillStyle = 'yellow';
	context.fillRect(bomb.x,bomb.y,grid-1,grid-1);

	// Одно движение змейки — один новый нарисованный квадратик
	context.fillStyle = 'green';

	// Обрабатываем каждый элемент змейки
	snake.cells.forEach(function (cell,index){

		// Чтобы создать эффект клеточек, делаем зелёные квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
		context.fillRect(cell.x,cell.y,grid-1,grid-1);

		// Проверка на столкновение с едой
		if (cell.x === food.x && cell.y === food.y){
			// Eвеличиваем длину змейки
			// Введем счет в реальном времени
			snake.maxCells++;
			score++;
			span.innerHTML = 'Ваш счет: ' + score;

			// Перемещаем еду
			// Помним, что размер холста у нас 420x420, при этом он разбит на ячейки — 28 в каждую сторону
			food.x = randomGen(0, 28) * grid;
			food.y = randomGen(0, 28) * grid;
		}

		// Проверка на столкновение с самой собой
		// Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами
		for (i = index+1; i < snake.cells.length; i++){
			// Если такие клетки есть — начинаем игру заново
			if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) finishTheGame();
		}

		// Проверка на столкновение с препятствием
		if (cell.x === bomb.x && cell.y === bomb.y) finishTheGame();
	})
}

// Начало игры
function startGame(){
	gameIsRunning = true;
	snakeTimer = setInterval(move, 100);
	bombTimer = setInterval(bombGen, 10000);
}

// Функция реагирования на нажатие стрелочек
document.addEventListener('keydown', function(e){

	// Стрелка влево
	if (e.which == 37 && snake.dx === 0){
		snake.dx = -grid;
		snake.dy = 0;
	}

	// Стрелка вверх
	if (e.which === 38 && snake.dy === 0){
		snake.dx = 0;
		snake.dy = -grid;
	}

	// Стрелка вправо
	if (e.which === 39 && snake.dx === 0){
		snake.dx = grid;
		snake.dy = 0;
	}

	// Стрелка вниз
	if (e.which === 40 && snake.dy === 0){
		snake.dx = 0;
		snake.dy = grid;
	}
});

// Функция кнопок
function init(){
	document.getElementById('snake-start').addEventListener('click', startGame);
	document.getElementById('snake-renew').addEventListener('click', refreshGame);
};

// Завершение игры
function finishTheGame(){
	gameIsRunning = false;
	alert('Вы проиграли!');
	clearInterval(snakeTimer);
	document.getElementById('snake-start').removeEventListener('click', startGame);
}

// Перезапуск игры
function refreshGame(){
	location.reload();
}

// Запуск окна
window.onload = init;
