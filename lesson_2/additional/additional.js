/*1 - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
 кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
 Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
*/

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends[2]) {
    alert(`В массиве ${friends} не менее 3 элементов`)
} else {
    alert(`В массиве ${friends} менее 3 элементов`)
}

/* - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
 Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.*/

let first = Math.floor(Math.random() * 100);
let second = Math.floor(Math.random() * 100);
let third = Math.floor(Math.random() * 100);
alert(`Случайные числа ${first} - ${second} - ${third}`);

if ((first < second &&
    second < third) || (third < second &&
    second < first)
) {
    alert(`${second} - посередине. Первое число находится между двумя другими`)
} else if ((second < first &&
    first < third) || (third < first &&
    first < second)) {
    alert(`${first} - посередине. Первое число не находится между двумя другими`)
} else if ((first < third &&
    third < second) || (second < third &&
    third < first)) {
    alert(`${third} - посередине. Первое число не находится между двумя другими`)
} else {
    alert(`Ни одно из чисел не находится по середине, т.к. имеются равные числа`)
}

/*- Перепишіть конструкцію if з використанням умовного оператора '?':
 let result;
 if (a + b < 4) {
    result = 'Мало';
 } else {
    result = 'Багато';
 }*/

let a = Math.floor(Math.random() * 4);
let b = Math.floor(Math.random() * 4);
let result = a + b < 4
    ? alert(`${a} + ${b} < 4 - мало`)
    : alert(`${a} + ${b} < 4 - много`);

/*- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
напишіть це тернарним оператором*/

let figure = +prompt('Введите число от -100 до 100') || 0;
if (figure) {
    figure < 0
        ? alert(`${figure} - введено негативное число`)
        : alert(`${figure} - введено позитивное число`)
} else {
    alert(`${figure} - введен ноль`)
}