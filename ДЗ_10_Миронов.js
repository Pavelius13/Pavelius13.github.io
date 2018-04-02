var list = document.querySelector('.list');
var Todo = ['Помыть посуду', 'Покормить кота', 'Заправить машину', 'Убрать квартиру'];
for (var i = 0; i < Todo.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = Todo[i]; 
    list.appendChild(listItem);
  }
  var btn = document.querySelector('.add')
  function addTodo() {
    var newTodo = prompt('Введите дело:');
    var listItem = document.createElement('li');
    listItem.textContent = newTodo;
    list.appendChild(listItem);
  }
  btn.addEventListener('click', addTodo);
list.addEventListener("mouseover", function() {
list.classList.add('highlight');
});
list.addEventListener("mouseout", function() {
    list.classList.remove('highlight');
});
list.addEventListener("click", function() {
    list.classList.add('done');
});
list.addEventListener("click", function() {
    list.classList.remove('done');
});