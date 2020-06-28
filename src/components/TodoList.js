import React, { Component } from "react";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";
export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,
  };

  addToDo = (todo) => {
    const newTodo = [todo, ...this.state.todos];
    this.setState({
      todos: newTodo,
    });
  };

  toggleComplete = (id) => {
    this.setState( state => ({
      todos: state.todos.map((todo) => {
        // Suppose to update
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  handleToDelete = (id) => {
    this.setState( state => ({
      todos: state.todos.filter((x) => x.id !== id),
    }));
  };

  updateTodoShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  removeTodoThatAreComplete = () => {
    this.setState( state => ({
      todos: state.todos.filter((x) => !x.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((x) => !x.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((x) => x.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addToDo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleToDelete(todo.id)}
            todo={todo}
          />
        ))}

        <div>
          Active Todo's left ::{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div style={{ justifyContent: "center" }}>
          <button
            onClick={() => {
              this.setState({ todoToShow: "all" });
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              this.setState({ todoToShow: "active" });
            }}
          >
            Active
          </button>
          <button
            onClick={() => {
              this.setState({ todoToShow: "complete" });
            }}
          >
            Complete
          </button>
        </div>

        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.removeTodoThatAreComplete}>
              Remove All Completed Todo's
            </button>
          </div>
        ) : null}

        <div>
          <button
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toggleAllComplete,
                })),
                toggleAllComplete: !state.toggleAllComplete,
              }))
            }
          >
            Toggle all:{`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
