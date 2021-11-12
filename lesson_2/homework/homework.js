/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = Math.floor(Math.random() * 59);

if (time <= 15) {
    document.write(`Число ${time} попадает <h1>В 1 - Первую четверть</h1>`);
} else if (time > 15 && time <= 30) {
    document.write(`Число ${time} попадает <h1>Во 2 - Вторую четверть</h1>`);
} else if (time > 30 && time <= 45) {
    document.write(`Число ${time} попадает <h1>В 3 - Третью четверть</h1>`);
} else {
    document.write(`Число ${time} попадает <h1> В 4 - Четвертую четверть</h1>`);
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day = Math.floor(Math.random() * 31);
let decade = Math.round(day / 10);

switch (decade) {
    case 1:
        document.write(`День ${day} попадает <h1> В ${decade} - Первую декаду</h1>`);
        break;
    case 2:
        document.write(`День ${day} попадает <h1> Во ${decade} - Вторую декаду</h1>`);
        break;
    default:
        document.write(`День ${day} попадает <h1> В ${decade} - Третью декаду</h1>`);
}

/*- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)*/

let test = true;
document.write('test = true');
document.write(test ? `<h1>True</h1>` : `<h1>False</h1>`);

test = false;
document.write('test = false');
document.write(test ? `<h1>True</h1>` : `<h1>False</h1>`);

/*- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let var1 = 0;
document.write('variable = 0');
document.write(var1 !== 0 ? `<h1>True</h1>` : `<h1>False</h1>`);

var1 = 1;
document.write('variable = 1');
document.write(var1 !== 0 ? `<h1>True</h1>` : `<h1>False</h1>`);

var1 = -3;
document.write('variable = -3');
document.write(var1 !== 0 ? `<h1>True</h1>` : `<h1>False</h1>`);

/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.*/

let weekday = +prompt('Введите порядковый номер дня недели - число от 1 до 7') || 7;
switch (weekday) {
    case 1:
        document.write('<h1>Расписание на понедельник ...</h1>');
        break;
    case 2:
        document.write('<h1>Расписание на вторник ...</h1>');
        break;
    case 3:
        document.write('<h1>Расписание на среду ...</h1>');
        break;
    case 4:
        document.write('<h1>Расписание на четверг ...</h1>');
        break;
    case 5:
        document.write('<h1>Расписание на пятницу ...</h1>');
        break;
    case 6:
        document.write('<h1>Расписание на субботу ...</h1>');
        break;
    default:
        document.write('<h1>Расписание на воскресенье ...</h1>');
}

/*- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.*/

let year = +prompt('Введите год - 4 цифры --> например 2021') || 2021;
if (year % 4) {
    document.write(`<h1>Год ${year} не високосный</h1>`);
} else {
    document.write(`<h1>Год ${year} високосный</h1>`);
}

/*- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!*/

let name = prompt('Яка «офіційна» назва JavaScript?');
if (name === 'ECMAScript') {
    document.write(`<h1>${name} - Правильно!</h1>`);
} else {
    document.write(`<h1>${name} - Не знаєте? ECMAScript!</h1>`);
}