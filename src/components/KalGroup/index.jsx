import PropTypes from "prop-types";
import { Container } from "./styles";
export default function KalGroup({ children }) {
  return <Container>{children}</Container>;
}

KalGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
