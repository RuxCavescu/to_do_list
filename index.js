//Selectors

const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

//Functions

function addToDo(event) {
  //prevent form from submitting
  event.preventDefault();

  //create toDoDiv
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo');

  //create toDoDiv
  const newToDoEL = document.createElement('li');
  newToDoEL.innerText = toDoInput.value;
  newToDoEL.classList.add('todo-item');

  //add the li to the toDoDiv
  toDoDiv.appendChild(newToDoEL);

  //Done Btn
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  toDoDiv.appendChild(completedButton);

  //Delete Btn
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  toDoDiv.appendChild(deleteButton);

  //append to list
  toDoList.appendChild(toDoDiv);

  //clear toDo Input value
  toDoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;

  //delete the todo
  if (item.classList[0] === 'delete-btn') {
    //removing the parent element of the item - if we don't do this, just the button will be removed
    //animation
    item.parentElement.classList.add('fall');
    item.parentElement.addEventListener('transitionend', function () {
      item.parentElement.remove();
    });
  }

  //when clicking the done button
  if (item.classList[0] === 'complete-btn') {
    //assigning to todo the clicked button
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
  console.log(e);
  const todos = toDoList.childNodes;

  todos.forEach(function (todo) {
    const Style = todo.style;

    if (Style != undefined && Style != null) {
      switch (e.target.value) {
        case 'all':
          Style.display = 'flex';
          break;
        case 'completed':
          if (todo.classList.contains('completed')) {
            Style.display = 'flex';
          } else {
            Style.display = 'none';
          }
          break;
        case 'incompleted':
          if (!todo.classList.contains('completed')) {
            Style.display = 'flex';
          } else {
            Style.display = 'none';
          }
          break;
      }
    }
  });
}
