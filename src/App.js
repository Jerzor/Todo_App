import React, { useState, createRef, useEffect } from "react";
import {
  Container,
  TodoApp,
  Title,
  AddTask,
  Input,
  Button,
  TasksMenu,
} from "./styles/TodoAppStyle";
import Todo from "./components/Todo";

let index = 0;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputRef = createRef();

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTasks(JSON.parse(localStorage.getItem("todos")));
      index = localStorage.getItem("index");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
    localStorage.setItem("index", index);
  }, [tasks]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue !== "")
      setTasks([{ name: inputValue, complete: false, id: ++index }, ...tasks]);
    setInputValue("");
    inputRef.current.focus();
  };

  const addTaskOnEnter = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const checkTask = (id) => {
    tasks.map((task) =>
      task.id === id ? (task.complete = !task.complete) : false
    );

    setTasks([...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <TodoApp>
        <Title>Todo List</Title>
        <AddTask>
          <Input
            ref={inputRef}
            placeholder="new task"
            value={inputValue}
            onChange={handleOnChange}
            onKeyPress={addTaskOnEnter}
          />
          <Button onClick={addTask}>Add</Button>
        </AddTask>
        <TasksMenu>
          {tasks.length ? (
            tasks.map((task) => (
              <li key={task.id}>
                <Todo
                  task={task}
                  deleteTask={deleteTask}
                  checkTask={checkTask}
                />
              </li>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>Add some tasks to your list!</p>
          )}
        </TasksMenu>
      </TodoApp>
    </Container>
  );
}

export default App;
