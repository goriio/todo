import styled from 'styled-components';

export const StyledAddTodo = styled.form`
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #aaa;
    border-radius: 4px;
    outline: 0;
    font-size: 1rem;

    &:focus {
      border-color: blue;
    }
  }

  small {
    display: block;
    height: 1.5rem;
    color: red;
  }
`;
