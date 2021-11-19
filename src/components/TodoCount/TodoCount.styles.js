import styled from 'styled-components';

export const StyledTodoCount = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  color: hsl(0, 0%, 100%);
`;
