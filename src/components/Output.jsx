import styled from "styled-components";

const Outputs = styled.input`
  width: 100%;
  height: 100%;

  border-radius: 12px;
  font-size: 36px;
`;

const OutputContainer = styled.div`
  width: 90%;
  height: 14vh;

  border-radius: 12px;
  border: 1px;
  border-color: black black black black;

  padding-bottom: 7vh;

  margin-left: 5%;
`;

// 계산기 출력창
function OutputCalculators(props) {
  // console.log(props, props.title);
  return (
    <>
      <OutputContainer>
        <Outputs value={props.value}></Outputs>
      </OutputContainer>
    </>
  );
}

export default OutputCalculators;
