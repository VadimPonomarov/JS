/*1 -створити форму з інпутами для name та age.
При відправці форми записати об'єкт в localstorage*/

/*Функция - генератор форм*/

const myForm = (id, names) => {
    let inpNum = names.length;
    let form = document.createElement('form');
    form.setAttribute('id', `form${id}`);
    form.classList.add('w-50', 'd-flex', 'flex-column', 'align-items-center', 'border');
    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerText = 'Submit';
    for (let i = 0; i < inpNum; i++) {
        let input = document.createElement('input');
        input.setAttribute("name", names[i]);
        input.setAttribute("placeholder", `Введите ${names[i]}` );
        input.classList.add('form-control', 'w-60');
        form.appendChild(input);
    }

    form.lastChild.after(button);
    return form;
}
document.write(`--Form1--`,'<br>');

let form1 = myForm(1, ['name', 'age']);
form1.onsubmit = function (e) {
    e.preventDefault();
    let name = document.forms.form1.name.value;
    let age = document.forms.form1.age.value;
    let storageObj = JSON.stringify({name, age});
    localStorage.setItem('form1', storageObj)
}
document.body.appendChild(form1);



/*2 -створити форму з інпутами для model,type та volume автівки.
при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/

document.write('<br>', `--Form2--`,'<br>');

let form2 = myForm(2, ['model', 'type', 'volume']);
form2.onsubmit = function (e) {
    e.preventDefault();
    let model = document.forms.form2.model.value;
    let type = document.forms.form2.type.value;
    let volume = document.forms.form2.volume.value;
    let storageObj = {model, type, volume};
    let arr = new Array().push(storageObj);
    localStorage.setItem('form2', JSON.stringify(storageObj));
}
document.body.appendChild(form2);