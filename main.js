function addTodo() {
    var todoText = document.getElementById("new-todo").value;
    if (todoText.trim() === "") {
      alert("Please enter a valid task.");
      return;
    }
  
    var todoList = document.getElementById("todo-list");
  
    var todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.onclick = function() {
      todoItem.classList.toggle("completed");
    };
  
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    var text = document.createElement("span");
    text.textContent = todoText;
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      todoList.removeChild(todoItem);
    };
  
    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoItem.appendChild(deleteButton);
  
    todoList.appendChild(todoItem);
  
    document.getElementById("new-todo").value = "";
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      document.querySelector("#add-todo button").click();
    }
  }
  
  function deleteAll() {
    var todoList = document.getElementById("todo-list");
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
  }