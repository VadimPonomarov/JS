/*1 - Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/

let first = Math.floor(Math.random() * 10);
let second = Math.floor(Math.random() * 10);
document.write(`1. Из двух чисел ${first} и ${second} `)

if (first < second) {
    document.write(`- наибольшее число ${second}`)
} else if (first > second) {
    document.write(`- наибольшее число ${first}`)
} else {
    document.write(` - числа равны`)
}

/*2 - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.*/

let num = Math.floor(Math.random() * 47) + 1;
if (num <= 20) {
    document.write(`<br>2. Квартира ${num} находится в 1 подъезде`)
} else {
    document.write(`<br>2. Квартира ${num} находится во 2 подъезде`)
}

/*3 - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО*/

let number = +prompt('Введите целое число') || Math.floor(Math.random() * 10);
if (number === 10) {
    document.write(`<br>3. Верно - ${number}`)
} else {
    document.write(`<br>3. Неверно - ${number}`)
}

/*4 - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else*/

// let x = 'test';
// let x = !!test;
// let x = 3223;
// let x = null;
// let x = NaN;
// let x = { };
// let x = [];
// let x = false;
let x = null;

switch (typeof x) {
    case "number":
        document.write(`<br>4. Число - ${x}`);
        break;
    case "string":
        document.write(`<br>4. Строка - ${x}`);
        break;
    case "boolean":
        document.write(`<br>4. Булевое - ${x}`);
        break;
    case "object":
        document.write(`<br>4. Объект либо массив - ${x}`);
        break;
    default:
        document.write(`<br>4. Else - ${x}`);
}

/*5 - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН*/

let temperature = prompt(`Введите температуру окружающей среды - в гр.Цельсия`);
temperature >= 10 && temperature <= 22
    ? document.write(`<br>5. Вчимося - ${temperature}&deg;C`)
    : document.write(`<br>5. Не вчимося - {temperature}&deg;C`);

/*6 - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .*/

let item = +prompt('Введите целое число от 1 до 5');
switch (item) {
    case 1:
        document.write(`<br>6. Вы выиграли Авто - ${item}`);
        break;
    case 2:
        document.write(`<br>6. Вы выиграли Мото - ${item}`);
        break;
    case 3:
        document.write(`<br>6. Вы выиграли Телефон - ${item}`);
        break;
    case 4:
        document.write(`<br>6. Вы выиграли Ноутбук - ${item}`);
        break;
    case 5:
        document.write(`<br>6. Вы выиграли Танк - ${item}`);
        break;
    default:
        item = +prompt('Вы ввели неверное число. Введите еще раз целое число от 1 до 5');
        switch (item) {
            case 1:
                document.write(`<br>6. Вы выиграли Авто - ${item}`);
                break;
            case 2:
                document.write(`<br>6. Вы выиграли Мото - ${item}`);
                break;
            case 3:
                document.write(`<br>6. Вы выиграли Телефон - ${item}`);
                break;
            case 4:
                document.write(`<br>6. Вы выиграли Ноутбук - ${item}`);
                break;
            case 5:
                document.write(`<br>6. Вы выиграли Танк - ${item}`);
                break;
            default:
                document.write(`<br>6. Вы оба раза ввели неверное число. Игра закончена !`);
                break;
        }
}