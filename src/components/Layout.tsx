import styled from "styled-components";
import { Sidebar } from "./Global/Sidebar";
import { windowWidth } from "@/utils/windowWidth";
import { HeaderComponent } from "./Global/Header";

interface LayoutProps {
  fadeOut: any;
}

const RootLayout = ({
  children,
  fadeOut,
}: {
  children: React.ReactNode;
  fadeOut: LayoutProps["fadeOut"];
}) => {
  return (
    <Container>
      {windowWidth(1024) ? (
        <HeaderComponent fadeOut={() => fadeOut()} />
      ) : (
        <Sidebar fadeOut={() => fadeOut()} />
      )}
      {children}
    </Container>
  );
};

export default RootLayout;

const Container = styled.div`
  display: flex;
  background-color: #111;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
