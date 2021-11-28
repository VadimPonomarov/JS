/*1) Напишіть код, який :
    a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
    b) робить шириниу елементу ul 400px
    c) робить шириниу всіх елементів з класом linkList шириною 50%
    d) отримує текст який зберігається в елементі з класом listElement2
    e) отримує всі елементи li та змінює ім колір фону на сірий
    f) отримує всі елементи 'a' та додає їм клас anchor
    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
    l) отримати елементи p та змінити їм padding на 20px
    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)*/

console.log('--1--');
/*a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)*/
document.getElementById('main_header').innerText = 'sep-2021';
/*b) робить шириниу елементу ul 400px*/
let elements = document.getElementsByTagName('ul');
for (let element of elements) {
    element.style = 'width:400px'
    console.log('b) width = ', element.style.width);
}
/*c) робить шириниу всіх елементів з класом linkList шириною 50%*/

elements = document.getElementsByClassName('linkList');
for (let element of elements) {
    element.style = 'width:50%'
    console.log('c) ', element.className, 'width = ', element.style.width);
}

/*d) отримує текст який зберігається в елементі з класом listElement2*/

elements = document.getElementsByClassName('listElement2');
for (let element of elements) {
    console.log('d)', element.className, 'Text = ', element.innerText);
}

/*e) отримує всі елементи li та змінює ім колір фону на сірий*/
elements = document.getElementsByTagName('li');
for (let element of elements) {
    element.style = 'background-color: lightgrey'
}

/*f) отримує всі елементи 'a' та додає їм клас anchor*/
elements = document.getElementsByTagName('a');
for (let element of elements) {
    element.classList += ' anchor';
}

/*g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів*/

for (let element of elements) {
    if (element.innerText.trim() === 'link3') {
        element.style = 'font-size: 40px'
    }
}

/*h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a*/

for (let element of elements) {
    element.classList += ` element_${element.innerText}`;
}

/*i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()*/

elements = document.getElementsByClassName('sub-header');
let color;
//color = prompt("Введите color", 'red') || 'blue';
for (let element of elements) {
    element.style.color = color || 'blue';
}

/* j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемнту = content 2 segment . Колір отримати з prompt()*/

elements = document.getElementsByClassName('sub-header');
//color = prompt("Введите color", 'red') || 'blue';
for (let element of elements) {
    if (element.innerText.trim() === 'content 2 segment') {
        element.style.color = color || 'green';
    }
}

/*k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()*/

elements = document.getElementsByClassName('content_1');
let text;
//text = prompt("Введите text", "Lorem ipsum dolor sit amet.");
for (let element of elements) {
        element.innerText = text || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, similique!';
}

/*l) отримати елементи p та змінити їм padding на 20px*/

elements = document.getElementsByTagName('p');
for (let element of elements) {
    element.style = 'padding: 20px';
}

/*m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)*/

elements = document.getElementsByClassName('text2');
for (let element of elements) {
    element.innerText = 'sep-2021';
}



