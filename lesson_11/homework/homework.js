/*1 -створити форму з інпутами для name та age.
При відправці форми записати об'єкт в localstorage*/

/*Функция - генератор форм*/

const myForm = (num, inp, labels = []) => {
    let arr = [];
    document.write(`Form ${num}`);
    let form = document.createElement('form');
    form.id = `form${num}`;
    form.classList.add('w-50', 'd-flex', 'flex-column', 'align-items-center', 'border');
    let button = document.createElement('button');
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

    button.setAttribute('type', 'submit');
    button.innerText = 'Submit';
    form.lastChild.after(button);
    form.onsubmit = function (e) {
        e.preventDefault();
        let targetArr = form.getElementsByTagName('input');
        let arr = [];
        for (let i of targetArr) {
            arr.push({name: i.name, value: i.value})
        }
        localStorage.setItem(form.id, JSON.stringify(arr))
    }

    document.body.appendChild(form);

}

myForm(1, 2, ['Name', 'Age']); //Создание и вывод на экран формы 1

/*-створити форму з інпутами для model,type та volume автівки.
при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/

myForm(2, 3, ['Model', 'Type', 'Volume']); //Создание и вывод на экран формы 2
