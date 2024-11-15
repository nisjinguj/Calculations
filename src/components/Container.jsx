import styled from "styled-components";
import OutputCalculators from "./Output";

const Container = styled.div`
  width: 600px;
  height: 90vh;

  box-shadow: 2px 2px 5px 5px gray;

  border: 1px solid black black black black;

  padding-top: 5vh;
`;

// 계산기 전체를 아우르는 몸체
function MainContainer({ children }) {
  return <Container>{children}</Container>;
}

export default MainContainer;
