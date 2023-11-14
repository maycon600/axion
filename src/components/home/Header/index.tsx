import { HeaderContainer } from "./styles";

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <div>
        <div>
          Clique nos <em>Cards</em> para ver os dados do seu Candidato
        </div>
        <div>
          <strong>Robert Martins</strong>
          <span>contato@robertmartins.com.br</span>
        </div>
      </div>
    </HeaderContainer>
  );
}
