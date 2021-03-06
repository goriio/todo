import styled from 'styled-components';

export const StyledAddTodo = styled.form`
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.secondary};
    border-radius: 4px;
    outline: 0;
    background: transparent;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};

    &:placeholder {
      color: ${({ theme }) => theme.secondary};
    }

    &:focus {
      border-color: ${({ theme }) => theme.primary};
    }
  }

  small {
    display: block;
    height: 1.5rem;
    color: ${({ theme }) => theme.warning};
  }
`;

export const FormControl = styled.div`
  position: relative;
`;

export const InputCount = styled.span`
  position: absolute;
  right: 1rem;
  font-size: 0.9rem;
  color: ${({ theme, todoLength }) =>
    todoLength > 3 ? theme.secondary : theme.warning};
`;
