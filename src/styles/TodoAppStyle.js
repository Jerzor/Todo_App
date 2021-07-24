import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoApp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  font-size: 36px;
  margin: 25px 0;
`;

export const AddTask = styled.div``;

export const Input = styled.input`
  padding: 10px 10px;
  width: 250px;
  /* border: 2px solid black; */
`;

export const Button = styled.button`
  background: none;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid black;
  transition: 0.35s;

  &:hover,
  &:focus {
    box-shadow: inset 6.5em 0 0 0 #333;
    color: #fff;
  }
`;

export const TasksMenu = styled.ul`
  margin: 25px 0;
  list-style: none;
`;
