const input = document.querySelector('input')
const btn = document.querySelector('#button-addon2')
let tasklist;
const localData = localStorage.getItem('localItem');
const localItems = JSON.parse(localData);

const addToDo = () => {
    
    if (localItems === null) {
        tasklist = [];
    }else {
        tasklist = localItems;
    }
    tasklist.push(input.value);
    input.value = ''
    localStorage.setItem('localItem', JSON.stringify(tasklist));
    showList();
}


const showList = () => {
    let output = '';
    let list = document.querySelector('#list');
    if (localItems === null){
        tasklist = [];
    }else {
        tasklist = localItems;
    }
    tasklist.forEach((data, index) => {
        output += `<button type="button" class="list-group-item list-group-item-action">${data}</button>`    
    });
    list.innerHTML = output;
}

showList();

btn.addEventListener('click', addToDo)
document.querySelector('#clear').addEventListener('click', () => {
    localStorage.clear()
})

// if ( input.value  ) {
//     const item = document.createElement('button');
//     item.innerHTML = input.value
//     item.setAttribute('class', 'list-group-item list-group-item-action')
//     list.appendChild(item);
//     input.value = '';
//     item.onclick = () => {
//         item.style.textDecoration = 'line-through'
//     }
//     item.ondblclick = () => {
//         // item.style.backgroundColor = 'black';
//         // item.style.color = 'white';
//         item.remove()
//     }
// }