import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import { Cards, Content, Main } from "./styles";
import { Dropdown } from "react-bootstrap";
import Theme from "@/styles/themes";
import { GlobalButton } from "@/components/Global/Button";
// import { Dropdown } from "@/components/Global/Dropdown";
export default function Help() {
  const main = useRef(null);
  const content = useRef(null);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        x: "-100%",
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const fadeOut = () => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        opacity: 0,
        duration: 0.5,
      });
    }, main);
    return () => ctx.revert();
  };

  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <Dropdown
            style={{
              alignSelf: "flex-end",
            }}
          >
            <Dropdown.Toggle
              variant="danger"
              style={{
                backgroundColor: "white",
                color: Theme.color.darkBlueAxion,
              }}
            >
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Main>
            <header>
              <h2>Como Utilizar a Plataforma</h2>
            </header>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: "100%",
                flexWrap: "wrap",
                paddingBottom: "5%",
                borderBottom: `1px solid ${Theme.color.gray_20}`,
              }}
            >
              {array.map((item) => (
                <Cards key={item}>
                  <h2>Dashboard</h2>
                  psum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took, 500s, when an unknown
                  printer took
                  <GlobalButton content="Ver Vídeo" />
                </Cards>
              ))}
            </div>
            <div
              style={{
                marginTop: "5%",
                flexDirection: "column",
                display: "flex",
                width: "100%",
              }}
            >
              <h3>Não Encontrou o quê estava procurando?</h3>
              <GlobalButton
                content="Fale Diretamente com nosso Time para que possamos te Ajudar"
                style={{ width: "30%", alignSelf: "center", marginTop: "5%" }}
              />
            </div>
          </Main>
        </Content>
      </RootLayout>
    </main>
  );
}
