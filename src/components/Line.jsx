import { Children } from "react";
import styled from "styled-components";

const Lines = styled.div`
  width: 80%;
  height: 11.2vh;

  /* border: 1px solid greenyellow; */

  margin-top: 3vh;
  margin-left: 10%;

  /* 버튼을 위한 css */
  display: flex;
  justify-content: space-between;
`;

// 계산기 버튼을 감싸는 라인
function Line({ children }) {
  return <Lines>{children}</Lines>;
}

export default Line;
