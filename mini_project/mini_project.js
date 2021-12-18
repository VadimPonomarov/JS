/*1.
В index.html
1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        let container = document.createElement('div');
        container.classList.add('d-flex', 'flex-wrap', 'justify-content-center');
        for (let user of users) {
            let userDiv = document.createElement('div');
            let btn = document.createElement('button');
            btn.setAttribute('type', 'button');
            btn.innerText = `Больше инфо ...`;
            btn.classList.add('btn', 'm-1', 'btn-primary', 'col-6');
            btn.onclick = function (e, location1 = location) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.open('http://localhost:63342/JS/mini_project/user_details.html?target=_blank', '_blank')
            }
            userDiv.classList.add('card', 'p-2', 'm-1', 'align-items-center', 'col-5');
            userDiv.innerHTML = `
            <div>Id: ${user.id}</div>
            <div style="font-weight: bold">${user.name}</div>
            `
            userDiv.appendChild(btn);
            container.appendChild(userDiv);
        }
        document.body.appendChild(container);
    })