/*- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
    --1 отримує текст з параграфа з id "content"
    --2 отримує текст з блоку з id "rules"
    --2 замініть текст параграфа з id 'content' на будь-який інший
    --4 замініть текст параграфа з id 'rules' на будь-який інший
    --5 змініть кожному елементу колір фону на червоний
    --6 змініть кожному елементу колір тексту на синій
    --7 отримати весь список класів елемента з id=rules і вивести їх в console.log
    --8 поміняти колір тексту у всіх елементів fc_rules на червоний


*/
console.log('--1--');
console.log(document.getElementById('content').innerText);
console.log('--2--');
console.log(document.getElementById('rules').innerText);
console.log('--3--');
console.log(document.getElementById('content').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque hic, molestiae mollitia nostrum placeat repellat tenetur unde vel veniam vero. Ab animi corporis dolorem error, molestias quo sed soluta vitae.');
console.log('--4--');
console.log(document.getElementById('rules').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus deleniti tenetur. Beatae dicta impedit libero molestias nostrum provident sapiente. Aliquam cumque expedita harum hic maxime odit soluta ullam ut!');

'--5, 6--';
let elements = document.getElementsByTagName('body')[0].getElementsByTagName('*');
for (let element of elements) {
    element.style = 'background-color:red; color: blue'
}

/*--7--*/;
console.log('--7--')
console.log(document.getElementById('rules').className);

/*--8--*/;

elements = document.getElementsByClassName('fc_rules');
for (let element of elements) {
    element.style = 'background-color:white; color: red'
}

