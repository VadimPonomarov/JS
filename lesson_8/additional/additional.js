/*написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
*/

let classesArr = document.querySelectorAll('body *');

/*Через цикл*/
const fClass = obj => {
    let arr = [];
    const fClassesArr = obj => {
        for (let i of obj) {
            if (i.classList.value) {
                arr.push(i.classList.value);
            }
        }
    }
    fClassesArr(obj);
    console.log(arr);
}

fClass(classesArr);


/*Через рекурсию*/
const recursionClasses = obj => {
    arr = [];
    let index = obj.length - 1;
    let next = () => {
        if (!(--index)) {
            console.log(--index);
            return
        }
        if (obj[index].classList.value) {
            arr.push(obj[index].classList.value);
        }
        next();
    }
    next();
    console.log(arr.reverse());
}

recursionClasses(classesArr);

