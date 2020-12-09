"use strict";

// Примеры переменных и их значения
const myName = "Бабай Бабаевич";
let myAge;
let tryFlase = true;

myAge = 392;

// Выбирая переменную const всегда присваивай значение
// Селективный выбор элемента (по ID/Class/Тэг) либо все либо 1
const header = document.querySelector(".header");
const textBtn = document.querySelector("#testBtn");

//Вывод того или иного значения в консоль
console.log(header);

//Привемры функции с локальными и общими переменными
function sayHello() {
   let message = "Hello JavaScript " + myName;
   console.log( message );
}

sayHello();

// Пример сложения трёх чисел через функцию 
function Math(a, b, c) {
   let result = a + b * c;
   console.log(a+b*c);
}

Math(12, 2, 32);

// Возвращенние и сохранение результата для дальнейшего использования
function Math(a, b, c) {
   let result = a + b * c;
   return result;
}

let sMath = Math(12, 22, 32);
console.log(sMath);


// Пример обработчика событий через скролл (изменение цвета шапки)
// Первый момент сокращения
window.addEventListener("scroll", function () {
   checkScroll();
});

//Второй момент сокращения нефункция через функцию , а на прямую
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll(){
   let scrollPost = window.scrollY;

  //Оператор сравнения 
   if (scrollPost > 0) {
      header.classList.add("red");
   } else {
      header.classList.remove("red");
   }

   console.log(scrollPost);
}

//Событие по клику на кнопку
textBtn.addEventListener("click", function () {
   console.log("clicked");
});