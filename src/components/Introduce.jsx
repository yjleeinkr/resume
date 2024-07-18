import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SubTitle, Wrapper } from "./Common";

const ParagraphText = styled.p`
  font-size: 17px;
  font-weight: 300;
  padding: 20px 0px;
  line-height: 28px;
  opacity: 0.5;
  transform: translateY(-10px);
  transition: all 0.7s;

  @media (max-width: 1024px) {
    font-size: 15px;
    padding: 15px 0px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 15px 0px;
  }
`;

function Profile() {
  const introduceRef = useRef();
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
    observer.observe(introduceRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Introduce.</SubTitle>
      <ParagraphText ref={introduceRef}>
        2년차 웹 개발자 이연정입니다. 의류학을 전공해 의류업계 쪽에서 일했지만
        UI/UX 디자인에 관심이 많아 2022년부터 개발 교육 과정을 밟았으며, 현재
        프론트엔드 개발자로서 경험을 쌓고 있는 중입니다. 한 서비스의 첫인상을
        결정하는 것은 UI라고 생각합니다. 사용자들이 쉽게 이용할 수 있는 직관적인
        서비스를 만드는 개발자가 되고자 합니다.
      </ParagraphText>
    </Wrapper>
  );
}

export default Profile;
