/*Проверка на тип*/
const primitives = item => typeof item === 'object';
const isNumber = item => typeof item === 'number';
const isArray = item => Array.isArray(item);

/*Возвращает рандомное число в заданном диапазоне*/
const randRange = (min, max) => Math.floor(Math.random() * (max - min) + min);


/*1 - Дано натуральное число n. Выведите все числа от 1 до n.*/
const printNumbers = (number) => {
    if (!isNumber(number) && number > 0) {
        return console.log('В аргументе должно быть натуральное число')
    }
    let i = 1;
    while (i <= number) {
        console.log(i);
        i++
    }
}
/*Пример*/
console.log(`--1-- `);
printNumbers(5);

/*2 - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.*/

const printAscDesc = (a, b) => {
    if (!isNumber(a) || !isNumber(b)) {
        return console.log('Необходимо передать диапазон из 2-х числовых значений')
    }
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i)
        }
    }
}

/*Пример*/
console.log(`--2-- `);
printAscDesc(5, 10);
console.log(`--2-- `);
printAscDesc(10, 3);

/*3 -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
EXAMPLE:
foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
*/

const arrChangeIndex = (array, ind) => {
    ind = ind || 0;
    if (!isArray(array)) {
        return console.log('Аргумент должен быть массивом значений')
    }
    if (array.length - 1 < ind) {
        console.log(array[ind]);
        return console.log('index не соответствует размерности массива')
    }
    let maxInd = array.length - 1;
    let buffer;
    if (maxInd >= ind + 1) {
        bufer = array[ind];
        array[ind] = array[ind + 1];
        array[ind + 1] = bufer;
    } else {
        bufer = array[ind];
        array[ind] = array[0];
        array[0] = buffer;
    }
    return array
}

console.log(`--3-- `, arrChangeIndex([9, 8, 0, 4], 0));
console.log(`--3-- `, arrChangeIndex([9, 8, 0, 4]));
console.log(`--3-- `, arrChangeIndex([9, 8, 0, 4], 2));

/*- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]*/

const arrChangeVal = (array, val) => {
    val = val || 0;
    if (!isArray(array)) {
        return console.log('Аргумент должен быть массивом значений')
    }
    let buffer = [];
    let i = 0;
    for (let j of array) {
        if (j !== val) {
            buffer[i] = j;
            i++;
        }
    }
    while (i <= array.length) {
        buffer[i] = val;
        i++;
    }
    return buffer;


}
console.log('--5--');
console.log(arrChangeVal([0, 0, 1, 0, 6, 0, 3, 8, 3]));
