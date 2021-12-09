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

const makeUserDiv = (obj, id, storId) => {
    let myDiv = document.createElement('div');
    let myid = document.createElement('div');
    myid.setAttribute('id', 'id');
    myDiv.classList.add('card', 'w-50', 'd-flex', 'align-items-center');
    myDiv.style.margin = '5px auto';
    myDiv.appendChild(myid);
    myid.innerText = `id: ${id}`;
    for (let i in obj) {
        let subDiv$i = document.createElement('div');
        subDiv$i.innerText = `${i}: ${obj[i]}`;
        subDiv$i.setAttribute(i, i);
        myDiv.appendChild(subDiv$i);
    }
    let btn = document.createElement('button');
    btn.innerText = 'Add to favorits';
    btn.onclick = function (e) {
        let id = this.parentElement.querySelector('div[id="id"]').innerText.split(': ')[1];
        let name = this.parentElement.querySelector('div[name="name"]').innerText.split(': ')[1];
        let age = this.parentElement.querySelector('[age="age"]').innerText.split(': ')[1];
        let status = this.parentElement.querySelector('div[status="status"]').innerText.split(': ')[1];
        let storageObj = {id, name, age, status};
        let storageArr = [];
        if (!(localStorage.getItem(storId))) {
            storageArr.push(storageObj);
            localStorage.setItem(storId, JSON.stringify(storageArr));
        } else {
            storageArr = JSON.parse(localStorage.getItem(storId));
            storageArr.push(storageObj);
            localStorage.setItem(storId, JSON.stringify(storageArr));
        }
        btn.disabled = 'disabled';
    }
    myDiv.appendChild(btn);
    return myDiv
}

const transformArr = (arr, storId) => {
    for (let i in arr) {
        let item = makeUserDiv(users[i], i, storId);
        document.body.appendChild(item);
    }
}

transformArr(users, 'myFormArr');

