import "./App.css";
import { SlideCard } from "./components/SlideCard";
import { Navigation } from "./components/NavBar/Navigation";

import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Navigation></Navigation>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
