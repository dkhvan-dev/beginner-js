"use strict";

// Задание №1
// let masBig = ["big/1.jpg","big/3.jpg"];

// function init(){
// 	let images = document.getElementsByTagName("img");
// 	for (var i = 0; i < images.length; i++) {
// 		images[i].onclick = changeBigPicture;
// 	}
// }

// function changeBigPicture(eventObj){
// 	var appDiv = document.getElementById("big_picture");
// 	appDiv.innerHTML = "";
// 	var eventElement = eventObj.target;
// 	var imageNameParts = eventElement.id.split("_");
// 	var src = "big/" + imageNameParts[1] + ".jpg";
// 	for (let i=0;i<masBig.length;i++){
// 		if (src == masBig[i]){
// 			var imageDomElement = document.createElement("img");
// 			imageDomElement.src = src;
// 			appDiv.appendChild(imageDomElement);
// 		} else window.onerror = "Файл не найден!";
// 	}
// }

// window.onload = init;

// Задание №2

/*let productList = document.querySelectorAll(".catalog__product");
let buttons = document.querySelectorAll("button");
let info = [
	{title: "<h1>Товар №1</h1>",
	price: 1000,
	amount: "<p>Количество: "},
	{title: "<h1>Товар №2</h1>",
	price: 1000,
	amount: "<p>Количество: "},
	{title: "<h1>Товар №3</h1>",
	price: 1000,
	amount: "<p>Количество: "},
];

let basket = document.querySelector(".basket");
let amount = document.querySelectorAll("input");
let value = [];
let cost=0;
for (let i=1;i<=buttons.length;i++){
	buttons[i-1].onclick = function addElement(){
		let product = document.createElement("div");
		product.className = "basket__product";
		if (amount[i-1].value != 0){
			product.innerHTML = info[i-1].title + "<p>Цена: " + info[i-1].price + "</p>" + info[i-1].amount + amount[i-1].value + "</p";
			cost += info[i-1].price * amount[i-1].value;
			basket.append(product);
			basket.style.display = "block";
		} else console.log("Ошибка! Вы ввели недопустимое значение! Введите число не ниже 1");
	};
}*/



// Задание №3
/*let buttons = document.querySelectorAll("button");
let slides = document.querySelectorAll("img");
slides[0].style.display = "block";
slides[1].style.display = "none";
slides[2].style.display = "none";

let i=0;

buttons[0].onclick = function b(){
	// Проверяем номер слайда, если первый, то убираем его картинку, отображаем последний слайд и выставляем соответствующий индекс
	if (i==0) {
		slides[i].style.display = "none";
		slides[i+2].style.display = "block";
		i=2;
	} else{ // Иначе, просто перелистываем слайд вправо
		slides[i].style.display = "none";
		slides[--i].style.display = "block";
	}
}

buttons[1].onclick = function a(){
	++i;

	// Если номер слайда уже последний или превышает границы,
	if (i >= slides.length) {
		// То, скрываем предыдущий слайд
		slides[i-1].style.display = "none";
		// Выставляем первый слайд
		i = 0;
		slides[i].style.display = "block";
	} else { // Иначе, перелистываем дальше, влево
		slides[i-1].style.display = "none";
		slides[i].style.display = "block";
	}
}*/