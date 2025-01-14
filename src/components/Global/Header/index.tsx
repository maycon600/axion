import { useState } from "react";
import { HeaderContainer, StyledOffcanvas } from "./styles";
import { Button, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import { LinkComponent } from "./Link";
import { Dashboard } from "../../../../public/sidebar/dashboard";
import { FinancialSVG } from "../../../../public/sidebar/financial";
import { NotificationSVG } from "../../../../public/sidebar/notification";
import { ProfileSVG } from "../../../../public/sidebar/profile";

interface SidebarProps {
  fadeOut: any;
}

export function HeaderComponent({ fadeOut }: SidebarProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HeaderContainer>
        <button>
          <Image
            onClick={handleShow}
            style={{ cursor: "pointer" }}
            width={40}
            height={40}
            src={"/menuIcon.svg"}
            alt=""
          />
        </button>

        <Image
          width={250}
          height={46}
          src={"/sidebar/axion-white.svg"}
          alt={""}
          className="logo"
        />
      </HeaderContainer>

      <StyledOffcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          style={{ marginTop: "1rem" }}
          closeButton
          closeVariant="white"
        >
          <div></div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              marginTop: "1em",
              // paddingLeft: "2rem",
              paddingBottom: "5rem",
            }}
          >
            <LinkComponent
              fadeOut={() => fadeOut()}
              name="Dashboard"
              imgSrc={<Dashboard />}
              href="/home"
            />
            <LinkComponent
              fadeOut={() => fadeOut()}
              name="Comparativo"
              imgSrc={<FinancialSVG />}
              href="/comparison"
            />
            <LinkComponent
              fadeOut={() => fadeOut()}
              name="Notificações"
              imgSrc={<NotificationSVG />}
              href="/notifications"
            />
            <LinkComponent
              fadeOut={() => fadeOut()}
              name="Meu Perfil"
              imgSrc={<ProfileSVG />}
              href="/profile"
            />
            <LinkComponent
              fadeOut={() => fadeOut()}
              name="Ajuda"
              imgSrc={<img src="/sidebar/HelpSVG.svg" alt="" />}
              href="/help"
            />
          </div>
        </Offcanvas.Body>
      </StyledOffcanvas>
    </>
  );
}
