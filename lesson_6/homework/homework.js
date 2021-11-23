/*- Знайти та вивести довижину наступних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'*/

/*Пример*/
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

/*- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'*/

/*Пример*/
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

/*- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

/*Пример*/
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

/*Пример*/
console.log(' dirty string   '.trim())

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
    let arr = stringToarray(str);
    document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/

const stringToarray = str => str.split(' ');

/*Пример*/
console.log(stringToarray('Каждый охотник желает знать'));

/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
    document.writeln(delete_characters(str, 7)); // Каждый
*/

const delete_characters = (str, length) => str.slice(str, length);

/*Пример*/
console.log(delete_characters('Каждый охотник желает знать', 7));

/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
   let str = "HTML JavaScript PHP";
   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/

const insert_dash = (str) => str.replaceAll(' ', '-');

/*Пример*/
console.log(insert_dash('HTML-JAVASCRIPT-PHP'));

/*- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.*/

const capitalizeFirst = str => str.replace(str[0], str[0].toUpperCase());

/*Пример*/
console.log(capitalizeFirst('hello, world!'));

/*- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.*/

const capitalize = str => {
    let arr = str.split(' ');
    let result = [];
    arr.forEach(item => {
            result.push(capitalizeFirst(item));
        }
    )
    return result.join(' ');
}

/*Пример*/
console.log(capitalize('Каждый охотник желает знать'));