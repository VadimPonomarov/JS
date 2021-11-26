/*1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname, email, phone) {
    return {
        id: id,
        name: name || `name ${id}`,
        surname: surname || `surname ${id}`,
        email: email || `email ${id}`,
        phone: phone || `phone ${id}`
    }
}

/*Пример*/


let array = [];
for (let i = 0; i < 10; i++) {
    array.push(new User(i));
}

console.log('--1--');
console.log(array);

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

/*Пример*/

console.log('--2--');
console.log(array.filter(value => !(value.id % 2) && value.id !== 0));

/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

console.log('--3--');
console.log(array.sort((value1, value2) => value1 - value2));

/*4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

/*генератор массива случайной размерности*/
const genArr = (num) => {
    return new Array(Math.round(Math.random() * num))
}

class Client {
    constructor(id, name = `name ${id}`, surname = `surname ${id}`, email = `email ${id}`, phone = `phone ${id}`, order = genArr(30)) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

/*Пример*/
array = [];
for (let i = 0; i < 10; i++) {
    array.push(new Client(i));
}

console.log('--4--');
console.log(array);

/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

*/

/*Пример*/
console.log('--5--');
array.sort((item1,item2) => item1.order.length - item2.order.length).map(item => console.log(`Кол-во Orders = ${item.order.length}`, item));
