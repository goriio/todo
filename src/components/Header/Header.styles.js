import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

export const StyledHeader = styled.header`
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
`;

export const ThemeToggler = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const Sun = styled(BsSun)`
  font-size: 1.5rem;
`;

export const Moon = styled(BsMoon)`
  font-size: 1.5rem;
`;
