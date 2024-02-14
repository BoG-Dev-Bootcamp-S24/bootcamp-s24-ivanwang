import React, { /* Hint 1: Import useState from React */ useState} from 'react';
import './TodoList.css';

function TodoList() {
  // Hint 2: Initialize two state variables using useState. 
  // One for the list of todos and another for the current task input.
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Hint 3: Define the addTodo function which will be called on button click.
  // - Check if 'task' is not empty. If not, proceed to add the task.
  // - Use setTodos to add the new task to the todos array.
  // - The new task should be an object of the form: { task: string, completed: boolean }
  // - Reset the task input field after adding the task.
  const addTodo = (e) => {
    if (task) {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  }

  // Hint 4: Define the toggleComplete function to toggle the completion status of a todo item.
  // - Use setTodos with the map function to create a new array.
  // - In the map function, check if the current todo item's task matches the one received in the function's argument.
  // - If it matches, toggle its 'completed' property.
  // - Otherwise, return the todo item as is.
  const toggleComplete = (task) => {
    setTodos(todos.map(todo => todo.task === task ? { ...todo, completed: !todo.completed } : todo));
  };

  // Hint 5: Define the removeTodo function to remove a todo item.
  // - Use setTodos with the filter function to create a new array.
  // - In the filter function, return only those todo items whose task doesn't match the one received in the function's argument.
  const removeTodo = (task) => {
    setTodos(todos.filter(todo => todo.task !== task));
  }

  return (
    <div className="todo-list">
      <input
        type="text"
        // value={/* Hint 6: Bind this input to the task state variable */}
        value = {task}
        // onChange={/* Hint 7: Update the task state variable as the input changes */}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
      />
      {/* <button type="submit" onClick=Hint 8: Attach the addTodo function here>Add</button> */}
      <button type = "submit" onClick = {addTodo}>Add</button>
      
      {/* Hint 9: Use the map function to iterate over the todos array and render each todo item.
          - Each todo item should be a div with a conditional class name based on its 'completed' status.
          - Include a span to display the task and a button to remove the todo item.
          - Attach toggleComplete and removeTodo functions to the appropriate events in each todo item. 


          <div className={`todo-item condtional complete class`}>
          <span onClick={() => function to complete or uncomplete}>{todo.task}</span>
          <button onClick={() => function to remove}>Remove</button>
          </div>
          */
          todos.map(todo => (
            <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <span onClick={() => toggleComplete(todo.task)}>{todo.task}</span>
              <button onClick={() => removeTodo(todo.task)}>Remove</button>
            </div>
          ))
          }
    </div>
  );
}

export default TodoList;

