import PropTypes from "prop-types";
import { Container, ExternalMarginContainer } from "./styles";
export default function Result({ user }) {
  return (
    <ExternalMarginContainer>
      <h2>Aqui está o resultado:</h2>
      <Container>
        <ul>
          <li>
            Seu metabolismo basal é de{" "}
            <strong>${Math.round(user.basal)} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média{" "}
            <strong>${user.manutency} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média{" "}
            <strong>${user.weightLoss} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média{" "}
            <strong>${user.weightGain} calorias</strong>.
          </li>
        </ul>
      </Container>
    </ExternalMarginContainer>
  );
}
Result.propTypes = {
  user: PropTypes.shape({
    basal: PropTypes.number.isRequired,
    manutency: PropTypes.number.isRequired,
    weightLoss: PropTypes.number.isRequired,
    weightGain: PropTypes.number.isRequired,
  }).isRequired,
};
