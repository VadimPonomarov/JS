/*Проверка на тип*/
const primitives = item => typeof item === 'object';
const isNumber = item => typeof item === 'number';
const isArray = item => Array.isArray(item);


/*Возвращает рандомное число в заданном диапазоне*/
const randRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

/*Эмулятор arguments*/

/*-----------Classwork------------*/

/*1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

const fMin = (...arguments) => {
    let min;
    for (let i of arguments) {
        if (!isNumber(i)) {
            return `Аргумент ${i} не является числом`
        }
        min = (min < i) ? min : i
    }
    return min;
}

console.log('--1-- ', fMin(1, 2, 3));

/*2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

const fMax = (...arguments) => {
    let max;
    for (let i of arguments) {
        if (!isNumber(i)) {
            return `Аргумент ${i} не является числом`
        }
        max = (max > i) ? max : i
    }
    return max;
}

console.log('--2-- ', fMax(1, 2, 3));

/*- створити функцію яка повертає найбільше число з масиву*/

const fMaxArr = (array) => {
    if (!isArray(array)) {
        return `Аргумент ${array} не является массивом`
    }
    let max;
    for (let i of array) {
        if (!isNumber(i)) {
            return `Аргумент ${i} не является числом`
        }
        max = (max > i) ? max : i
    }

    return max;
}

console.log('--3-- ', fMaxArr([1, 2, 3]));

/*4 - створити функцію яка повертає найменьше число з масиву*/

function fMinArr(array) {
    if (!isArray(array)) {
        return `Аргумент ${array} не является массивом`
    }
    let min;
    for (let i of array) {
        if (!isNumber(i)) {
            return `Аргумент ${i} не является числом`
        }
        min = (min < i) ? min : i
    }
    return min;
}

console.log('--4-- ', fMinArr([1, 2, 3]));

/*5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/

const sumArr = (array) => {
    if (!isArray(array)) {
        return `Аргумент ${array} не является массивом`
    }
    let sum = 0;
    for (let i of array) {
        if (!isNumber(i)) {
            return `Аргумент ${i} не является числом`
        }
        sum += i
    }
    return sum;
}

console.log('--5-- ', sumArr([1, 2, 3]));

/*6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/

const avgArr = (array) => {
    if (!isArray(array)) {
        return `Аргумент ${array} не является массивом`
    }
    let sum = 0;
    let avg;
    for (let i of array) {
        if (!isNumber(i)) {
            return `Аргумент ${i} не является числом`
        }
        sum += i
    }
    avg = sum / array.length;
    return avg;
}

console.log('--6-- ', avgArr([3, 7, 9]));

/*7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/

const minMax = (...arguments) => {
    console.log('--7-- ', fMaxArr(arguments));
    return fMinArr(arguments);
}

document.write(`minMax(1, 9, 129)
    -- min = ${minMax(1, 9, 129)}
    -- max = см. в консоли <br>`);

/*8 - створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

const randArr100 = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = randRange(0, 100);
    }
    return arr;
}

document.write(`randArr100(20) = ${randArr100(20)}<br>`);
console.log('--8-- ', randArr100(20));


/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.*/

const randArr = (size, limit) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = randRange(0, limit);
    }
    return arr;
}

document.write(`randArr(20, 1000) = ${randArr(20, 1000)}<br>`);
console.log(randArr(20, 1000));


/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

const arrContra = (array) => {
    let contra = [];
    for (let i = array.length - 1, y = 0; i >= 0; i--, y++) {
        contra[y] = array[i];
    }
    return contra;
}

document.write(`arrContra([1, 3, 5]) = [${arrContra([1, 3, 5])}]<br>`);
console.log(arrContra([1, 3, 5]));