import PropTypes from "prop-types";
import { ButtonStyled } from "./styles";
export default function Button({ type = "button", children, onClick }) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
