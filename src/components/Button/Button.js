import { StyledButton } from './Button.styles';

const Button = ({ onClick, text }) => {
  return (
    <StyledButton onClick={onClick}>
      <span>{text}</span>
    </StyledButton>
  );
};

export default Button;
