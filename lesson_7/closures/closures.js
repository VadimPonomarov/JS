/*1) Створити карту користувача(User Card):
Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
об’єкт з методами:
const card3 = userCard(3); // returns an object with methods
User Card методи:
getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про
карту:
card3.getCardOptions(); // returns options object with card info
Об’єкт має містити такі властивості:
• balance (по замовчуванням 100)
• transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
карти)
• historyLogs (масив об’єктів який містить інформацію про операції та трансакції
данної карти)
• key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
функції. Кожна карта повинна мати унікальний key)
putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
карти:
card3.putCredits(150);
takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
баланса карти (протилежний за дією від метода putCredits):
card3.takeCredits(100);
Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
відповідне повідомлення у консолі (скористайтеся console.error)
setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
як ліміт транзакцій на картці
card3.setTransactionLimit(5000);
transferCredits.
Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
card3.transferCredits(50, card1);
Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
транзакцій відправника кредитів (card3).
Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
change операції і зберігайте history log. History log (Дивитись зображення 1)
інформація має зберігатись в об’єктах з такими властивостями:
• operationType (стрічка яка описує здійснену операцію)
• credits (кількість коштів)
• operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
Зображення 1 — Приклад виклику функції
getCardOptions*/

class UserCard {

    constructor(key = 1, balance = 100, transactionLimit = 100, historyLogs = []) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.historyLogs = historyLogs;
        this.key = key;
    }

    getCardOptions() {
        console.log(this);
    }

    putCredits(num) {
        this.balance += num;
        this.addHistoryLog('putCredits', num);
    }

    takeCredits(num) {
        if (this.balance < num) {
            return console.log('Денег на счете недостаточно');
        }
        this.balance -= num;
        this.addHistoryLog('takeCredits', num);
    }

    setTransactionLimit(num) {
        this.transactionLimit = num;
        this.addHistoryLog('setLimit', num);
    }

    transferCredits(num, card) {
        if (this.balance < (num * 1.005)) {
            return console.log('Денег на счете недостаточно');
        }
        this.balance -= (num * 1.005);
        card.putCredits(num);
    }

    addHistoryLog(operationType, credits, operationTime = new Date().toLocaleString()) {
        this.historyLogs.push(`${operationType} - ${credits} - ${operationTime}`);
    }

    printHistory() {
        return console.log(this.historyLogs);
    }

}
console.log('--1--');
const card1 = new UserCard(1);
card1.getCardOptions();
const card3 = new UserCard(1);
card3.getCardOptions();

card3.putCredits(150);
card3.takeCredits(100);
card3.setTransactionLimit(5000);
card3.transferCredits(50, card1);
card3.getCardOptions();
card1.getCardOptions();

/**/

class UserAccount {

    constructor(name = 'name', cards = []) {
        this.name = name;
        this.cards = cards;
    }

    addCard() {
        if (this.cards.length > 3) {
            return 'Можно иметь не более 3 карт';
        }
        this.cards.push(new UserCard());
    }

    getCardByKey(cardKey) {
        return console.log(this.cards.find(item => item.key === cardKey));
    }
}

console.log('--2--');
const user = new UserAccount('Bob');
user.addCard();
user.getCardByKey(1);