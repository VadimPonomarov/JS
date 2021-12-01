let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

/*1 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.*/

let addrArr = [];
for (let user of users) {
    addrArr.push(user.address)
}
console.log(addrArr);

/*2 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.*/


for (let user of users) {
    let div = document.createElement('div');
    div.classList.add('container');
    let userList = '';
    userList += `<div>
Name: ${user.name}<br>
Age: ${user.age}<br>
Status: ${user.status}<br>
Address:<br>
    city: ${user.address.city}<br>
    country: ${user.address.country}<br>
    street: ${user.address.street}<br>
</div>`
    div.innerHTML = userList;
    document.body.appendChild(div);
}

/*3 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)*/

for (let user of users) {

    let div = document.createElement('div');
    div.classList.add('container');
    let userList = '';
    userList += `<div>
<div>Name: ${user.name}</div>
<div>Age: ${user.age}</div>
<div>Status: ${user.status}</div>
<div style="background: lightgrey;">
Address:
    city: ${user.address.city}<br>
    country: ${user.address.country}<br>
    street: ${user.address.street}<br>
</div>`
    div.innerHTML = userList;
    document.body.appendChild(div);
}

/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості*/

for (let user of users) {

    let div = document.createElement('div');
    div.classList.add('container');
    let userList = '';
    userList += `<div>
<div>Name: ${user.name}</div>
<div>Age: ${user.age}</div>
<div>Status: ${user.status}</div>
<div style="background: lightgrey;">
Address:
    <div>city: ${user.address.city}</div>
    <div>country: ${user.address.country}</div>
    <div>street: ${user.address.street}</div>
</div>`
    div.innerHTML = userList;
    document.body.appendChild(div);
}