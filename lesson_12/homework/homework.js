/* 1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => responce.json())
    .then(posts => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('d-flex', 'flex-wrap');
        for (let post of posts) {
            let postContainer = document.createElement('div');
            postContainer.classList.add('card', 'text-center', 'p-2', 'm-1');
            postContainer.style.width = '19%';
            postContainer.innerHTML = `
            <div>Id: ${post.id}</div>
            <div>userId: ${post.userId}</div>
            <h5>${post.title}</h5>
            <div>${post.body}</div>
            `
            mainDiv.appendChild(postContainer)
        }
        document.body.appendChild(mainDiv)
    })

/*2. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments*/

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(responce => responce.json())
    .then(comments => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-center');
        for (let comment of comments) {
            let postContainer = document.createElement('div');
            postContainer.classList.add('card', 'text-center', 'p-2', 'm-1', 'w-50');
            postContainer.innerHTML = `
            <div>postId: ${comment.postId}</div>
            <div>commentId: ${comment.id}</div>
            <div>Name: ${comment.name}</div>
            <div>Email: ${comment.email}</div>
            <div>Body: ${comment.body}</div>
            `
            mainDiv.appendChild(postContainer)
        }
        document.body.appendChild(mainDiv)
    })