import { useState } from "react";
import {
  BackButton,
  FormGroup,
  NextButton,
  RadioContainer,
  RadioGroup,
  RadioSelector,
  RegisterForm,
  RegisterFormHeader,
} from "./styles";

export function PersonalDataForm() {
  const [selectedGender, setSelectedGender] = useState("");

  const handleRadioChange = (event: { target: { value: string } }) => {
    setSelectedGender(event.target.value);
  };

  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados Pessoais</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="cpf">Seu CPF</label>
        <input type="text" id="cpf" placeholder="Digite seu CPF" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="bithDate">Data de Nascimento</label>
        <input type="date" placeholder="Sua Data de Nascimento" />
      </FormGroup>
      <label
        htmlFor="gender"
        style={{ fontWeight: "bold", marginBottom: "1rem" }}
      >
        Sexo
      </label>
      <RadioContainer>
        <RadioGroup>
          <RadioSelector htmlFor="male" checked={selectedGender === "male"}>
            <div />
          </RadioSelector>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={selectedGender === "male"}
            onChange={handleRadioChange}
          />
          <label htmlFor="male">Masculino</label>
        </RadioGroup>

        <RadioGroup>
          <RadioSelector htmlFor="female" checked={selectedGender === "female"}>
            <div />
          </RadioSelector>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={selectedGender === "female"}
            onChange={handleRadioChange}
          />
          <label htmlFor="female">Feminino</label>
        </RadioGroup>
      </RadioContainer>
    </RegisterForm>
  );
}
