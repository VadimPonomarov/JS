/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.*/

let var1 = 'hello';
let var2 = 'owu';
let var3 = 'com';
let var4 = 'ua';
let var5 = 1;
let var6 = 10;
let var7 = -999;
let var8 = 123;
let var9 = 3.14;
let var10 = 2.7;
let var11 = 16;
let var12 = true;
let var13 = false;

/*Вивести кожну змінну за допомогою: console.log , alert, document.write*/

console.log(var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13);
alert(`${var1}, ${var2}, ${var3}, ${var4}, ${var5}, ${var6}, ${var7}, ${var8}, ${var9}, ${var10}, ${var11}, ${var12}, ${var13}`);
document.write(`${var1}, ${var2}, ${var3}, ${var4}, ${var5}, ${var6}, ${var7}, ${var8}, ${var9}, ${var10}, ${var11}, ${var12}, ${var13}<br>`);

/*- Переприсвоїти кожній змінній з завдання значення на довільне.*/

var1 = 'hello-1';
var2 = 'owu-1';
var3 = 'com-1';
var4 = 'ua-1';
var5 = 11;
var6 = 101;
var7 = -9991;
var8 = 1231;
var9 = 3.141;
var10 = 2.71;
var11 = 161;
var12 = 1;
var13 = 0;

/*Вивести кожну змінну за допомогою: console.log , alert, document.write*/

console.log(var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13);
alert(`${var1}, ${var2}, ${var3}, ${var4}, ${var5}, ${var6}, ${var7}, ${var8}, ${var9}, ${var10}, ${var11}, ${var12}, ${var13}`);
document.write(`${var1}, ${var2}, ${var3}, ${var4}, ${var5}, ${var6}, ${var7}, ${var8}, ${var9}, ${var10}, ${var11}, ${var12}, ${var13}<br>`);

/*  - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.*/

let firstName = 'Вадим';
let middleName = 'Сергійович';
let lastName = 'Пономарьов';

/*З'єднати їх в одну змінну person. (Не об'єкт)*/

let person = `${firstName} ${middleName} ${lastName}`

/*- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.*/
let name = prompt('Введите ваше имя');
let surname = prompt('Введите ваше отчество');
let age = prompt('Введите ваш возраст');

/*Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".*/

console.log(`Приветствую ${name} ${surname}. Тебе ${age} лет`);
alert(`Приветствую ${name} ${surname}. Тебе ${age} лет`);
document.write(`Приветствую ${name} ${surname}. Тебе ${age} лет<br>`);

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;*/

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);

/*- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
В однакових виразах не використовувати однакові оператори!!!*/

/* 5 ? 6 -> true*/
let res;
console.log(res = 5 < 6);
document.write(res + '<br>');
/* 5 ? 6 -> false*/
console.log(res = 5 > 6);
document.write(res + '<br>');
/*5 ? 6 -> false*/
console.log(res = 5 == 6);
document.write(res + '<br>');
/*5 ? 6 -> false*/
console.log(res = 5 >= 6);
document.write(res + '<br>');
/*10 ? 10 -> true*/
console.log(res = 10 == 10);
document.write(res + '<br>');
/*10 ? 10 -> true*/
console.log(res = 10 === 10);
document.write(res + '<br>');
/*10 ? 10 -> false*/
console.log(res = 10 != 10);
document.write(res + '<br>');
/*10 ? 10 -> false*/
console.log(res = 10 !== 10);
document.write(res + '<br>');
/*10 ? 10 -> false*/
console.log(res = 10 != 10);
document.write(res + '<br>');
/*10 ? 10 -> false*/
console.log(res = 10 > 10);
document.write(res + '<br>');
/*123 ? '123' -> false*/
console.log(res = 123 != '123');
document.write(res + '<br>');
/*123 ? '123' -> true*/
console.log(res = 123 == '123');
document.write(res + '<br>');