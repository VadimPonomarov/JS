/*є масив -*/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

/*2 - Cтворити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
*/


let favDiv = document.createElement('div');
let favLink = document.createElement('a');
favLink.setAttribute('href', './favorites.html');
favLink.setAttribute('target', '_blank');
favLink.innerText = 'Favorites page';
favDiv.appendChild(favLink);
document.body.appendChild(favDiv);

const makeUserDiv = (obj, storId) => {
    let myDiv = document.createElement('div');
    myDiv.classList.add('card', 'w-50', 'd-flex', 'align-items-center');
    myDiv.style.margin = '5px auto';
    for (let key in obj) {
        let subDiv$key = document.createElement('div');
        subDiv$key.innerText = `${key}: ${obj[key]}`;
        myDiv.appendChild(subDiv$key);
    }
    let btn = document.createElement('button');
    btn.innerText = 'Add to favorites';
    btn.onclick = function (e) {
        let storArr = [];
        if (!(localStorage.getItem(storId))) {
            storArr.push(obj);
            localStorage.setItem(storId, JSON.stringify(storArr));
        } else {
            storArr = JSON.parse(localStorage.getItem(storId));
            storArr.push(obj);
            localStorage.setItem(storId, JSON.stringify(storArr));
        }
        btn.disabled = 'disabled';
    }
    myDiv.appendChild(btn);
    return myDiv
}

const transformArr = (arr, storId) => {
    for (let i in arr) {
        let item = makeUserDiv(users[i], storId);
        document.body.appendChild(item);
    }
}

transformArr(users, 'myFormArr');
