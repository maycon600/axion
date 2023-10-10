import { HeaderComponent } from "@/components/Global/Header";
import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, Main, PaymentAndEmail } from "./styles";
import Theme from "@/styles/themes";
import { FinancialTable } from "@/components/financial/Table";

export default function Financial() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <header>
            <h2>Financeiro</h2>
            <button>Atualizar dados de pagamento</button>
          </header>

          <PaymentAndEmail>
            <div className="payment">
              <div className="payment-info">
                <span>Seu próximo pagamento</span>
                <strong>05, Dez 2023</strong>
              </div>

              <div
                style={{
                  borderLeft: "1px solid " + Theme.color.gray_60,
                }}
              />

              <div className="payment-info">
                <span>Sua fatura</span>
                <strong>R$ 1.550,00</strong>
              </div>
            </div>

            <div className="email">
              <label htmlFor="email">Email de envio de cobrança</label>
              <input
                type="email"
                name="email"
                id="email"
                value={"financeito@axioon.com.br"}
                readOnly
              />
            </div>
          </PaymentAndEmail>

          <hr />

          <FinancialTable />
        </Main>
      </Content>
    </Container>
  );
}
