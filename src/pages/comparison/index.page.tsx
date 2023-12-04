import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import {
  CenterContainer,
  ComparisonBars,
  Content,
  Grid,
  GridLine,
  HeadToHeadBar,
  Image,
  ImageCircle,
  Main,
} from "./styles";
import { Dropdown } from "react-bootstrap";
import Theme from "@/styles/themes";
import { CartesianGrid } from "recharts";
// import { Dropdown } from "@/components/Global/Dropdown";
export default function Comparison() {
  const main = useRef(null);
  const content = useRef(null);
  const [dropdownTitle, setDropdownTitle] = useState("Últimos 15 Dias");
  const array: number[] = Array(19).fill(0);

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
              {dropdownTitle}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => setDropdownTitle("Últimas 24 horas")}
              >
                Something else
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropdownTitle("Últimos 7 dias")}>
                Another action
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setDropdownTitle("Últimos 30 dias")}
              >
                Action
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Main>
            <header>
              <h1>Gráfico de Comparativo</h1>
              <h3>
                my text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an...
              </h3>
            </header>
            <HeadToHeadBar>
              <Dropdown
                style={{
                  alignSelf: "center",
                }}
              >
                <Dropdown.Toggle
                  variant="danger"
                  style={{
                    backgroundColor: Theme.color.darkBlueAxion,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  {dropdownTitle}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setDropdownTitle("Últimas 24 horas")}
                  >
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setDropdownTitle("Últimos 7 dias")}
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setDropdownTitle("Últimos 30 dias")}
                  >
                    Action
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <CenterContainer>
                <ImageCircle>
                  <Image
                    src={"/dashboard/user.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </ImageCircle>
                <Dropdown
                  style={{
                    alignSelf: "center",
                  }}
                >
                  <Dropdown.Toggle
                    variant="danger"
                    style={{
                      backgroundColor: "#000",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    {dropdownTitle}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setDropdownTitle("Últimas 24 horas")}
                    >
                      Something else
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setDropdownTitle("Últimos 7 dias")}
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setDropdownTitle("Últimos 30 dias")}
                    >
                      Action
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <ImageCircle>
                  <Image
                    src={"/dashboard/user.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </ImageCircle>
              </CenterContainer>
              <Dropdown
                style={{
                  alignSelf: "center",
                }}
              >
                <Dropdown.Toggle
                  variant="danger"
                  style={{
                    backgroundColor: Theme.color.darkBlueAxion,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  {dropdownTitle}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setDropdownTitle("Últimas 24 horas")}
                  >
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setDropdownTitle("Últimos 7 dias")}
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setDropdownTitle("Últimos 30 dias")}
                  >
                    Action
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </HeadToHeadBar>
            <Grid>
              <ComparisonBars type="instagram" percentage={20}>
                <ImageCircle style={{ backgroundColor: "#B73041" }}>
                  <Image
                    src={"/InstagramLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                  />
                </ImageCircle>
              </ComparisonBars>
              <ComparisonBars type="facebook" percentage={40}>
                <ImageCircle style={{ backgroundColor: "#001958" }}>
                  <Image
                    src={"/FacebookLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                  />
                </ImageCircle>
              </ComparisonBars>
              <ComparisonBars type="tiktok" percentage={60}>
                <ImageCircle style={{ backgroundColor: "#54858B" }}>
                  <Image
                    src={"/TiktokLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                  />
                </ImageCircle>
              </ComparisonBars>
              <ComparisonBars type="youtube" percentage={80}>
                <ImageCircle style={{ backgroundColor: "#8B0000" }}>
                  <Image
                    src={"/YoutubeLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                  />
                </ImageCircle>
              </ComparisonBars>
            </Grid>
          </Main>
        </Content>
      </RootLayout>
    </main>
  );
}
