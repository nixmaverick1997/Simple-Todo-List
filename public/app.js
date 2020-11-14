//Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    //Prevent form from submitting due to blank ip
    event.preventDefault();
    console.log('Entry has been made');
    //Todo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    //create List
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Checkmark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check-square"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashBtn=document.createElement('button');
    trashBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear input after append
    todoInput.value="";
}
function deleteCheck(e){
    const item= e.target;
    //Delete
    if(item.classList[0]=='trash-btn'){
        const todo=item.parentElement;
        //Animation for deletion
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    //Check and strike out completed tasks
    if(item.classList[0]=='complete-btn'){
        const todo=item.parentElement
        todo.classList.toggle("completed");
    }
}