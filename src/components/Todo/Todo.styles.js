import styled from 'styled-components';

export const StyledTodo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-decoration: ${({ todo }) => todo.completed && 'line-through'};
    color: ${({ todo }) => todo.completed && '#555'};
  }

  button {
    visibility: hidden;
  }

  &:hover button {
    visibility: visible;
  }
`;
