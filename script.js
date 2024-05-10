let todoInput = document.getElementById("todo-input")
let addBtn = document.getElementById('addBtn')
let todoContainer = document.getElementById('todo-container')



addBtn.addEventListener('click', (e)=>{
    let todo = document.createElement('div')
    todo.classList.add('todo');

    let li = document.createElement('li');
li.innerText = `${todoInput.value}`
todo.appendChild(li)

let checkBtn = document.createElement('button')
checkBtn.innerText = '✅'
todo.appendChild(checkBtn)

let delBtn = document.createElement('button')
delBtn.innerText = '❌'
todo.appendChild(delBtn)

if(todoInput.value === ''){
   alert('Enter a text')

}
else{
    todoContainer.appendChild(todo)

    todoInput.value = '';

}
});

todoContainer.addEventListener("click", (e)=>{
    let target= e.target;
    if(target.classList.contains("todo-delete")){
     let item = target.parentElement;
     item.remove()
    }
  
    if(target.classList.contains("todo-check")){
     let item = target.parentElement;
     item.classList.toggle('completed');
    }
   }) 





