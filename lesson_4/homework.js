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

/* Homework*/

/*1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

function rectArea(width, length) {
    if (!checkNum(width, length)) {
        return 'В rectArea передан неверный тип данных'
    }
    return width * length
}

/*2 - створити функцію яка обчислює та повертає площу кола з радіусом r*/
function cirArea(radius) {
    if (!checkNum(radius)) {
        return 'В cirArea передан неверный тип данных'
    }
    return Math.round(Math.PI * radius ** 2)
}

/*3 - створити функцію яка обчислює та повертає oб'єм циліндру висотою h, та радіутом r*/

function cilinderArea(height, radius) {
    if (!checkNum(height, radius)) {
        return 'В cilinderArea передан неверный тип данных'
    }
    return cirArea(radius) * height
}

/*4 - створити функцію яка приймає масив та виводить кожен його елемент*/
function arrayList(arr) {
    if (!Array.isArray(arr)) {
        return 'В arrayList передан неверный тип данных'
    }
    for (let i of arr) {
        console.log(i);
    }
}

/*5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
function makeParagraph(text) {
    if (typeof text !== 'object') {
        return (`<p>${text}</p>`)
    } else {
        return 'В makeParagraph передан неверный тип данных'
    }
}

/*6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

function makeUl(text) {
    if (typeof text !== 'object') {
        return (`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
    } else {
        return 'В makeUl передан неверный тип данных'
    }
}

/*7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

function makeUlN(text, number) {
    let num = number || 3;
    let list = '';
    if (typeof text !== 'object') {
        if (num) {
            for (let i = 1; i <= num; i++) {
                list += `<li>${text}</li>`
            }
        }
        return (`<ul>${list}</ul>`)
    } else {
        return 'В makeUlN передан неверный тип данных'
    }
}

/*8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

function makeUlArray(array) {
    if (!Array.isArray(array)) {
        return 'В makeUlArray передан неверный тип данных'
    }
    let list = '';
    for (let i of array) {
        list += `<li>${i}</li>`
    }
    return (`<ul>${list}</ul>`)
}

/*9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

function makeDivObj(array) {
    if (!Array.isArray(array)) {
        return 'В makeUlArray передан неверный тип данных'
    }
    for (let i of array) {
        let info;
        if (!(i.id && i.name && i.age)) {
            info = '-- Нет данных --'
        }
        document.write(`
               <div>${i.id || info}</div>
               <div>${i.name || info}</div>
               <div>${i.age || info}</div>
               <hr></hr>
        `)
    }
}

