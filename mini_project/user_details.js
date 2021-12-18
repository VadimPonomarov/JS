/*На странице user-details.html:
4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.*/

document.addEventListener('DOMContentLoaded', function () {

    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('card', 'text-center', 'p-2', 'ml-auto', 'bg-primary');
        mainDiv.style.width = '90%';
        mainDiv.style.margin = '20px auto';

        let postsDiv = document.createElement('div');
        postsDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-between');

        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add('m-2');
        btn.innerText = 'Posts';

        let idDiv = document.createElement('div');
        idDiv.innerText = `id: ${user.id}`;

        let userNameDiv = document.createElement('div');
        userNameDiv.innerText = `User name: ${user.username}`;

        let nameDiv = document.createElement('div');
        nameDiv.innerHTML = `<h3>Name: ${user.name}</h3>`;

        let emailDiv = document.createElement('div');
        emailDiv.innerText = `Email: ${user.email}`;

        let webSiteDiv = document.createElement('div');
        webSiteDiv.innerText = `Website: ${user.website}`;

        let phoneDiv = document.createElement('div');
        phoneDiv.innerText = `Phone: ${user.phone}`;

        let companyDiv = document.createElement('div');
        companyDiv.innerHTML = `<h3>Company:</h3>`;

        let companyNameDiv = document.createElement('div');
        companyNameDiv.innerText = `Name: ${user.company.name}`;

        let companyCatchPhraseDiv = document.createElement('div');
        companyCatchPhraseDiv.innerText = `Catch phrase: ${user.company.catchphrase}`;

        let companyBsDiv = document.createElement('div');
        companyBsDiv.innerText = `Bs: ${user.company.bs}`;
        companyDiv.appendChild(companyNameDiv);
        companyDiv.appendChild(companyCatchPhraseDiv);
        companyDiv.appendChild(companyBsDiv);

        let addressDiv = document.createElement('div');
        addressDiv.innerHTML = `<h3>Address:</h3>`;

        let addressCityDiv = document.createElement('div');
        addressCityDiv.innerText = `City: ${user.address.city}`;

        let addressGeoDiv = document.createElement('div');
        addressGeoDiv.innerText = `Geo:`;

        let addressGeoLatDiv = document.createElement('div');
        addressGeoLatDiv.innerText = `Lat: ${user.address.geo.lat}`;

        let addressGeoLngDiv = document.createElement('div');
        addressGeoLngDiv.innerText = `Lng: ${user.address.geo.lat}`;

        let addressStreetDiv = document.createElement('div');
        addressStreetDiv.innerText = `Street: ${user.address.street}`;

        let addressSuiteDiv = document.createElement('div');
        addressSuiteDiv.innerText = `Suite: ${user.address.suite}`;

        let addressZipCodeDiv = document.createElement('div');
        addressZipCodeDiv.innerText = `Zip code: ${user.address.zipcode}`;
        addressDiv.appendChild(addressCityDiv);
        addressDiv.appendChild(addressGeoDiv);
        addressGeoDiv.appendChild(addressGeoLatDiv);
        addressGeoDiv.appendChild(addressGeoLngDiv);
        addressDiv.appendChild(addressStreetDiv);
        addressDiv.appendChild(addressSuiteDiv);
        addressDiv.appendChild(addressZipCodeDiv);

        mainDiv.appendChild(idDiv);
        mainDiv.appendChild(userNameDiv);
        mainDiv.appendChild(nameDiv);
        mainDiv.appendChild(emailDiv);
        mainDiv.appendChild(webSiteDiv);
        mainDiv.appendChild(phoneDiv);
        mainDiv.appendChild(companyDiv);
        mainDiv.appendChild(addressDiv);
        mainDiv.appendChild(btn);

        btn.onclick = function () {
            if (postsDiv.children[0]) {
                postsDiv.innerText = '';
                btn.innerText = 'Posts';
                return
            }
            btn.innerText = 'Roll Up';
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(responce => responce.json())
                .then(posts => {
                    for (let post of posts) {
                        let postItem = document.createElement('div');
                        postItem.classList.add('card', 'justify-content-between');
                        postItem.style.width = '18%';
                        postItem.style.position = 'relative';
                        postItem.innerHTML = `
                            <div>${post.title}</div>
                            `

                        let postBtn = document.createElement('button');
                        postBtn.classList.add('btn', 'btn-primary', 'p-2', 'm-1');
                        postBtn.innerText = 'More info ...';
                        postBtn.onclick = function () {
                            localStorage.setItem('currentPost', JSON.stringify(post));
                            window.open('http://localhost:63342/JS/mini_project/post_details.html','_blank');
                        }


                        postsDiv.appendChild(postItem);
                        postItem.appendChild(postBtn);
                    }
                })
        }
        mainDiv.appendChild(postsDiv);
        document.body.appendChild(mainDiv);
    }

})


