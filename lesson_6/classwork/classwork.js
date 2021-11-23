/*- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/


const isLetter = str =>
    (str >= 'А' && str <= 'я' && str !== '_') ||
    (str >= 'A' && str <= 'z' && str !== '_');


const normalizeName = str => {
    let res = [];
    for (let i of str) {
        isLetter(i) ? res.push(i) : res.push(' ');
    }
    res = res.join('').split(' ');
    str = '';
    res.forEach(item => item ? str += item.concat(' ') : null);
    return str;
}

/*Пример*/
console.log(normalizeName('Harry..Potter'));
console.log(normalizeName('Ron---Whisley'));
console.log(normalizeName('Hermione__Granger'));

/*- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.*/

const randItem = (min, max) => Math.round(Math.random() * (max - min) + min);

const randArray = (min, max, num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(randItem(min, max))
    }
    return arr;
}

console.log(randArray(10, 100, 20));

/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort*/

/*Пример*/
console.log(randArray(10, 100, 30).sort());

/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа*/

/*Пример*/
console.log(randArray(10, 100, 40).filter(value => !(value % 2)));

/*- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.*/

/*Пример*/
console.log(randArray(10, 100, 40).map(value => `${value}`));

/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]*/

const sortNums = (array, direction) => {
    direction = direction || 'ascanding';
    switch (direction) {
        case 'ascanding':
            return array.sort();
        case 'descanding':
            return array.sort().reverse();
    }
}

/*Пример*/
console.log(sortNums([11, 21, 3], 'descanding'));
console.log(sortNums([11, 21, 3], 'ascanding'));

/*- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 */

const compare = (a, b) => a - b;

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
]
/*-- відсортувати його за спаданням за monthDuration*/

/*Пример*/
console.log(coursesAndDurationArray.sort((item1, item2) => item1.monthDuration - item2.monthDuration).reverse());

/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));

/*- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]*/

const cutString = (str, n) => {
    let array = [];
    for (let i = 0; i < str.length - 1; i += n) {
        array.push(str.slice(i, i+n));
    }
    return array;
}

/*Пример*/
console.log(cutString('наслаждение', 3));
