import { useState } from "react";
import { FormGroup, RegisterForm, RegisterFormHeader } from "./styles";
import { maskCnpj } from "@/utils/masks";

export function CompanyDataForm() {
  const [Cnpj, setCnpj] = useState("");

  function handleCpfChange(cnpj: string) {
    let cleanedCnpj = Cnpj.replace(/\D/g, "");
    if (cleanedCnpj.length >= 14) {
      return setCnpj(maskCnpj(cleanedCnpj.slice(0, 14)));
    }
    setCnpj(maskCnpj(cnpj));
  }

  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados da Empresa</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="companyName">Nome da Empresa</label>
        <input
          type="text"
          id="companyName"
          placeholder="Digite o nome da empresa"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="cnpj">CNPJ</label>
        <input
          type="text"
          placeholder="Digite o CNPJ"
          value={Cnpj}
          onChange={(e) => handleCpfChange(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="role">Seu Cargo</label>
        <select name="role" id="role">
          <option value="" selected disabled hidden>
            Selecione o seu cargo
          </option>
          <option value="Administrado">Administrador</option>
          <option value="Administrado">Administrador</option>
        </select>
      </FormGroup>
    </RegisterForm>
  );
}
