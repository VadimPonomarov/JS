/*- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.*/

function arrConcat() {
    if (arguments.length === 1) {
        return console.log(arguments);
    }
    let res = '';
    for (let i of arguments) {
        res += i;
    }
    return console.log(res);
};



/*- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  EXAMPLE:
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]*/

function arrSum(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
        let res = [];
        for (let i = 0; i < arr1.length; i++) {
            res[i] = arr1[i] + arr2[i];
        }
        return console.log(res);
    } else {
        return console.log('Передайте два массива одинаковой размерности')
    }
}



/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/

function arrObjKeys() {
    let res = [];
    for (let i = 0; i < arguments.length; i++) {
            for(let j of arguments[i]){
                if(typeof j === 'object'){
                    for (let key in j) {
                        res.push(key)
                    }
                } else {
                    return console.log('Передавать можно только объекты')
                }
            }
        return console.log(res);
    }
}



/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/

function arrObjValues() {
    let res = [];
    for (let i = 0; i < arguments.length; i++) {
        for(let j of arguments[i]){
            if(typeof j === 'object'){
                for (let key in j) {
                    res.push(j[key])
                }
            } else {
                return console.log('Передавать можно только объекты')
            }
        }
        return console.log(res);
    }
}

