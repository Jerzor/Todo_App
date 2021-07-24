import React from "react";
import { TaskMenu, TaskName, TaskButtons, Button } from "../styles/TodoStyle";

import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const Todo = ({ task, deleteTask, checkTask }) => {
  return (
    <TaskMenu
      style={
        task.complete ? { opacity: 0.4, textDecoration: "line-through" } : {}
      }
    >
      <TaskName>{task.name}</TaskName>
      <TaskButtons>
        <Button onClick={() => checkTask(task.id)}>
          <AiOutlineCheck color="green" />
        </Button>
        <Button onClick={() => deleteTask(task.id)}>
          <BsFillTrashFill color="red" />
        </Button>
      </TaskButtons>
    </TaskMenu>
  );
};

export default Todo;
