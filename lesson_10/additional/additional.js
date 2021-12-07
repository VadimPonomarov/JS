const modal = () => {
    let modal = document.createElement('div');
    modal.setAttribute('id', 'myModal');
    modal.classList.add('modal');
    modal.style.position = 'absolute';
    modal.style.width = '100%';
    modal.style.top = '0';
    document.body.appendChild(modal);
    let modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    let modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = 'Information';
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    let modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    let modalButton = document.createElement('button');
    modalButton.classList.add('modal-button', 'btn', 'btn-primary');
    modalButton.innerText = 'OK';
    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalFooter.appendChild(modalButton);
    modalButton.onclick = function () {
        modal.classList.add('modal')
    }

    return modal;
}

mw = modal();

/*1 - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина*/

/*2 - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина*/

const info = (e) => {
    let infoArr = [];
    infoArr.push({tagName: e.target.tagName});
    infoArr.push({classList: e.target.classList.value});
    infoArr.push({id: e.target.id});
    infoArr.push({width: e.target.clientWidth});
    infoArr.push({height: e.target.clientHeight});
    return infoArr;
}

document.ondblclick = function (e) {
    if (e.target.classList.contains('modal-button')) {
        return document.getElementById('myModal').classList.add('modal')
    }
    let target = prompt('Вывести в:', 'modale');
    inf = info(e);
    let modalBody = '';
    for (let item of inf) {
        for (let j in item) {
            modalBody += `<div style="text-align: center">
                                <strong>
                                    ${j} :
                                </strong>
                                ${item[j]}
                          </div>`
        }
    }
    if (target !== 'console') {
        mw.getElementsByClassName('modal-body')[0].innerHTML = modalBody
        mw.classList.remove('modal');
    } else {
        let arr = JSON.stringify(inf).split(',');
        for (let item of arr) {
            console.log(item);
        }
    }
}

/*3 - взять массив пользователей*/

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

/*4 - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
2й - оставляет старше 29 лет включительно
3й - оставляет тех у кого город киев
Данные выводить в документ*/

let targetForm = document.forms.checkForm;
targetForm.onsubmit = function (e) {
    e.preventDefault();
    let objList = usersWithAddress;
    let status = document.getElementById('exampleCheck1').checked;
    let age = document.getElementById('exampleCheck2').checked;
    let city = document.getElementById('exampleCheck3').checked;
    if (status) {
        objList = objList.filter(obj => obj.status !== status);
    }
    if (age) {
        objList = objList.filter(obj => obj.age >= 29);
    }
    if (city) {
        objList = objList.filter(obj => obj.address.city === 'Kyiv');
    }

    if (objList) {
        let output = '<br>';
        for (let i of objList) {
            output += `<div>${JSON.stringify(i)}</div>`
        }
        document.getElementById('outputDiv').innerHTML = output;
    }

}

/******(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
 при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
 НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
 Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне*/
const setStyles = function (elem, direction) {
    elem.classList.remove('my-active');
    switch (direction) {
        case 'on': {
            if (elem.children[0]) {
                console.log(1);
                return elem.children[0]
            } else if (elem.nextElementSibling) {
                console.log(2);
                return elem.nextElementSibling
            } else if (elem.parentElement.nextElementSibling) {
                console.log(3);
                return elem.parentElement.nextElementSibling
            } else if (elem.parentElement) {
                console.log(4);
                return elem.parentElement
            }
            console.log(5);
            return elem
        }
            break;
        case 'back': {
            if (elem.previousElementSibling) {
                console.log(1);
                return elem.previousElementSibling
            } else if (elem.children[0]) {
                console.log(2);
                return elem.lastElementChild
            } else if (elem.parentElement) {
                console.log(4);
                return elem.parentElement
            } else if (elem.parentElement.previoustElementSibling) {
                console.log(3);
                return elem.parentElement.previousElementSibling
            }
            console.log(5);
            return elem
        }
            break
    }
}


const overdoz = (firstElem = document.forms.checkForm) => {
    let elem = firstElem;
    elem.classList.add('my-active');
    let container = document.createElement('div');
    container.classList.add('d-flex', 'justify-content-center');
    let toWard = document.createElement('button');
    let backWard = document.createElement('button');
    toWard.innerText = ' Вперед ';
    backWard.innerText = ' Назад ';
    document.body.appendChild(container);
    container.appendChild(toWard);
    container.appendChild(backWard);

    toWard.onclick = function (e) {
        elem = setStyles(elem, 'on');
        console.log(elem);
        elem.classList.add('my-active');
    }
    backWard.onclick = function (e) {
        elem = setStyles(elem, 'back');
        console.log(elem);
        elem.classList.add('my-active');
    }
}

overdoz();

/*- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

 Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
 *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
*/

let prevBtn = document.getElementById('btn-prev');
let nextBtn = document.getElementById('btn-next');
let imgArr = document.getElementsByTagName('img');
let curItem = 0;
for (let i = 1; i < imgArr.length; i++) {
    imgArr[i].classList.add('opacity')
}
nextBtn.onclick = function () {
    if (curItem === (imgArr.length - 1)) {
        imgArr[curItem].classList.add('opacity');
        curItem = 0;
        imgArr[curItem].classList.remove('opacity');
    } else {
        imgArr[curItem].classList.add('opacity');
        imgArr[curItem+1].classList.remove('opacity');
        curItem++
    }
}
prevBtn.onclick = function () {
    if (curItem === 0) {
        imgArr[curItem].classList.add('opacity');
        curItem = imgArr.length-1;
        imgArr[imgArr.length-1].classList.remove('opacity');
    } else {
        imgArr[curItem].classList.add('opacity');
        imgArr[curItem-1].classList.remove('opacity');
        curItem--
    }
}

