import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
