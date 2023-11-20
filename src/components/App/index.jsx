import Globalstyles from "../../assets/global";
import Header from "../Header";
import Kalform from "../KalForm";
import { Container } from "./styles";
export function App() {
  return (
    <Container>
      <Globalstyles />
      <Header />
      <Kalform />
    </Container>
  );
}
