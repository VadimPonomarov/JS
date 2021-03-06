/*Проверка на тип*/
const primitives = item => typeof item !== 'object';

/*Homework*/

/*Всі функції повинні бути описані стрілочним типом!!!!*/

/*1 - створити функцію яка обчислює та повертає площу прямокутника висотою*/
const rectArea = (width, height) => width * height;
/*Пример*/
console.log('--1--', rectArea(10, 3));

/*2- створити функцію яка обчислює та повертає площу кола*/
const circArea = (radius) => Math.PI * radius ** 2;
/*Пример*/
console.log('--2--', circArea(10));

/*3 - створити функцію яка обчислює та повертає площу циліндру*/
const cilinderArea = (radius, height) => 2 * circArea(radius) + 2 * Math.PI * radius * height;

/*Пример*/

console.log('--3--', cilinderArea(10, 2));

/*4 - створити функцію яка приймає масив та виводить кожен його елемент*/

const printArray = (array) => {
    if (!Array.isArray(array)) {
        return 'Передайте массив значений'
    }
    for (let i of array) {
        console.log(i)
    }
}
/*Пример*/

console.log('--4--',)
printArray(['Test', 'Test1', 'Test2', 3, true]);

/*5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент*/

const makeParagraph = (text) => {
    if (!text || !primitives(text)) {
        return 'Передайте текст в формате примитивных данных'
    }
    return `<p>${text}</p>`
}
/*Пример*/
console.log('--5--', makeParagraph('jhgfjhg'))

/*6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

const makeList3 = (text) => {
    if (!text || !primitives(text)) {
        return 'Передайте текст в формате примитивных данных'
    }
    let list = `<ul>`
    for (let i = 1; i <= 3; i++) {
        list += `<li>${i}</li>`
    }
    list += `</ul>`;
    return list
}

/*Пример*/
console.log('--6--', makeList3('Test'))

/*7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

const makeListN = (text, number) => {
    let iter = number || 3;
    if (!text || !primitives(text)) {
        return 'Передайте текст в формате примитивных данных'
    }
    let list = `<ul>`
    for (let i = 1; i <= iter; i++) {
        list += `<li>${i}</li>`
    }
    list += `</ul>`;
    return list
}

/*Пример*/
console.log('--7--', makeListN('Test', 5))

/*8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/


const makeListArr = (array) => {
    if (!Array.isArray(array)) {
        return 'Передайте массив данных'
    }
    let list = `<ul>`
    for (let i = 0; i <= array.length - 1; i++) {
        list += primitives(array[i])
            ? `<li>${array[i]}</li>`
            : `${array[i]} не является примитивным типом данных`
    }
    list += `</ul>`;
    return list
}
/*Пример*/
console.log('--8--', makeListArr(['Test', true, 5, {}]));

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

const printObj = (array) => {
    let checkFields = {id: true, name: true, age: true};

    if (!Array.isArray(array)) {
        return document.write('Аргумент должен быть массивом');
    }
    for (let item of array) {
        if (primitives(item)) {
            return document.write(`'Данные должны быть переданы в структуре объекта {id:, name:, age:}'`);
        }
        for (key in item) {
            checkFields[key] ? document.write(`<div>${item[key]}</div>`) : document.write(`<div> --! Такое поле отсутствует в искомой структуре -- </div>`);
        }
    }
}

/*Пример*/

printObj({id: '76576', name: 'jhgfjhg', age: 33});
document.write(`<hr>`);

printObj([{id: '76576', name: 'jhgfjhg', age: 33}, {id: '76576', name: 'jhgfjhg', age: 33}]);
document.write(`<hr>`);

printObj([{id: '76576', name: 'jhgfjhg', age: 33, test: null}]);