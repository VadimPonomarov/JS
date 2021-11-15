/* 1 -- створити масив з:
- з 5 числових значень
- з 5 стрічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

console.log('--1--');
let array = [1, 2, 3, 4, 5];
for (let i of array) {
    console.log('array ' + i)
}
console.log('\n')
/*----------------------------*/
array = ['str1', 'str2', 'str3', 'str4', 'str5'];
for (let i of array) {
    console.log('array ' + i)
}
console.log('\n')
/*----------------------------*/
array = ['str1', true, 'str3', false, 'str5'];
for (let i of array) {
    console.log('array ' + i)
}
console.log('\n')
/*----------------------------*/

/*2-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
Вивести в консоль
*/
console.log('--2--')
for (let i = 0; i < 10; i++) {
    array[i] = null;
}
console.log(array);

/*2.1- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/

document.write('--2.1--');
for (let i = 1; i <= 10; i++) {
    document.write(`<div>For</div>`);
}

/*2.2- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/

document.write('--2.2--');
for (let i = 1; i <= 10; i++) {
    document.write(`<div>For${i} </div>`);
}

/*2.3- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

document.write('--2.3--');
let i = 1;
while (i <= 20) {
    document.write(`<h1>While</h1>`);
    i++;
}

/*2.4- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

document.write('--2.4--');
i = 1;
while (i <= 20) {
    document.write(`<h1>While${i}</h1>`);
    i++;
}

/*2.5- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

console.log('--2.5--');
array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100);
    console.log(array[i]);
}

/*2.6- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

console.log('--2.6--');
for (let i = 0; i < 10; i++) {
    array[i] = `String${i}`;
    console.log(array[i]);
}

/*2.7- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
console.log('--2.7--');
let arr = [1, 'string', true, null, NaN, [], {}, false, '', 0];
for (let i = 0; i < 10; i++) {
    array[i] = arr[i];
    console.log(array[i]);
}

/*2.8- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/

let typeArray = [
    {type: 'number', value: 1},
    {type: 'string', value: 'string'},
    {type: 'boolean', value: true},
];
for (let i = 0; i < 10; i++) {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            array[i] = Math.floor(Math.random() * 100);
            break;
        case 1:
            array[i] = 'string' + Math.floor(Math.random() * 100);
            break;
        default:
            array[i] = typeArray[2]['value'];
            typeArray[2]['value'] = !typeArray[2]['value']

    }
}
document.write(`Сформирован массив, состоящий из 10 случайных элементов (только числа, строки и boolean значения):`);
for (let i in array) {
    document.write(`<h2>${array[i]}</h2>`)
}

document.write(`Из которых boolean значения имеют:`)
for (let i in array) {
    if (typeof array[i] === 'boolean') {
        document.write(`<h2>Array[${i}]=${array[i]}</h2>`);
    }
}

/*2.9- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/

document.write(`Из которых числовые значения имеют:`)
for (let i in array) {
    if (typeof array[i] === 'number') {
        document.write(`<h2>Array[${i}]=${array[i]}</h2>`);
    }
}

/*2.10- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/

document.write(`Из которых строчные значения имеют:`)
for (let i in array) {
    if (typeof array[i] === 'string') {
        document.write(`<h2>Array[${i}]=${array[i]}</h2>`);
    }
}

/*2.11- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/
// let arr = [1, 'string', true, null, NaN, [], {}, false, '', 0];

console.log('--2.11--');
for (let i in arr) {
    console.log(`Arr[${i}]=${arr[i]}`)
}

/*2.12 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/

console.log('--2.12--');
document.write(`Цикл из 10 итераций<br><br>`);
console.log(`Цикл из 10 итераций`);
for (let i = 1; i <= 10; i++) {
    console.log(`Шаг ${i}`);

    document.write(`Шаг ${i}<br>`)
}

/*2.13 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/

console.log('--2.13--');
document.write(`<br>Цикл из 100 итераций<br><br>`);
console.log(`Цикл из 100 итераций`);
for (let i = 1; i <= 100; i++) {
    console.log(`Шаг ${i}`);
    document.write(`Шаг ${i}<br>`)
}

/*2.14- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/

console.log('--2.14--');
document.write(`<br>Цикл из 100 итераций c шагом 2 <br><br>`);
console.log(`Цикл из 100 итераций с шагом 2`);
for (let i = 1, y = 2; i <= 100; i++, y += 2) {
    console.log(`Шаг ${i} = ${y}`);
    document.write(`Шаг ${i} = ${y}<br>`)
}

/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
console.log('--2.15--');
console.log(`Парные шаги`);
document.write(`<br>Парные шаги<br><br>`);
for (let i = 1; i <= 100; i++) {
    if (!(i % 2)) {
        console.log(`${i}`);
        document.write(`${i}<br>`)
    }
}

/*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
console.log('--2.16--');
console.log(`Непарные шаги`);
document.write(`<br>Непарные шаги<br><br>`);
for (let i = 1; i <= 100; i++) {
    if (i % 2) {
        console.log(`${i}`);
        document.write(`${i}<br>`)
    }
}