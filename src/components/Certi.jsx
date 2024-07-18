import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SubTitle, Subject, Wrapper } from "./Common";

const TextBox = styled.div`
  padding: 30px 0px;
  opacity: 0.5;
  transform: translateY(-10px);
  transition: all 0.7s;
`;

const SubTextBolder = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 3px 0px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 300;
  padding: 3px 0px;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

function Certi() {
  const certiRef = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.transform = "translateY(0px)";
          v.target.style.opacity = 1;
        } else {
          v.target.style.transform = "translateY(-10px)";
          v.target.style.opacity = 0;
        }
      });
    });
    observer.observe(certiRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Certification.</SubTitle>
      <TextBox ref={certiRef}>
        <Subject>정보처리기사</Subject>
        <SubTextBolder>한국산업인력공단</SubTextBolder>
        <SubText>2024.06.18</SubText>
      </TextBox>
    </Wrapper>
  );
}

export default Certi;
