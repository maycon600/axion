import { Modal } from "react-bootstrap";
import { Close, Content, Form, FormGroup, FormHeader } from "./styles";
import Theme from "@/styles/themes";
import { GlobalButton } from "@/components/Global/Button";
import { CloseSVG } from "../../../../public/Close";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function NewPasswordModal({ show, onHide }: ModalProps) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Close onClick={onHide}>
        <CloseSVG />
      </Close>
      <Content>
        <FormHeader>
          <div>
            <img src="/profile/security-safe.svg" alt="" />
          </div>
          <h1>Atualizar Senha</h1>
          <span>Preencha os campos abaixo para atualizar sua senha.</span>
        </FormHeader>
        <Form>
          <FormGroup>
            <label htmlFor="current-password">Senha Atual</label>
            <input type="password" placeholder="Digite sua senha atual" />
          </FormGroup>
          <div
            style={{
              borderTop: "1px solid" + Theme.color.gray_20,
              marginTop: "1rem",
            }}
          />
          <FormGroup>
            <label htmlFor="new-password">Nova Senha</label>
            <input type="password" placeholder="Digite sua nova senha" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="confirm-password">Repetir Senha</label>
            <input type="password" placeholder="Confirme sua nova senha" />
          </FormGroup>
          <GlobalButton
            content="Atualizar Senha"
            padding="1rem"
            style={{ marginBottom: "4rem" }}
          />
        </Form>
      </Content>
    </Modal>
  );
}
