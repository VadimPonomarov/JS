/* Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону template 1.1 */

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (let i of listOfItems) {
    document.write(`<li>${i}</li>`)
}
document.write(`</ul>`);

/*Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
Шаблон застосувати до кожного об'єкта в масиві*/

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

/*<div>
    NAME- SURNAME- AGE- INFO- <img src="PHOTO" alt="">
</div>*/

document.write(`<div>`);
for (let i in simpsons) {
    document.write(`<h2>NAME- ${simpsons[i]['name']}</h2>`);
    document.write(`<h2>SURNAME- ${simpsons[i]['surname']}</h2>`);
    document.write(`<h2>AGE- ${simpsons[i]['age']}</h2>`);
    document.write(`<p>INFO- ${simpsons[i]['info']}</p>`);
    document.write(`<img src="${simpsons[i]['photo']}" alt=""></img>`);
}
document.write(`</div>`);

/*<div>
    <h2>NAME SURNAME. age is - AGE</h2>
    <p>INFO</p>
    <img src="PHOTO" alt="">
</div>*/


document.write(`<div>`);
for (let i in simpsons) {
    document.write(`<h2>`);
    document.write(`<span>${simpsons[i]['name']} </span>`);
    document.write(`<span>${simpsons[i]['surname']} </span>`);
    document.write(`<span>age is - ${simpsons[i]['age']}</span>`);
    document.write(`</h2>`);

    document.write(`<p>${simpsons[i]['info']}</p>`);
    document.write(`<img src="${simpsons[i]['photo']}" alt=""></img>`);
}
document.write(`</div>`);

/*Використовуючи данні з масиву, за допомоги document.write та циклу
        побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
        Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон*/

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

/*<div>
        <div class="product-card">
            <h3 class="product-title">TITLE. Price - PRICE</h3>
            <img src="" alt="" class="product-image">
        </div>
        <!--
                    інші об'єкти з масиву
                    ...
                    ...
                    ...
        -->

    </div>*/


document.write(`<div>`);
for (let i in products) {
    document.write(`<div class="product-card">`);
    document.write(`<h3 class="product-title">
                ${products[i]['title']} 
                Price - ${products[i]['price']}
            </h3>`);
    document.write(`<img src="${products[i]['image']}" alt="" class="product-image"></img>`);
    document.write(`</div>`);

}
document.write(`</div>`);

/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:*/

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

/*1. перебрати його циклом while*/

let i = 0;
while (array[i]) {
    document.write(`<span><strong>${array[i]} </strong></span>`);
    i++;
}
/*2. перебрати його циклом for*/
document.write(`<br>`);
for (let i = 0; array[i]; i++) {
    document.write(`<span><strong>${array[i]} </strong></span>`);
}
/*3. перебрати циклом while та вивести  числа тільки з непарним індексом*/
document.write(`<br>`);
i = 0;
while (array[i]) {
    if (i % 2) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
    ;
    i++;
}
/*4. перебрати циклом for та вивести  числа тільки з непарним індексом*/

document.write(`<br>`);
for (let i = 0; array[i]; i++) {
    if (i % 2) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
}

/*5. перебрати циклом while та вивести  числа тільки парні  значення*/
document.write(`<br>`);
i = 0;
while (array[i]) {
    if (!(i % 2)) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
    ;
    i++;
}
/*6. перебрати циклом for та вивести  числа тільки парні  значення*/
document.write(`<br>`);
for (let i = 0; array[i]; i++) {
    if (!(i % 2)) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
}
/*7. замінити кожне число кратне 3 на слово "okten"*/
document.write(`<br>`);
for (let i = 0; array[i]; i++) {
    if (!(array[i] % 3)) {
        array[i] = 'okten'
    }
}
document.write(`<strong>${array}</strong>`);

/*8. вивести масив в зворотньому порядку.*/
document.write(`<br>`);
for (let i = array.length-1; array[i]; i--) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
}

/*9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

/*9.1. перебрати його циклом while*/
array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
document.write(`<br><br>Всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед<br><br>`);
i = array.length-1;
while (array[i]) {
    document.write(`<span><strong>${array[i]} </strong></span>`);
    i--;
}
/*9.2. перебрати його циклом for*/
document.write(`<br>`);
for (let i = array.length-1; array[i]; i--) {
    document.write(`<span><strong>${array[i]} </strong></span>`);
}
/*9.3. перебрати циклом while та вивести  числа тільки з непарним індексом*/
document.write(`<br>`);
i = array.length-1;
while (array[i]) {
    if (i % 2) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
    ;
    i--;
}
/*9.4. перебрати циклом for та вивести  числа тільки з непарним індексом*/

document.write(`<br>`);
for (let i = array.length-1; array[i]; i--) {
    if (i % 2) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
}

/*9.5. перебрати циклом while та вивести  числа тільки парні  значення*/
document.write(`<br>`);
i = array.length-1;
while (array[i]) {
    if (!(i % 2)) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
    ;
    i--;
}
/*9.6. перебрати циклом for та вивести  числа тільки парні  значення*/
document.write(`<br>`);
for (let i = array.length-1; array[i]; i--) {
    if (!(i % 2)) {
        document.write(`<span><strong>${array[i]} </strong></span>`);
    }
}
/*9.7. замінити кожне число кратне 3 на слово "okten"*/
document.write(`<br>`);
for (let i = array.length-1; array[i]; i--) {
    if (!(array[i] % 3)) {
        array[i] = 'okten'
    }
}
document.write(`<strong>${array}</strong>`);