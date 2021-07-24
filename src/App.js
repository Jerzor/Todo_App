import React, { useState, createRef, useEffect } from "react";
import {
  Container,
  TodoApp,
  Title,
  AddTask,
  Input,
  Button,
  TasksMenu,
  Select,
  Option,
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

  //===========================
  // ===== select options =====
  //===========================
  const [select, setSelect] = useState("all");
  const handleChangeOption = (event) => {
    setSelect(event.target.value);
  };

  const selectTasks = () => {
    switch (select) {
      case "all":
        return tasks.map((task) => (
          <li key={task.id}>
            <Todo task={task} deleteTask={deleteTask} checkTask={checkTask} />
          </li>
        ));
      case "completed":
        return tasks.map((task) =>
          task.complete === true ? (
            <li key={task.id}>
              <Todo task={task} deleteTask={deleteTask} checkTask={checkTask} />
            </li>
          ) : null
        );
      case "uncompleted":
        return tasks.map((task) =>
          task.complete === false ? (
            <li key={task.id}>
              <Todo task={task} deleteTask={deleteTask} checkTask={checkTask} />
            </li>
          ) : null
        );
      default:
        return;
    }
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

        <Select value={select} onChange={handleChangeOption}>
          <Option value="all">All</Option>
          <Option value="completed">Completed</Option>
          <Option value="uncompleted">Uncompleted</Option>
        </Select>

        <TasksMenu>
          {tasks.length ? (
            selectTasks()
          ) : (
            <p style={{ textAlign: "center" }}>Add some tasks to your list!</p>
          )}
        </TasksMenu>
      </TodoApp>
    </Container>
  );
}

export default App;
