import { useRouter } from "next/router";
import { RegisterHeader } from "./styles";

export function RegisterAccountHeader() {
  const router = useRouter();

  return (
    <RegisterHeader>
      <img src="/axionLogo.png" alt="" />
      <button onClick={() => router.push("/login")}>Já é cliente? Acessar</button>
    </RegisterHeader>
  );
}
