document.addEventListener("DOMContentLoaded", function () {
        myGoodsArr = JSON.parse(localStorage.getItem('myGoodsArr')) || [];
        let container = document.createElement('div');
        container.classList.add('container', 'd-flex', 'justify-content-center');
        let clearAll = document.createElement('button');
        clearAll.innerText = 'Очистить все хранилище';
        clearAll.onclick = function () {
            localStorage.removeItem(`myCartArr`);
            localStorage.removeItem(`myGoodsArr`);
        };
        document.body.appendChild(clearAll);


        for (let i = 0; i < myGoodsArr.length; i++) {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('card', 'col-4', 'align-items-center');
            itemDiv.innerHTML = `
        <div>name: ${myGoodsArr[i].name}</div>
        <div>quantity: ${myGoodsArr[i].quantity}</div>
        <div>price: ${myGoodsArr[i].price}</div>
        <div><img style="margin:4px; max-width: 300px; height: auto"  src="${myGoodsArr[i].img}"></div>
        `
            let cartDiv = document.createElement('div');
            itemDiv.firstChild.before(cartDiv);
            let cartIn = document.createElement('button');
            cartIn.innerText = 'В корзину';
            cartDiv.appendChild(cartIn);
            let cartOut = document.createElement('button');
            cartOut.innerText = 'Из корзины';
            cartDiv.appendChild(cartOut);

            let name = myGoodsArr[i].name;
            let quantity = myGoodsArr[i].quantity;
            let price = myGoodsArr[i].price;
            let img = myGoodsArr[i].img;

            cartIn.onclick = function () {
                let myCartArr;
                myCartArr = JSON.parse(localStorage.getItem('myCartArr')) || [];
                let currentItem = {name, quantity, price, img};
                myCartArr.push(currentItem);
                localStorage.setItem('myCartArr', JSON.stringify(myCartArr));
            }

            cartOut.onclick = function () {
                let myCartArr;
                myCartArr = JSON.parse(localStorage.getItem('myCartArr')) || [];
                let currentItem = {name, quantity, price, img};
                for (let i = 0; i < myCartArr.length; i++) {
                    if (JSON.stringify(myCartArr[i]) === JSON.stringify(currentItem)) {
                        myCartArr.splice(i, 1);
                        break;
                    }
                }
                localStorage.setItem('myCartArr', JSON.stringify(myCartArr));
            }
            let btn = document.createElement('button');
            btn.innerText = 'Удалить из списка товаров';

            container.appendChild(itemDiv);
            itemDiv.appendChild(btn);
            btn.onclick = function (e) {
                myGoodsArr.splice(i, 1);
                localStorage.setItem('myGoodsArr', JSON.stringify(myGoodsArr));
                location.reload();
            }
        }
        document.body.appendChild(container);
    }
)