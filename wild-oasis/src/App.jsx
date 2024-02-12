import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: var(--color-brand-500);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h2">The Wild Oasis</Heading>
        <Button>Check in</Button>
      </StyledApp>
    </>
  );
}

export default App;
