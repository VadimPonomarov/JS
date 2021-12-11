/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/users
кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        console.log(users);
        let container = document.createElement('div');
        container.classList.add('target', 'd-flex', 'justify-content-center', 'flex-wrap');
        for (let user of users) {
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('card', 'text-center', 'm-2', 'w-50', 'p-2');
            let btn = document.createElement('button');
            btn.setAttribute('type', 'button');
            btn.classList.add('m-2');
            btn.innerText = 'Posts';
            let postsDiv = document.createElement('div');

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
            mainDiv.appendChild(postsDiv);

            container.appendChild(mainDiv)
            btn.onclick = function () {
                if (postsDiv.children[0]) {
                    postsDiv.innerText = '';
                    btn.innerText = 'Posts';
                    return
                }
                btn.innerText = 'Свернуть';
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(responce => responce.json())
                    .then(posts => {
                        for (let post of posts) {
                            let postDiv = document.createElement('div');
                            let postBtn = document.createElement('button');
                            postBtn.innerText = 'Comments';
                            postDiv.classList.add('m-2', 'bg-white', 'text-primary');
                            postBtn.classList.add('m-2');
                            postDiv.style.position = 'relative';
                            postDiv.innerHTML = `
                            <div>id: ${post.id}</div>
                            <div>userId: ${post.userId}</div>
                            <h5>${post.title}</h5>
                            <div>${post.body}</div>
                            `
                            postDiv.appendChild(postBtn);
                            postsDiv.appendChild(postDiv)
                            postBtn.onclick = function (e) {
                                postBtn.disabled = 'disabled';
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(responce => responce.json())
                                    .then(comments => {
                                        let commentsDiv = document.createElement('div');
                                        //commentsDiv.style = `position: fixed; z-index: 1000; left: 50px; top:0; `;
                                        commentsDiv.classList.add('card','text-center')
                                        for (let comment of comments) {
                                            let commentDiv = document.createElement('div');
                                            commentDiv.classList.add('m-2', 'p-2');
                                            commentDiv.style = 'background: pink; color: black';
                                            commentDiv.innerHTML = `
                                            <h5>id: ${comment.id}</h5>
                                            <div>postId: ${comment.postId}</div>
                                            <h5>name: ${comment.name}</h5>
                                            <div>email: ${comment.email}</div>
                                            <h5>${comment.body}</h5>
                                            `
                                            postDiv.appendChild(commentDiv);
                                        }
                                        document.body.appendChild(commentsDiv);
                                        console.log(commentsDiv);
                                    })
                            }
                        }
                    })
            }
        }
        document.body.appendChild(container);
    })