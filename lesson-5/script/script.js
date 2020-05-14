"use strict"
let div_container = document.createElement('div');
div_container.setAttribute("id", "container");
document.body.appendChild(div_container);

const Array = [{
    id: 1,
    name: 'John',
    age: 29,
    books: ['The Hobbit', 'Roadside Picnic']
},
{
    id: 2,
    name: 'Ani',
    age: 25,
    books: ['Faust', 'Arc of Triumph']
}
];

let table_js = document.createElement('table');
div_container.insertAdjacentElement('afterbegin', table_js);

let thead = document.createElement('thead');
table_js.insertAdjacentElement('afterbegin', thead);

let tr = document.createElement('tr');
thead.insertAdjacentElement('afterbegin', tr);
function tr_cycle() {
    let tds = new DocumentFragment();

    for (let i = 1; i <= 4; i++) {

        let td = document.createElement('td');
        td.append(i);
        tds.append(td);
    }
    return tds;
}
tr.append(tr_cycle());

let naming = ['id', 'name', 'age', 'books'];

function paste_names() {

    let search_tds = document.getElementsByTagName('td');

    for (let i = 1; i <= search_tds.length; i++) {
        search_tds[0].innerHTML(naming[0])(i);
    };
    return paste_names;
}






