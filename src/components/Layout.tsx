import styled from "styled-components";
import { Sidebar } from "./Global/Sidebar";

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
      <Sidebar fadeOut={() => fadeOut()} />
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
`;
