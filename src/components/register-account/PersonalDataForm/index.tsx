import { BackButton, FormGroup, NextButton, RegisterForm, RegisterFormHeader } from "./styles";

export function PersonalDataForm() {
  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados Básicos</strong>
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
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <input type="radio" name="gender" id="male" />
          <label htmlFor="male">Masculino</label>
        </div>

        <div style={{ display: "flex", gap: "0.3rem" }}>
          <input type="radio" name="gender" id="female" />
          <label htmlFor="female">Feminino</label>
        </div>
      </div>
    </RegisterForm>
  );
}
