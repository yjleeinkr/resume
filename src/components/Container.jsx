import styled from "styled-components";
import Profile from "./Profile";
import Introduce from "./Introduce";
import Experience from "./Experience";
import ToyProject from "./ToyProject";
import Education from "./Education";

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
`;

function Container({ showModal }) {
  return (
    <Wrapper>
      <Profile />
      <Introduce />
      <Experience />
      <ToyProject showModal={showModal} />
      <Education />
    </Wrapper>
  );
}

export default Container;
