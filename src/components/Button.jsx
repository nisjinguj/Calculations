import styled from "styled-components";

const Buttons = styled.input`
  width: 20%;
  height: 90%;

  /* margin: 5% 2.5% 5% 2.5%; */

  border: 1px solid gray;
  border-radius: 8px;

  font-size: 2rem;
  font-style: initial;

  display: inline-block;

  text-align: center;

  background-color: gray;
`;

// 쓸모없는거
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

// 계산기 버튼
function Button(props) {
  // console.log(props);

  return <Buttons value={props.value} onClick={props.onClick}></Buttons>;
}

export default Button;
