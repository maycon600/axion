import { Footer } from "@/components/Global/Footer";
import { RegisterAccountHeader } from "@/components/Global/Header";
import { BasicDataForm } from "@/components/register-account/BasicDataForm";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  ArtSection,
  BackButton,
  Container,
  FormContainer,
  Main,
  NextButton,
} from "./styles";
import { PersonalDataForm } from "@/components/register-account/PersonalDataForm";
import { CompanyDataForm } from "@/components/register-account/CompanyDataForm";

export default function RegisterAccount() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  return (
    <Container>
      <RegisterAccountHeader />
      <Main>
        <FormContainer>
          {step === 1 ? (
            <>
              <BasicDataForm />
            </>
          ) : step === 2 ? (
            <PersonalDataForm />
          ) : (
            <CompanyDataForm />
          )}

          {step === 1 ? (
            <NextButton onClick={() => setStep(step + 1)}>Proximo</NextButton>
          ) : (
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <BackButton onClick={() => setStep(step - 1)}>Voltar</BackButton>
              <NextButton onClick={() => setStep(step + 1)}>
                Continuar
              </NextButton>
            </div>
          )}
        </FormContainer>

        <ArtSection></ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
