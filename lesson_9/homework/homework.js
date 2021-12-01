/*Все робити за допомоги js.*/

/*1 - створити блок,*/
let vDiv = document.createElement('div');
vDiv.innerText = 'Блок Div';
/*2 - додати йому класи wrap, collapse, alpha, beta*/
vDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
/*3 - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту*/
vDiv.style = 'background:lightgrey; color: blue; font-size: 1.2rem';
/*4 - додати цей блок в body.*/
document.body.appendChild(vDiv);
/*5 - клонувати його повністю, та додати клон в body.*/
let divClone = vDiv.cloneNode(true);
document.body.appendChild(divClone);

/*-------------------------------------*/
/*создание блока ul в структуре html документа*/
let ulMenu = document.createElement('ul');
ulMenu.classList.add('menu');
document.body.appendChild(ulMenu);
/*---------------------------------*/

/*6 - Є масив: ['Main','Products','About us','Contacts']*/
let array = ['Main', 'Products', 'About us', 'Contacts'];
/*6.1 - Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu*/
let menu = document.getElementsByClassName('menu')[0];
for (let item of array) {
    let v = document.createElement('li');
    v.innerText = item;
    menu.appendChild(v);
}
/*7 - Є масив*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

/*7.1 Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/


for (let item of coursesAndDurationArray) {
    let v = document.createElement('div');
    v.innerHTML = `<h2>${item.title}.</h2><small>Month duration - ${item.monthDuration}</small>`;
    menu.appendChild(v);
}

/*8 - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
*/

/*8.1 За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.*/

for (let item of coursesAndDurationArray) {
    let v = document.createElement('div');
    v.classList.add('item');
    v.innerHTML = `<h1 class="heading">${item.title}</h1><p class="description">${item.monthDuration}</p>`;
    menu.appendChild(v);
}





