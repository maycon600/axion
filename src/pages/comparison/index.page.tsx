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
import { DateSelectorDropdown } from "@/components/Global/Dropdown/DateSelector";
// import { Dropdown } from "@/components/Global/Dropdown";
export default function Comparison() {
  const main = useRef(null);
  const content = useRef(null);
  const [comparison1, setComparison1] = useState("Roberto Dorner");
  const [comparison2, setComparison2] = useState("Emanuel Pinheiro");
  const [comparisonValue, setComparisonValue] = useState("Engajamento");
  const user1Values = [
    {
      type: "instagram",
      percentage: 23,
      value: 1533,
    },
    {
      type: "facebook",
      percentage: 38,
      value: 4901,
    },
    {
      type: "tiktok",
      percentage: 40,
      value: 2804,
    },
    {
      type: "youtube",
      percentage: 12,
      value: 920,
    },
  ];
  const user2Values = [
    {
      type: "instagram",
      percentage: 82,
      value: 8056,
    },
    {
      type: "facebook",
      percentage: 74,
      value: 11590,
    },
    {
      type: "tiktok",
      percentage: 49,
      value: 3569,
    },
    {
      type: "youtube",
      percentage: 93,
      value: 2805,
    },
  ];
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
          <DateSelectorDropdown />
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
                  {comparison1}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setComparison1("Últimas 24 horas")}
                  >
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setComparison1("Últimos 7 dias")}
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setComparison1("Últimos 30 dias")}
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
                    {comparisonValue}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setComparisonValue("Últimas 24 horas")}
                    >
                      Something else
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setComparisonValue("Últimos 7 dias")}
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setComparisonValue("Últimos 30 dias")}
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
                  {comparison2}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setComparison2("Últimas 24 horas")}
                  >
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setComparison2("Últimos 7 dias")}
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setComparison2("Últimos 30 dias")}
                  >
                    Action
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </HeadToHeadBar>
            <Grid>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "space-evenly",
                  marginRight: "-2%",
                }}
              >
                <ComparisonBars
                  user={1}
                  type="instagram"
                  percentage={user1Values[0].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user1Values[0].percentage}%
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user1Values[0].value}
                  </label>
                </ComparisonBars>
                <ComparisonBars
                  user={1}
                  type="facebook"
                  percentage={user1Values[1].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user1Values[1].percentage}%
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user1Values[1].value}
                  </label>
                </ComparisonBars>
                <ComparisonBars
                  user={1}
                  type="tiktok"
                  percentage={user1Values[2].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user1Values[2].percentage}%
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user1Values[2].value}
                  </label>
                </ComparisonBars>
                <ComparisonBars
                  user={1}
                  type="youtube"
                  percentage={user1Values[3].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user1Values[3].percentage}%
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user1Values[3].value}
                  </label>
                </ComparisonBars>
              </div>
              <div
                style={{
                  height: "95%",
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "center",
                  alignItems: "flex-end",
                  justifyContent: "space-evenly",
                  zIndex: 2,
                }}
              >
                <ImageCircle
                  style={{
                    backgroundColor: "#B73041",
                  }}
                >
                  <Image
                    src={"/InstagramLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                </ImageCircle>
                <ImageCircle
                  style={{
                    backgroundColor: "#001958",
                  }}
                >
                  <Image
                    src={"/FacebookLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                </ImageCircle>
                <ImageCircle
                  style={{
                    backgroundColor: "#54858B",
                  }}
                >
                  <Image
                    src={"/TiktokLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                </ImageCircle>
                <ImageCircle
                  style={{
                    backgroundColor: "#8B0000",
                  }}
                >
                  <Image
                    src={"/YoutubeLogo.svg"}
                    width={50}
                    height={50}
                    alt=""
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  />
                </ImageCircle>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-evenly",
                  marginLeft: "-2%",
                }}
              >
                <ComparisonBars
                  user={2}
                  type="instagram"
                  percentage={user2Values[0].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user2Values[0].value}
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user2Values[0].percentage}%
                  </label>
                </ComparisonBars>
                <ComparisonBars
                  user={2}
                  type="facebook"
                  percentage={user2Values[1].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user2Values[1].value}
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user2Values[1].percentage}%
                  </label>
                </ComparisonBars>
                <ComparisonBars
                  user={2}
                  type="tiktok"
                  percentage={user2Values[2].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user2Values[2].value}
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user2Values[2].percentage}%
                  </label>
                </ComparisonBars>
                <ComparisonBars
                  user={2}
                  type="youtube"
                  percentage={user2Values[3].percentage}
                >
                  <label style={{ textAlign: "left" }}>
                    {user2Values[3].value}
                  </label>
                  <label style={{ textAlign: "right" }}>
                    {user2Values[3].percentage}%
                  </label>
                </ComparisonBars>
              </div>
            </Grid>
          </Main>
        </Content>
      </RootLayout>
    </main>
  );
}
