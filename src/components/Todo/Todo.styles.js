import styled from 'styled-components';

export const StyledTodo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-decoration: ${({ todo }) => todo.completed && 'line-through'};
    color: ${({ todo, theme }) => todo.completed && theme.secondary};
  }

  button {
    visibility: hidden;
  }

  &:hover button {
    visibility: visible;
  }
`;
