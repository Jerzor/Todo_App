import styled from "styled-components";

export const TaskMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px 20px;
  margin: 20px 0;
  box-shadow: 3px 3px 5px gray;
`;

export const TaskName = styled.p``;

export const TaskButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: ${({ color }) => (color ? "green" : "red")};
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;
