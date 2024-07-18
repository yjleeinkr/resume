import styled from "styled-components";
import Profile from "./Profile";
import Introduce from "./Introduce";
import Experience from "./Experience";
import ToyProject from "./ToyProject";
import Education from "./Education";
import Certi from "./Certi";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 767px;
  }

  @media (max-width: 767px) {
    width: 100vw;
    padding: 1vw;
  }
`;

function Container({ showModal }) {
  return (
    <Wrapper>
      <Profile />
      <Introduce />
      <Experience />
      <ToyProject showModal={showModal} />
      <Education />
      <Certi />
      <Footer />
    </Wrapper>
  );
}

export default Container;
