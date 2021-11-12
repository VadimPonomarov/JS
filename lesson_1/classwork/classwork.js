/*1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor)*/

let arr = [
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
];
alert('А теперь результаты Classwork - появляются только в консоли')
console.log(arr);

/*Скласти результат цих чисел в змінній result.*/

let result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];

console.log(result);

/*Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр*/

let book = {
    name: null,
    pages: null,
    genre: null
};
console.log(book);

/*Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори*/

book = {
    name: null,
    pages: null,
    genre: null,
    authors: []
};
console.log(book);

/*Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.*/

const books = [
    book, book, book
];

/*Вивести кожну книгу як окремий об'єкт*/

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

/*Напишіть код, який вираховує площу прямокутника висотою 23см.
(змінна height) та шириною 10см (змінна width).
Значення площі зберігати в змінній s.*/

let height = 23;
let width = 10;
let aria = height * width;
console.log(`Площадь прямоугольника составляет: ${aria} м2`);

/*Напиши код, який знаходить об'єм циліндра
заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
результат помістіть у змінну v.*/

let heightC = 10;
let dC = 4;
let volume = 10 * 3.14 * (dC / 2) ** 2;
console.log(`Обьем цилиндра составляет: ${volume} м3`);

/*У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
Знайдіть гіпотенузу k за теоремою Піфагора
(потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).*/

let n = 3;
let m = 4;
let k = Math.sqrt(n ** 2 + m ** 2);
console.log(`Гипотенуза длиной: ${k} м`);