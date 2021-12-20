/*На странице post-details.html:
7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)*/

document.addEventListener('DOMContentLoaded', function () {

    let backWard = document.createElement('a');
    backWard.setAttribute('href', 'http://localhost:63342/JS/mini_project/user_details.html');
    backWard.innerText = 'Вернуться';
    backWard.classList.add('btn', 'button', 'border', 'm-2', 'btn-sm');
    document.body.appendChild(backWard);

    let post = JSON.parse(localStorage.getItem('currentPost'));
    let container = document.createElement('div');
    container.classList.add('text-center');

    let postDiv = document.createElement('div');
    postDiv.classList.add('card');
    let postBtn = document.createElement('button');
    let commentsDiv = document.createElement('div');
    commentsDiv.classList.add('comments', 'd-flex', 'flex-wrap', 'justify-content-between');

    postBtn.innerText = 'Comments';
    postDiv.classList.add('m-2', 'bg-white', 'text-primary');
    postBtn.classList.add('m-2');
    postDiv.innerHTML = `
                            <div>id: ${post.id}</div>
                            <div>userId: ${post.userId}</div>
                            <h5>${post.title}</h5>
                            <div>${post.body}</div>
                            `
    postDiv.appendChild(postBtn);
    postDiv.appendChild(commentsDiv);

    postBtn.onclick = function (e) {

        if (commentsDiv.children[0]) {
            commentsDiv.innerHTML = '';
            return
        }
        ;

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(responce => responce.json())
            .then(comments => {

                for (let comment of comments) {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('p-2', 'col-3', 'card', 'mb-1');
                    commentDiv.style = 'background: pink; color: black; width: 24.8%';
                    commentDiv.innerHTML = `
                                            <h5>id: ${comment.id}</h5>
                                            <div>postId: ${comment.postId}</div>
                                            <h5>name: ${comment.name}</h5>
                                            <div>email: ${comment.email}</div>
                                            <h5>${comment.body}</h5>
                                            `
                    commentsDiv.appendChild(commentDiv);
                }
                postDiv.appendChild(commentsDiv);
            })
    }
    container.appendChild(postDiv);
    document.body.appendChild(container);
})