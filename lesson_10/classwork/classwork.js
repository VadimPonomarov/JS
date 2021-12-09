/*1 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*/

document.write('-- 1 --', '<br>');

/*----------*/

let myFormNames = []; //Массив наименований форм, сгенерированных при помощи функции myForm()

/*Функция, генерирующая формы*/

const myForm = (num, inp, labels = []) => {
    document.write(`<br>Form ${num}<br><br>`);
    let form = document.createElement('form');
    form.name = `form${num}`;
    myFormNames.push(form.name); //Записывает имя сгенерированной  формы в массив myFormNames
    for (let i = 1; i <= inp; i++) {
        let input = document.createElement('input');
        let label = document.createElement('label');

        label.style.width = '60%';
        label.setAttribute('for', input.name);
        label.innerText = labels[i - 1] || '';
        label.classList.add('form-label');

        input.style.width = '60%';
        input.setAttribute("name", `input${i}`);
        input.setAttribute("placeholder", `... input - ${i}`);
        input.classList.add('form-control');

        form.appendChild(label);
        form.appendChild(input);
    }
    document.body.appendChild(form);


}

myForm(1, 2); //Создание и вывод на экран формы 1
myForm(2, 2); //Создание и вывод на экран формы 2


/*-----------*/
document.write('<br>');
/*-----------*/

/*Кнопка вывода в консоль данных из Form 1,2*/
let btn = document.createElement('button');
btn.innerHTML = `<p>Инфо из форм в консоль</p>`;
document.body.appendChild(btn);
btn.onclick = function (e) {
    let arr = document.forms;
    for (let i of myFormNames) {
        console.log(i, 'input1 ', arr[i].input1.value);
        console.log(i, 'input2 ', arr[i].input2.value);
    }
}

/*2 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/

document.write('<br><br>', '-- 2 --', '<br>');

let labelsArr = ['Введите количество строк таблицы', 'Введите количество ячеек', 'Введите данные для ячеек таблицы, перечислив их через запятую - var1, var2, ...'];

myForm(3, 3, labelsArr); //Создание и вывод на экран формы 3

/*-----*/
document.write('<br>');
/*-----*/

const makeTable = () => {

    let btn1 = document.createElement('button');
    btn1.innerHTML = `<p>Создать таблицу</p>`;
    document.body.appendChild(btn1);
    /*-----*/
    document.write('<br><br>');
    /*-----*/
    btn1.onclick = function (e) {
        e.preventDefault();
        let rows = document.forms.form3.input1.value || 1;
        let cells = document.forms.form3.input2.value || document.forms.form3.input3.value.split(',').length;
        let col = cells % rows ? Math.floor(cells / rows) + 1 : Math.floor(cells / rows);
        if (!(document.forms.form3.input3.value)) {
            return alert('Необходимо заполнить Input - 3 данными для ячеек будущей таблицы')
        }
        let arr = document.forms.form3.input3.value.split(',');
        console.log(arr);
        let table = document.createElement('table');
        table.classList.add('table');
        //table.classList.add('table-primary');
        table.classList.add('table-striped');
        let tbody = document.createElement('tbody');
        document.body.appendChild(table);
        table.appendChild(tbody);

        let cell = 0;
        for (let i = 1; i <= rows; i++) {
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
            for (let j = 1; j <= col; j++) {
                let td = document.createElement('td');
                td.innerHTML = `${arr[cell] || '-'}`;
                tr.appendChild(td);
                cell++;
            }
        }
    }
}

makeTable();

/*3 - Сворити масив нецензцрних слів.*/


const badWordGenerator = (num) => {
    let badWords = [];
    for (let i = 0; i < num; i++) {
        badWords.push(`badWord-${i}`);
    }
    return badWords
}
let badWordList = badWordGenerator(10);
console.log('-- 3 --');
console.log(' Массив badWords ', badWordList);

/*3.1 Сворити інпут текстового типу.
Якщо людина вводить слово і воно міститься в масиві нецензурних слів
кинути алерт з попередженням.
Перевірку робити при натисканні на кнопку*/

document.write('-- 3.1 --', '<br>');

myForm(4, 1, ['Введите текст без badWords-...']);


/*-----*/
document.write('<br>');
/*-----*/

let btn4 = document.createElement('button');
btn4.innerText = `Проверить на наличие badWords-#`;
document.body.appendChild(btn4);
btn4.onclick = function (e) {
    e.preventDefault();
    let buffer = document.forms.form4.input1.value.split(' ');
    for (let i of buffer) {
        badWordList.find(j => j === i ? alert(`Нецензурное слово: ${i}`) : false)
    }
}

