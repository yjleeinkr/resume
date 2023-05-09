import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdTransitEnterexit } from "react-icons/md";
import { VscCircleSmall } from "react-icons/vsc";
import { SubTitle, Subject, DetailSubject, Wrapper } from "./Common";

const FlexBox = styled.div`
  padding: 40px 0px;
  box-sizing: border-box;
  display: flex;
  opacity: 0.5;
  transform: translateY(-10px);
  transition: all 0.7s;

  @media (max-width: 767px) {
    padding: 20px 0px;
    flex-direction: column;
  }
`;

const SummaryBox = styled.div`
  width: 27%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const TextBox = styled.div`
  width: 71%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const SummaryText = styled.p`
  font-size: 17px;
  font-weight: 300;
  padding: 15px 0px;

  @media (max-width: 1024px) {
    font-size: 15px;
    padding: 10px 0px;
  }
`;

const SubText = styled.p`
  color: #41424a;
  font-size: 16px;
  font-weight: 300;
  padding: 3px 0px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const ListWrapper = styled.ul`
  padding: 10px 0px;

  @media (max-width: 1024px) {
    padding: 5px 0px;
  }
`;

const List = styled.li`
  font-size: 16px;
  font-weight: 300;
  padding: 6px 0px;
  display: flex;

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 5px 0px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const PillBox = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Pill = styled.span`
  font-size: 16px;
  font-weight: 300;
  background-color: rgb(240 240 240);
  color: #000;
  min-width: 70px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px 3px;
  text-align: center;
  border: 0.5px solid rgb(221, 221, 221);

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    min-width: 60px;
    padding: 6px;
  }
`;

const workData = {
  ozlabs: {
    details: [
      "기존 Vue2 기반의 외주 코드를 Vue3로 마이그레이션 및 리팩토링 작업",
      "모바일 및 태블릿 반응형 인터페이스 구현",
      "파트너사 사이트 및 백오피스 툴 개발",
      "vue-i18n를 활용하여 다국어 지원 대응",
      "일부 페이지 이미지 스프라이트 기법을 통해 이미지 로드 속도 최적화",
      "홍보용 affiliate 싱글 페이지 사이트 개발 - bettingspoonaffilliate.com",
      "사내 프론트엔드 코딩 컨벤션 가이드 정립",
    ],
    stacks: ["Vue", "Vuex", "Javascript", "Github", "Slack", "Jira"],
  },
};

function Experience() {
  const exprienceRef = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.opacity = 1;
          v.target.style.transform = "translateY(0px)";
        } else {
          v.target.style.opacity = 0;
          v.target.style.transform = "translateY(-10px)";
        }
      });
    });
    observer.observe(exprienceRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Work Experience.</SubTitle>
      <FlexBox ref={exprienceRef}>
        <SummaryBox>
          <Subject>
            <a
              href="https://nft.bettingspoon.com/"
              target="_blank"
              rel="noreferrer"
            >
              Ozlabs
              <MdTransitEnterexit />
            </a>
          </Subject>
          <SubText>Web Frontend Developer</SubText>
          <SubText>2022.11 - 현재</SubText>
        </SummaryBox>
        <TextBox>
          <Subject>
            <a href="https://bettingspoon.com" target="_blank" rel="noreferrer">
              Bettingspoon.com 사이트
              <MdTransitEnterexit />
            </a>
          </Subject>
          <SummaryText>
            신입 프론트엔드 개발자로서 글로벌 카지노 게임 플랫폼의 프론트단을
            개발하고 있습니다. 현재 첫 런칭을 마무리했으며, 매주 버그 개선 및
            일부 소소한 기능들을 추가하고 있습니다.
          </SummaryText>
          <DetailSubject>Details</DetailSubject>
          <ListWrapper>
            {workData.ozlabs.details.map((v, i) => (
              <List key={`ozlabs_${i}`}>
                <VscCircleSmall />
                {v}
              </List>
            ))}
          </ListWrapper>
          <DetailSubject>Tech Stacks</DetailSubject>
          <PillBox>
            {workData.ozlabs.stacks.map((v) => (
              <Pill key={v}>{v}</Pill>
            ))}
          </PillBox>
        </TextBox>
      </FlexBox>
    </Wrapper>
  );
}

export default Experience;
