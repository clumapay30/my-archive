const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 10)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todoUl = document.querySelector('#todos')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo()
})

function addTodo() {
    let newTodo = input.value;
    
    if(newTodo) {
        const newList = document.createElement('li');
        newList.classList.add('todo-output');
        newList.innerHTML = newTodo;

        todoUl.append(newList);
        input.value = '';

        newList.addEventListener('click', () => {
            newList.classList.toggle('completed');
        })

        newList.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            newList.remove();
        })
    }
}