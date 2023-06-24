const getTodo = document.querySelector('#getTodo');
const todoList = document.querySelector('.todolist');

let todos = [];
// const newTodo = {};
let parseTodos=[];

if(localStorage.todos) {
    parseTodos = JSON.parse(localStorage.todos);
    // console.log("parseTodos ", parseTodos);
    parseTodos.forEach(parseTodoListMake);
    todos = parseTodos;
}

function todoDelete (event) {
    const li = event.target.parentElement;

    const newTodolisted = parseTodos.filter((item) => item.id !== parseInt(li.id))
    console.log("li.id ", parseInt(li.id));
    console.log("todos ", todos);
    console.log("parseTodos", parseTodos);
    console.log("newTodolisted", newTodolisted);

    li.remove();

    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(newTodolisted));
    todos = newTodolisted;
    parseTodos = newTodolisted;
}

function todoObject (a) {
    const newTodo = {
        text:a,
        id:Date.now(),
    }
    return newTodo;
}


function todoSave (a) {
    
    todos.push(todoObject(a));

    // console.log(todoObject(a));
    // console.log(todos);
    // parseTodos.push(todoObject(a));
    // console.log(parseTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
    
}

function todoListMake (a) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    // todoSave(a);

    // console.log(a);
    // console.log(li);
    // console.log(todoList);

    const todoelement = todoList.appendChild(li);
    todoelement.id = todoObject(a).id;
    const todoelement_span = todoelement.appendChild(span);
    const todoelement_delete = todoelement.appendChild(button);
    todoelement_span.innerText = todoObject(a).text;
    todoelement_delete.innerText = 'delete';

    todoelement_delete.addEventListener('click', todoDelete);
}

function parseTodoListMake (a) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    // todoSave(a);

    // console.log(a);
    // console.log(li);
    // console.log(todoList);

    const todoelement = todoList.appendChild(li);
    todoelement.id = a.id;
    const todoelement_span = todoelement.appendChild(span);
    const todoelement_delete = todoelement.appendChild(button);
    todoelement_span.innerText = a.text;
    todoelement_delete.innerText = 'delete';

    todoelement_delete.addEventListener('click', todoDelete);

}


getTodo.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        // console.log(getTodo.value);
        todoSave(getTodo.value);
        todoListMake(getTodo.value);
        getTodo.value = "";
    }
})


