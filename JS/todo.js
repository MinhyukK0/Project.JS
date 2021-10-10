const TodoForm = document.querySelector('.todo_form');
const TodoInput = document.querySelector('.todo_form input')
const TodoList = document.querySelector('#todo_list');

// Save List
let toDos_array = [];
const TODO_KEY = 'todos'

function saveToDos(){
    // JSON.stringify : 받은 문자열(특수문자 포함) 그대로 문자열로 해석
    localStorage.setItem(TODO_KEY,JSON.stringify(toDos_array));
    // JSON.parse : 받은 데이터 타입을 배열형으로 반환
}

// Delete list
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    // localStorage에서 삭제
    toDos_array = toDos_array.filter((item) => item.id !== parseInt(li.id)); // li에 존재하는 id값은 string, localStorage에 저장된 id값은 int
    saveToDos();
}

// Add List
function Writetodo(object){
    const todoli = document.createElement('li');
    todoli.id = object.id;
    const todospan = document.createElement('div');
    todospan.innerText = object.text;
    const button = document.createElement('button');
    button.innerText= '';
    button.addEventListener('click',deleteTodo)
    todoli.appendChild(todospan);
    todoli.appendChild(button);
    TodoList.appendChild(todoli);
    saveToDos();
}

// List Form
function todosubmit(event){
    event.preventDefault();
    const todo_object = {
        text : TodoInput.value,
        id : Date.now()
    };
    TodoInput.value = '';
    toDos_array.push(todo_object);
    Writetodo(todo_object);
}


TodoForm.addEventListener('submit',todosubmit);

// 새로고침 및 submit 시 유지
const savedTodo = localStorage.getItem(TODO_KEY);

if(savedTodo !== null){
    const parsedtodo = JSON.parse(savedTodo);
    toDos_array = parsedtodo;
    parsedtodo.forEach(Writetodo);
    //((item) => console.log(`This turn is ${item}`)); 
    // eachfor arrow function 배열 속 각각의 아이템에 대해 함수를 실행 
}
// eachfor(함수 이름) 후 함수선언을 따로해도 되고 arrow function을 써도 된다.


//배열.filter(함수) :  배열에 있는 각각의 아이템을 함수로 실행하여 true값을 반환하는 요소들만 다시 새로운 array로 만든다.