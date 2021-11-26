/*1 - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}*/

/*Инициализация объекта - прототипа*/

let myObj = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}

/*Функция initFlatenList() приводит структуру любого обьекта к плоскому виду.*/

const initFlatenList = (obj) => {
    let arr = [];
    let buffer = '';
    const flatten = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] !== 'object') {
                arr.push(buffer.concat(key));
            } else {
                arr.push('.'.concat(key));
                buffer = key + '_';
                flatten(obj[key]);
                buffer = '';
            }
        }
        return arr
    }
    console.log(flatten(obj));
}

/*Подготовка и вывод в консоль списка полей для конструктора класса UserCard*/

initFlatenList(myObj);

/*--*/

/*Реализация класса UserCard*/
class UserCard {

    constructor(id = 'id', name = 'name', username = 'username', email = 'email', address = new Address(), geo = new Geo(), phone = 'phone', website = 'website', company = new Company()) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.address.street = address.street;
        this.address.suite = address.suite;
        this.address.city = address.city;
        this.address.zipcode = address.zipcode;
        this.geo = geo;
        this.geo.lat = geo.lat;
        this.geo.lng = geo.lng;
        this.phone = phone;
        this.website = website;
        this.company = company;
        this.company.name = company.name;
        this.company.catchPhrase = company.catchPhrase;
        this.company.bs = company.bs;
    }
}

/*Реализация класса Address*/
class Address {

    constructor(street = 'street', suite = 'suite', city = 'city', zipcode, geo = new Geo()) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

/*Реализация класса Geo*/
class Geo {

    constructor(lat = 'lat', lng = 'lng') {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {

    constructor(name = 'name', catchPhrase = 'catchPhrase', bs = 'bs') {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

/*Пример создания вывод в консоль экземпляра объекта UserCard*/
console.log(new UserCard());

/*2 -  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
 -назва тегу ()
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 */

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(name = 'name', action = 'action', attributeArr = []) {
        this.name = name;
        this.action = action;
        this.attributeArr = attributeArr;
    }

}

class TagAttribute {

    constructor(name = 'name', action = 'action') {
        this.name = name;
        this.action = action;
    }
}


let aAtt = [
    new TagAttribute('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
    new TagAttribute('coords', 'Устанавливает координаты активной области.'),
    new TagAttribute('download', 'Предлагает скачать указанный по ссылке файл.')
]

let divAtt = [
    new TagAttribute('align', 'Задает выравнивание содержимого тега'),
    new TagAttribute('title', 'Добавляет всплывающую подсказку к содержимому.'),
]

let h1Att = [
    new TagAttribute('align\n', 'Определяет выравнивание заголовка.'),
]

let spanAtt = [
    new TagAttribute('title', 'Описывает содержимое элемента в виде всплывающей подсказки.'),
    new TagAttribute('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'),
    new TagAttribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
]

let inputAtt = [
    new TagAttribute('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'),
    new TagAttribute('accesskey', 'Переход к элементу с помощью комбинации клавиш.'),
    new TagAttribute('align', 'Определяет выравнивание изображения.')
]

let formAtt = [
    new TagAttribute('action', 'Адрес программы или документа, который обрабатывает данные формы.'),
    new TagAttribute('autocomplete', 'Включает автозаполнение полей формы.'),
    new TagAttribute('method', 'Метод протокола HTTP.')
]

let optionAtt = [
    new TagAttribute('disabled', 'Заблокировать для доступа элемент списка.'),
    new TagAttribute('label', 'Указание метки пункта списка.'),
    new TagAttribute('selected', 'Заранее устанавливает определенный пункт списка выделенным.')
]

let selectAtt = [
    new TagAttribute('autofocus', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'),
    new TagAttribute('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.'),
    new TagAttribute('disabled', 'Блокирует доступ и изменение элемента.')
]

let aTag = new Tag('<a>', 'Педназначен для создания ссылок', aAtt);
let divTag = new Tag('<div>', 'Педназначен для создания блоков', divAtt);
let h1Tag = new Tag('<h1>', 'Педназначен для создания заголовков H1', h1Att);
let spanTag = new Tag('<span>', 'Предназначен для определения строчных элементов документа', spanAtt);
let inputTag = new Tag('<input>', 'Предназначен для ввода данных', inputAtt);
let formTag = new Tag('<form>', 'Устанавливает форму на веб-странице', formAtt);
let optionTag = new Tag('<option>', ' определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', optionAtt);
let selectTag = new Tag('<select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка', selectAtt);

console.log(aTag);
console.log(divTag);
console.log(h1Tag);
console.log(inputTag);
console.log(formTag);
console.log(optionTag);
console.log(selectTag);










