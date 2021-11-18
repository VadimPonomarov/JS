/*Проверяет, являются ли типы аргументов числовыми*/
function checkNum() {
    for (let i of arguments) {
        if (typeof i !== 'number') {
            return false
        }
    }
    return true
}

/*Возвращает рандомное число в заданном диапазоне*/
function random(range) {
    return Math.floor(Math.random() * range)
}

/*-----------Classwork------------*/

/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

function fMin() {
    let min;
    for (let i of arguments) {
        min = (min < i) ? min : i
    }
    return min;
}



/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

function fMax() {
    let max;
    for (let i of arguments) {
        max = (max > i) ? max : i
    }
    return max;
}


/*- створити функцію яка повертає найбільше число з масиву*/

function fMaxArr(arr) {
    let max;
    for (let i of arr) {
        max = (max > i) ? max : i
    }
    return max;
}


/*- створити функцію яка повертає найменьше число з масиву*/

function fMinArr(arr) {
    let min;
    for (let i of arr) {
        min = (min < i) ? min : i
    }
    return min;
}


/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/

function sumArr(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i
    }
    return sum;
}



/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/

function avgArr(arr) {
    let sum = 0;
    let avg;
    for (let i of arr) {
        sum += i
    }
    avg = sum / arr.length;
    return avg;
}



/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/

function minMax(arr) {
    console.log(fMaxArr(arr));
    return fMinArr(arr);
}



/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

function randArr100(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = random(100);
    }
    console.log(arr);
    return arr;
}



/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.*/

function randArr(size, limit) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = random(limit);
    }
    console.log(arr);
    return arr;
}



/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

function arrContra(arr) {
    let contra = [];
    for (let i = arr.length - 1, y = 0; i >= 0; i--, y++) {
        contra[y] = arr[i];
    }
    console.log(contra)
    return contra;
}


