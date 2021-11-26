/*1 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function fCar(model, manufacture, year, speed, engine) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.speed = speed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speed} на годину`)
    }

    this.info = function () {
        console.log(
            `model = ${this.model};`,
            `manufacture = ${this.manufacture};`,
            `year = ${this.year};`,
            `speed = ${this.speed};`,
            `engine = ${this.engine};`,
        )
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

/*Пример*/
console.log('--function fCar--');
let fcar = new fCar('Toyota Corolla', 'Toyota', '2021', 0, '1700 см3');
console.log('--info()--');
fcar.info();
console.log('--increaseMaxSpeed(30)--');
fcar.info(fcar.increaseMaxSpeed(30));
console.log('--changeYear(\'1919\')--');
fcar.info(fcar.changeYear('1919'));
console.log('--addDriver({name: \'name\', surname: \'surname\', lastName: \'last name\'})--');
fcar.addDriver({name: 'name', surname: 'surname', lastName: 'last name'});
console.log('--Driver--', fcar.driver);

/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/

class Car {
    constructor(model, manufacture, year, speed, engine) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${speed} на годину`)
    }

    info() {
        console.log(
            `model = ${this.model};`,
            `manufacture = ${this.manufacture};`,
            `year = ${this.year};`,
            `speed = ${this.speed};`,
            `engine = ${this.engine};`)
    }

    increaseMaxSpeed(newSpeed) {
        this.speed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver;
    }

}

/*Пример*/

/*Пример*/
console.log('--class Car--');
let car = new Car('Toyota Corolla', 'Toyota', '2021', 0, '1700 см3');
console.log('--info()--');
car.info();
console.log('--increaseMaxSpeed(30)--');
car.info(car.increaseMaxSpeed(30));
console.log('--changeYear(\'1919\')--');
car.info(car.changeYear('1919'));
console.log('--addDriver({name: \'name\', surname: \'surname\', lastName: \'last name\'})--');
car.addDriver({name: 'name', surname: 'surname', lastName: 'last name'});
console.log('--Driver--', car.driver);

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

const numGenerator = (min, max) => Math.round(Math.random() * (max - min)) + min;


class Sinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

class Prince extends Sinderella {
    constructor(name, age, footsize) {
        super(name, age, footsize);
    }
}


let sinderellasArray = [];
for (let i = 0; i < 10; i++) {
    sinderellasArray.push(new Sinderella(`Sinderella${i}`, numGenerator(10, 40), numGenerator(1, 10)));
}

let prince = new Prince('Prince', 'Prince age - 18', numGenerator(1, 10));
console.log(prince);

const findSinderellaAll = (sinderellasArray, arr = []) => {
    for (let person of sinderellasArray) {
        person.footsize === prince.footsize ? arr.push(person) : false;
    }
    if (!arr[0]) {
        arr.push('Мы ее не нашли')
        return arr;
    }
    return (arr.length === 1 ? arr : (console.log('Их несколько'), arr));
}

const findSinderella = (sinderellasArray) => {
    return sinderellasArray.find(person => person.footsize === prince.footsize)
}

/*--Пример--*/

console.log('--Поиск золушки при помощи цикла--')
console.log(findSinderellaAll(sinderellasArray));

console.log('--А теперь при помощи метода массива find--')
console.log(findSinderella(sinderellasArray) || 'Мы ее не нашли');

