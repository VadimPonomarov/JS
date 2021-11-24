/*1 - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com

Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.*/

const validateEmail = (email) => {
    let segmentsArr = email.split('@');
    if (!segmentsArr) {
        return 'Адрес email не валиден - отсутствует @'
    }
    let index = email.indexOf('@');
    if (!index) {
        return 'Адрес email не валиден - отсутствует сегмент адреса до знака "@"';
    }
    let subSegments = segmentsArr[1].split('.');
    if (!subSegments || subSegments[0].length <= 2 || !subSegments[1]) {
        return 'Адрес email не валиден - отсутствует сегмент адреса после знака "@" или его длина до "." менее 2 символов, или отсутствует сегмент после "." '
    }
    return '!!! Valid'
}
console.log('--1--');
console.log(validateEmail('someemail@gmail.com'));
console.log(validateEmail('someeMAIL@gmail.com'));
console.log(validateEmail('someeMAIL@i.ua'));
console.log(validateEmail('some.email@gmail.com'));

/*- є масив*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

/*2 відсортувати його в спадаючому порядку за кількістю елементів в полі modules*/
console.log('--2--');
let arr = coursesArray.sort((item1, item2) => item1.modules.length - item2.modules.length).reverse();
for (let i of arr) {
    console.log(i.modules.length, JSON.stringify(i));
}

/*3 - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5*/

const count = (str, stringsearch) => {
    str = str.split('');
    let outputArr = str.filter(item => item === stringsearch);
    if (!outputArr) {
        return 'Таких символов в строке не обнаружено'
    }
    let counter = 0;
    outputArr.forEach(item => counter++);
    return counter;
}

/*Пример*/
console.log('--3--');
let symb = "о", str = "Астрономия это наука о небесных объектах";
console.log(count(str, symb));

/*4 - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'*/

const cutString = (str, n) => {
    str = str.split(' ');
    return str.splice(0, n).join(' ');
}

/*Пример*/
console.log('--4--');
let str_ = "Сила тяжести приложена к центру масс тела";
console.log(cutString(str_, 5));

