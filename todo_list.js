var todos = ['item 1', 'item 2', 'item 3'];

//function to display todos
function displayTodos(){
	console.log('My todos:', todos);
}

//function to add todos
function addTodo(todo){
	todos.push(todo);
	displayTodos();
}

// It should have a function to change todos
function changeTodo(position, newValue){
	todos[position]=newValue;
	displayTodos();
}

// function to delete todos
function deleteTodo(position){
	todos.splice(position, 1);
	displayTodos();
}