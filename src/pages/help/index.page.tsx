import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import RootLayout from "@/components/Layout";
import { Content } from "./styles";
import { Dropdown } from "react-bootstrap";
import Theme from "@/styles/themes";
// import { Dropdown } from "@/components/Global/Dropdown";
export default function Help() {
  const main = useRef(null);
  const content = useRef(null);

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
        </Content>
      </RootLayout>
    </main>
  );
}
