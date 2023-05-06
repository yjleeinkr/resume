import styled from "styled-components";
import Profile from "./Profile";
import Introduce from "./Introduce";
import Experience from "./Experience";
import ToyProject from "./ToyProject";

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
`;

function Container() {
  return (
    <Wrapper>
      <Profile />
      <Introduce />
      <Experience />
      <ToyProject />
    </Wrapper>
  );
}

export default Container;
