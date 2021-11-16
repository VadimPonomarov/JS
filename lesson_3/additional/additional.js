/*1. Створити пустий масив та :
       a. заповнити його 50 парними числами за допомоги циклу.
       b. заповнити його 50 непарними числами за допомоги циклу.
       c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
       d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/

/*a. заповнити його 50 парними числами за допомоги циклу.*/
let array = [];
for (let i = 2, y = 1; y <= 50; i += 2, y++) {
    array[y - 1] = i;
}
document.write(`<h3>1.a</h3>${array}`);

/* b. заповнити його 50 непарними числами за допомоги циклу.*/

for (let i = 1, y = 1; y <= 50; i += 2, y++) {
    array[y - 1] = i;
}
document.write(`<h3>1.b</h3>${array}`);

/*c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)*/

array = [];
for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 100)
}
document.write(`<h3>1.c</h3>${array}`);

/*d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/

array = [];
let min = 8;
let max = 732;
for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * (max - min) + min);
}
document.write(`<h3>1.d</h3>${array}`);

/*2. Вивести за допомогою console.log кожен третій елемен*/

console.log(`--2--`);
document.write(`<h3>-- 2 --</h3>`);
for (let i = 2; i <= array.length - 1; i += 3) {
    console.log(`${array[i]}`);
    document.write(`<strong>${array[i]} </strong>`);
}

/* 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/

console.log(`--3--`);
document.write(`<h3>-- 3 --</h3>`);
for (let i = 2; i <= array.length - 1; i += 3) {
    if (!(array[i] % 2)) {
        console.log(`${array[i]}`);
        document.write(`<strong>${array[i]} </strong>`);
    }
}

/* 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив*/

console.log(`--4--`);
document.write(`<h3>-- 4 --</h3>`);
let newArr = [];
for (let i = 2; i <= array.length - 1; i += 3) {
    if (!(array[i] % 2)) {
        newArr.push(array[i]);
        console.log(`${array[i]}`);
        document.write(`<strong>${array[i]} </strong>`);
    }
}
document.write(`<h3>Новый массив четных значений - [${newArr}]</h3>`);

/*5. Вивести кожен елемент масиву, сусід справа якого є парним
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/

console.log(`--5--`);
document.write(`<h3>-- 5 --</h3>`);
array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i <= array.length - 1; i++) {
    if (!(array[i + 1] % 2) && array[i + 1]) {
        console.log(`${array[i]}`);
        document.write(`<strong>${array[i]} </strong>`);
    }
}

/*6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/

document.write(`<h3>-- 6 --</h3>`);
array = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
let avgCheck = null;
for (let i of array) {
    sum += i;
}
document.write(`<h3>Средний чек = ${Math.round(sum / array.length)}</h3>`)


/* 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/
document.write(`<h3>-- 7 --</h3>`);
array = [];
let newArray = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100);
    newArray[i] = array[i] * 5;
}
document.write(`<h3>Массив ${array} </h3>`);
document.write(`<h3>Новый массив ${newArray} </h3>`);

/*8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/
document.write(`<h3>-- 8 --</h3>`);
array = [1, 'string', true, false, 34, 55, 'string1', 'string2', null, NaN];
newArray = [];
for (let i of array) {
    if (typeof i === 'number') {
        newArray.push(i)
    }
}
document.write(`<h3>Исходный массив [${array}] </h3>`);
document.write(`<h3>Массив выбранных элементов с типом number [${newArray}] </h3>`);

/*9.- Дано 2 масиви з рівною кількістю об'єктів.
Масиви: */
document.write(`<h3>-- 9 --</h3>`);
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

document.write(`<p>usersWithId <br><br> ${JSON.stringify(usersWithId)}</p>`);
document.write(`<p>citiesWithId <br></br>${JSON.stringify(citiesWithId)}</p>`);

/*9.1 З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
]*/
let usersWithCities = [];
let adress = {}
for (let i of usersWithId) {
    for (let j of citiesWithId) {
        if (j.user_id === i.id) {
            address = {
                user_id: j.user_id,
                country: j.country,
                city: j.city
            }
        }
    }
    usersWithCities.push({
        id: i.id,
        name: i.name,
        age: i.age,
        status: i.status,
        address: address,
    })
}

document.write(`<h3>usersWithCities <br><br>${JSON.stringify(usersWithCities)}</h3>`);

/*10 - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/

document.write(`<h3>-- 10 --</h3>`);
console.log('-- 10 --')
array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100)
    if (!(array[i] % 2)) {
        console.log(array[i]);
        document.write(`${array[i]} `);
    }
}

/*11 - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/

document.write(`<h3>-- 11 --</h3>`);
console.log('-- 11 --')
array = [];
arrayNew = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100)
}
for (let i in array) {
    arrayNew[i] = array[i];
}
console.log(`Array = ${array}`);
document.write(`<h3>Array = ${array}</h3>`);

console.log(`ArrayNew = ${array}`);
document.write(`<h3>ArrayNew = ${array}</h3>`);

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/

document.write(`<h3>-- 12 --</h3>`);

array = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i<array.length; i++) {
    word += array[i];
}
document.write(`<h3>Word = ${word}</h3>`);

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
word = '';
let i = 0;
while (array[i]) {
    word += array[i];
    i++
}
document.write(`<h3>Word = ${word}</h3>`);

/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/

array = ['a', 'b', 'c'];
word = '';
for (let i of array) {
    word += i;
}
document.write(`<h3>Word = ${word}</h3>`);