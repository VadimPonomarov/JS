/* // Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
  // Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
  // Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
  // // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі*/

const getUp = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('1 - Get up ...');
        }, 300)
    })
}

getUp().then(res => console.log(res));

const washUp = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('2 - Wash up ...');
        }, 500)
    })
}

washUp().then(res => console.log(res));

const haveBreakfast = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('3 - Have breakfast ...');
        }, 400)
    })
}

haveBreakfast().then(res => console.log(res));

const takeTransport = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('4 - Take transport ...');
        }, 500)
    })
}

takeTransport().then(res => console.log(res));

const goWork = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('5 - Go to work ...');
        }, 300)
    })
}

goWork().then(res => console.log(res));

const workBit = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('6 - Work a bit ...');
        }, 500)
    })
}

workBit().then(res => console.log(res));

const haveBreak = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('7 - Have a break ...');
        }, 500)
    })
}

haveBreak().then(res => console.log(res));

const workAgain = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('8 - Work again ...');
        }, 300)
    })
}

workAgain().then(res => console.log(res));

const goHome = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('9 - Go home ...');
        }, 500)
    })
}

goHome().then(res => console.log(res));


/* А эта функция без промиса */
const goSleep = () => {
    setTimeout(() => {
        return console.log('10 - Go to bad and sleep ...');
    }, 100)
}

goSleep();


setTimeout(() => {
    console.log('----- PROMISE.THEN -----');
    getUp()
        .then(res => {
            console.log(res);
            return washUp()
                .then(res => {
                    console.log(res);
                    return haveBreakfast()
                })
                .then(res => {
                    console.log(res);
                    return takeTransport()
                })
                .then(res => {
                    console.log(res);
                    return goWork()
                })
                .then(res => {
                    console.log(res);
                    return workBit()
                })
                .then(res => {
                    console.log(res);
                    return haveBreak()
                })
                .then(res => {
                    console.log(res);
                    return workAgain()
                })
                .then(res => {
                    console.log(res);
                    return goHome()
                })
                .then(res => {
                    console.log(res);
                    goSleep();
                    return
                })
                .then(() => {
                    setTimeout(() => {
                        console.log('----- Async/Await -----')
                    }, 101);
                })
                .finally(() => {
                    async function myFunc() {
                        await getUp().then(res => console.log(res));
                        await washUp().then(res => console.log(res));
                        await haveBreakfast().then(res => console.log(res));
                        await takeTransport().then(res => console.log(res));
                        await goWork().then(res => console.log(res));
                        await workBit().then(res => console.log(res));
                        await haveBreak().then(res => console.log(res));
                        await workAgain().then(res => console.log(res));
                        await goHome().then(res => console.log(res));
                        await goSleep();
                    }
                    myFunc()
                })
        })
}, 600)




