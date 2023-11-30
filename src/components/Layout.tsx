import styled from "styled-components";
import { Sidebar } from "./Global/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};

export default RootLayout;

const Container = styled.div`
  display: flex;
  background-color: #111;
  overflow: hidden;
`;
