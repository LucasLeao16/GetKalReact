import Button from "../Button";
import { Input } from "../Input";
import KalGroup from "../KalGroup";
import Result from "../Result";
import { Select } from "../Select";
import { ButtonContainer } from "./styles";
import useKalForm from "./useKalForm";
export default function Kalform() {
  const {
    handleGenderChange,
    handleAgeChange,
    handleWeightChange,
    handleHeightChange,
    handleActivityLevelChange,
    handleSubmit,
    isSubmit,
    user,
  } = useKalForm();
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <KalGroup>
          <Select onClick={handleGenderChange}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </Select>
        </KalGroup>

        <KalGroup>
          <Input
            type="number"
            placeholder="Digite sua idade:"
            onChange={handleAgeChange}
            required
          />
        </KalGroup>

        <KalGroup>
          <Input
            type="number"
            placeholder="Digite seu peso em Kg:"
            onChange={handleWeightChange}
            required
          />
        </KalGroup>

        <KalGroup>
          <Input
            type="number"
            placeholder="Digite sua altura em cm:"
            onChange={handleHeightChange}
            required
          />
        </KalGroup>

        <KalGroup>
          <Select onClick={handleActivityLevelChange}>
            <option value="1.2">Sedentário</option>
            <option value="1.375">Pouca atividade</option>
            <option value="1.55">Atividade moderada</option>
            <option value="1.725">Atividade intensa</option>
            <option value="1.9">Atividade muito intensa</option>
          </Select>
        </KalGroup>
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
      </form>
      {isSubmit && <Result user={user} />}
    </section>
  );
}
