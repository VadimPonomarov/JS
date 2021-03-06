/*- Є масив :*/

let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];

/*Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, створити окремий блок. Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)*/

/*Вариант 1*/
document.write(`Вариант 1`);
for (let element of courses) {
    let container = document.createElement('div');
    container.classList.add('mycard', 'd-flex', 'offset-2', 'col-8', 'flex-wrap');
    let subcontainer = '';
    for (let module of element.modules) {
        subcontainer += `<div class="col-12">${module}</div>`
    }
    container.innerHTML = `
<div class="card-title col-12">${element.title}</div>
<div class="col-4">Month duration: ${element.monthDuration}</div>
<div class="col-8">Hour duration: ${element.hourDuration}</div>
<div class="subcontainer col-12 p-2">${subcontainer}</div>
<div class="col-6">Logo: ${element.logo}</div>
<div class="col-6">Price: ${element.price}</div>
<div class="col-6">Raiting: ${element.rating}</div>
<div class="col-6">Average result: ${element.avgResult}</div>
`
    document.body.appendChild(container);
}

/*Вариант 2*/
document.write(`Вариант 2`);
for (let element of courses) {
    let container = document.createElement('div');
    container.classList.add('mycard', 'd-flex', 'offset-2', 'col-8', 'flex-wrap');
    let title = document.createElement('div');
    let monthDuration = document.createElement('div');
    let hourDuration = document.createElement('div');
    let subContainer = document.createElement('div');
    let logo = document.createElement('div');
    let price = document.createElement('div');
    let raiting = document.createElement('div');
    let avgResult = document.createElement('div');
    container.appendChild(title);
    container.appendChild(monthDuration);
    container.appendChild(hourDuration);
    container.appendChild(subContainer);
    container.appendChild(logo);
    container.appendChild(price);
    container.appendChild(raiting);
    container.appendChild(avgResult);
    title.innerText = `${element.title}`;
    title.classList.add('card-title', 'col-12');
    monthDuration.innerText = `${element.monthDuration}`;
    monthDuration.classList.add('col-4');
    hourDuration.innerText = `${element.hourDuration}`;
    hourDuration.classList.add('col-8');
    logo.innerText = `Logo: ${element.logo}`
    logo.classList.add('col-6');
    price.innerText = `Price: ${element.price}`
    price.classList.add('col-6');
    raiting.innerText = `Raiting: ${element.rating}`
    raiting.classList.add('col-6');
    avgResult.innerText = `Average result: ${element.avgResult}`
    avgResult.classList.add('col-6');

    let subcontainer = '';
    for (let module of element.modules) {
        subcontainer += `<div class="col-12">${module}</div>`
    }
    subContainer.innerHTML = subcontainer;
    subContainer.classList.add('subcontainer', 'col-12', 'p-2')
    document.body.appendChild(container);
}