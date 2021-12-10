/*Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.*/

document.addEventListener("DOMContentLoaded", function () {
    let users = localStorage.getItem('myFormArr');
    users = JSON.parse(users);
    const makeUserDiv = (obj) => {
        let myDiv = document.createElement('div');
        myDiv.classList.add('card', 'w-50', 'd-flex', 'align-items-center');
        myDiv.style.margin = '5px auto';
        for (let key in obj) {
            let subDiv$key = document.createElement('div');
            subDiv$key.innerText = `${key}: ${obj[key]}`;
            myDiv.appendChild(subDiv$key);
        }
        return myDiv
    }

    const transformArr = (arr) => {
        for (let i of arr) {
            let item = makeUserDiv(i);
            document.body.appendChild(item);
        }
    }

    transformArr(users, 'myFormArr');
});



