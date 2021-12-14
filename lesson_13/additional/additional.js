/*- Імітуємо наповнення інтернет магазину товарами :
Створити форму з наступними полями :
- назва товару
- кількість товару
- ціна товару
- картинка товару (посилання з інтернету)
Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
*/


let myForm = document.createElement('form');
myForm.setAttribute('name', 'myForm');
myForm.classList.add('container', 'w-50', 'card', 'align-items-center')
let listGoodsRef = document.createElement('a');
listGoodsRef.setAttribute('href', 'list.html');
listGoodsRef.setAttribute('target', '_blank');
listGoodsRef.innerText = 'К списку товаров';
myForm.appendChild(listGoodsRef);


let divName = document.createElement('div');
let labelName = document.createElement('label');
labelName.classList.add('form-label');
labelName.setAttribute('for', 'name');
labelName.innerText = 'Название товара';
let inputName = document.createElement('input');
inputName.setAttribute('name', 'name');
inputName.setAttribute('required', 'true');
inputName.setAttribute('type', 'text');
inputName.classList.add('form-control');

let divQuantity = document.createElement('div');
let labelQantity = document.createElement('label');
labelQantity.classList.add('form-label');
labelQantity.setAttribute('for', 'quantity');
labelQantity.innerText = 'Количество';
let inputQuantity = document.createElement('input');
inputQuantity.setAttribute('name', 'quantity');
inputQuantity.setAttribute('type', 'number');
inputQuantity.setAttribute('required', 'true');
inputQuantity.classList.add('form-control');


let divPrice = document.createElement('div');
let labelPrice = document.createElement('label');
labelPrice.classList.add('form-label');
labelPrice.setAttribute('for', 'price');
labelPrice.innerText = 'Цена';
let inputPrice = document.createElement('input');
inputPrice.setAttribute('name', 'price');
inputPrice.setAttribute('type', 'number');
inputPrice.setAttribute('required', 'true');
inputPrice.setAttribute('required', 'true');
inputPrice.classList.add('form-control');

let divInputImg = document.createElement('div');
let labelImg = document.createElement('label');
labelImg.classList.add('form-label');
labelImg.setAttribute('for', 'image');
labelImg.innerText = 'Адрес картинки товара в интернет';
let inputImg = document.createElement('input');
inputImg.setAttribute('name', 'imageSrc');
inputImg.setAttribute('type', 'text');
inputImg.classList.add('form-control');


let divImgOutput = document.createElement('img');
divImgOutput.setAttribute('src', inputImg.value.trim());
divImgOutput.classList.add('m-2');
divImgOutput.style.maxWidth = '300px';
divImgOutput.style.height = 'auto';

let submitButtonDiv = document.createElement('div');
let submitButton = document.createElement('button');
submitButton.setAttribute('name', 'submitButton');
submitButton.setAttribute('type', 'submit');
submitButton.classList.add('btn', 'btn-primary', 'm-2');
submitButton.innerText = 'Добавить в список товаров';

inputImg.onfocus = function (e) {
    this.select()
}

inputImg.onblur = function (e) {
    divImgOutput.setAttribute('src', inputImg.value.trim())
}

myForm.onsubmit = function (e) {
    e.preventDefault();
    let myGoodsArr;
    myGoodsArr = JSON.parse(localStorage.getItem('myGoodsArr')) || [];
    let name = inputName.value;
    let quantity = inputQuantity.value;
    let price = inputPrice.value;
    let img = inputImg.value;
    let currentItem = {name, quantity, price, img};
    myGoodsArr.push(currentItem);
    localStorage.setItem('myGoodsArr', JSON.stringify(myGoodsArr));
}

document.body.appendChild(myForm);

myForm.appendChild(divName);
divName.appendChild(labelName);
divName.appendChild(inputName);

myForm.appendChild(divQuantity);
divName.appendChild(labelQantity);
divName.appendChild(inputQuantity);

myForm.appendChild(divPrice);
divName.appendChild(labelPrice);
divName.appendChild(inputPrice);

myForm.appendChild(divImgOutput);

myForm.appendChild(submitButtonDiv);
submitButtonDiv.appendChild(submitButton);

myForm.appendChild(divInputImg);
divName.appendChild(labelImg);
divName.appendChild(inputImg);

