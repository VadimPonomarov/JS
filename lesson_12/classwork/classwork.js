/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => responce.json())
    .then(posts => {
        console.log(posts);
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-center');
        for (let post of posts) {
            let postContainer = document.createElement('div');
            let btn = document.createElement('button');
            let commentsDiv = document.createElement('div');
            btn.setAttribute('type', 'button');
            btn.innerText = `Вывести Comments`;
            btn.classList.add('btn', 'm-1', 'btn-primary');
            btn.onclick = function (e) {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(responce => responce.json())
                    .then(comments => {
                        if (commentsDiv.children[0]) {
                            commentsDiv.innerText = '';
                            btn.classList.add('btn-primary');
                            btn.classList.remove('btn-success');

                            btn.innerText = `Вывести Comments`;
                            return
                        }
                        btn.classList.add('btn-primary');
                        let mainDiv = document.createElement('div');
                        mainDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-center');
                        for (let comment of comments) {
                            let postContainer = document.createElement('div');
                            postContainer.classList.add('card', 'text-center', 'p-2', 'm-1');
                            postContainer.style='background: #e7dcdc';
                            postContainer.innerHTML = `
                                    <div>postId: ${comment.postId}</div>
                                    <div>commentId: ${comment.id}</div>
                                    <div>Name: ${comment.name}</div>
                                    <div>Email: ${comment.email}</div>
                                    <div>Body: ${comment.body}</div>
                                    `
                            btn.classList.remove('btn-primary');
                            btn.classList.add('btn-success');
                            btn.innerText = 'Скрыть Comments';

                            mainDiv.appendChild(postContainer)
                        }
                        commentsDiv.appendChild(mainDiv)
                    })
            }
            postContainer.classList.add('card', 'text-center', 'p-2', 'm-1');
            postContainer.style.width = '50%';
            postContainer.innerHTML = `
            <div>Id: ${post.id}</div>
            <div>userId: ${post.userId}</div>
            <h5>${post.title}</h5>
            <div>${post.body}</div>
            `
            postContainer.appendChild(btn);
            postContainer.appendChild(commentsDiv);
            mainDiv.appendChild(postContainer)
        }
        document.body.appendChild(mainDiv)
    })