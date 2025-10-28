import { Todo } from "./interfaces";

export let todos: Todo[] = [];

// Step 5: Function to add a new todo
// Function to add a new todo: This function creates a new todo object and adds it to the array.
export const addTodo = (text: string): void => {
    const newTodo: Todo = {
        id: Date.now(), // Generate a unique ID based on the current timestamp
        text: text,
        completed: false,
    };
    todos.push(newTodo);
    console.log("Todo added: ", todos); // Log the updated list of todos to the console
};

// Step 8: Function to remove a todo by ID
// Function to remove a todo by ID: This function removes a todo from the array based on its ID.
export const removeTodo = (id: number): void => {
    todos = todos.filter((todo) => todo.id !== id);
};

// Edit function - prompt user to edit the todo : editTodo
export const editTodo = (id: number, newText: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.text = newText;
    }
};

JSON.stringify(todos); // '[{todo1}, {todo2}]'
