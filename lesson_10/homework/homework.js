/*1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".*/

document.write('-- 1 --');
let div = document.createElement('div');
let button = document.createElement('button');
div.innerHTML = '<h2>Text</h2>';
button.innerText = 'Выключить Text';
div.setAttribute('id', 'text');
document.body.appendChild(div);
document.body.appendChild(button);
button.onclick = function (e) {
    div.classList.toggle('invisible');
    button.innerText = `${div.classList.contains('invisible') ? 'Включить Text' : 'Выключить Text'}`;
}

/*2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.*/

document.write('<br><br>', '-- 2 --', '<br><br>');

let newButton = button.cloneNode();
newButton.innerText = 'Скрыть';
newButton.onclick = function (e) {
    newButton.classList.toggle('invisible');
}
document.body.appendChild(newButton);

/*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача*/

document.write('<br><br>', '-- 3 --', '<br><br>');

let form = document.createElement('form');
let input = document.createElement('input');
let btn = document.createElement('button');
form.name = 'myForm';
input.setAttribute("type", "text");
input.setAttribute("name", "FullName");
input.setAttribute("placeholder", "Введите возраст ...");
btn.setAttribute('type', 'submit');
btn.innerText = 'Пуск';

btn.onclick = function (e) {
    /*e.preventDefault();*/
    if (+(input.value) <= 18) {
        return alert('Возраст - не старше 18 лет');
    }
    return alert('Возраст -  от 19 лет');
}
document.body.appendChild(form);
form.appendChild(input);
form.appendChild(btn);

/*4 - Создайте меню, которое раскрывается/сворачивается при клике*/

document.write('<br><br>', '-- 4 --', '<br><br>');

let menuDiv = document.createElement('div');
menuTitle = document.createElement('div');
menuTitle.innerHTML = '<h3>Выпадающее меню</h3>';
menuTitle.style.textAlign = 'center';
menuTitle.style.cursor = 'pointer';
menuTitle.onclick = function (e) {
    ul.classList.toggle('display');
}
let ul = document.createElement('ul');
let menuItemsArr = ['Главная', 'Контакты', 'О нас'];
menuItemList = '';
for (let item of menuItemsArr) {
    menuItemList += `<li><a href="#">${item} </a></li>`
}

menuDiv.style.border = '1px solid red';
menuDiv.style.width = '240px';

document.body.appendChild(menuDiv);
menuDiv.appendChild(menuTitle);
menuDiv.appendChild(ul);
ul.innerHTML += menuItemList;

/*5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.*/

let comments = [
    {title: 'lorem-1', body: 'lorem-1 ipsum dolo sit ameti'},
    {title: 'lorem-2', body: 'lorem-2 ipsum dolo sit ameti'},
    {title: 'lorem-3', body: 'lorem-3 ipsum dolo sit ameti'},
    {title: 'lorem-4', body: 'lorem-4 ipsum dolo sit ameti'}
];

/*6 - Вывести список комментариев в документ, каждый в своем блоке.
    - Добавьте каждому комментарию по кнопке для сворачивания его body.*/

document.write('<br><br>', '-- 6 --', '<br><br>');

for (let comment of comments) {
    let container = document.createElement('div');
    let btn = document.createElement('button');
    container.style.border = '1px solid blue';
    container.style.width = '50%';
    container.style.textAlign = 'center';
    container.style.position = 'relative';
    btn.innerHTML = 'Toggler';
    btn.style.position = 'absolute';
    btn.style.left = '0';
    btn.style.top = '0';
    btn.onclick = function (e) {
        body.classList.toggle('display');
    }
    let title = document.createElement('div');
    let body = document.createElement('div');
    title.innerHTML = `<h3>${comment.title}</h3>`
    body.innerHTML = `<p>${comment.body}</p>`;
    document.body.appendChild(container);
    container.appendChild(btn);
    container.appendChild(title);
    container.appendChild(body);

}

/* */







