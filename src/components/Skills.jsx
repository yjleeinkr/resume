import { useEffect, useRef } from "react";
import styled from "styled-components";
import { DiJavascript1, DiReact, DiNodejsSmall } from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { BiGitBranch } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SubTitle, Wrapper } from "./Common";

const Container = styled.div`
  margin: 40px 0px;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.7s linear;
`;
const FlexBox = styled.div`
  padding: 20px 0px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 0.5px solid rgb(221, 221, 221);

  .icon {
    font-size: 45px;
    margin-right: 40px;
  }
`;

const TextBox = styled.div`
  width: 90%;
`;

const SubTextBolder = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 3px 0px;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 300;
  padding: 3px 0px;
  line-height: 25px;

  .bold {
    font-weight: 400;
  }
`;

function Skills() {
  const containerRef = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.opacity = 1;
          v.target.style.transform = "translateX(0px)";
        } else {
          v.target.style.opacity = 0;
          v.target.style.transform = "translateX(30px)";
        }
      });
    });
    observer.observe(containerRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Skills.</SubTitle>
      <Container ref={containerRef}>
        <FlexBox>
          <RiVuejsFill className="icon" />
          <TextBox>
            <SubTextBolder>Vue</SubTextBolder>
            <SubText>
              Vue2의 option API 또는 Vue3 composition API를 통한 컴포넌트 작성
              및 기능 구현에 능숙하며, vuex를 통한 전역 상태 관리를 할 수
              있습니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <DiReact className="icon" />
          <TextBox>
            <SubTextBolder>React</SubTextBolder>
            <SubText>
              재사용 가능한 함수형 컴포넌트 작성이 가능하며 styled-components
              작성에 능숙하며, Redux-thunk, saga, RTK, Recoil과 같은 상태 관리,
              변경 툴 사용이 가능합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <SiNextdotjs className="icon" />
          <TextBox>
            <SubTextBolder>Next</SubTextBolder>
            <SubText>
              Next의 pre-rendering 방식 SSR이나 SSG에 대해 이해하며 구현
              가능하며 라우팅, 이미지 최적화 등 Next가 제공하는 기본 기능 활용이
              가능합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <DiJavascript1 className="icon" />
          <TextBox>
            <SubTextBolder>Javascript</SubTextBolder>
            <SubText>
              자바스크립트 문법에 익숙하며, Jquery 없이 DOM을 다루는데
              능숙합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <SiTypescript className="icon" />
          <TextBox>
            <SubTextBolder>Typescript</SubTextBolder>
            <SubText>
              타입스크립트 기본 문법을 이해하여 React에서 상태나 변수, 함수에
              대한 타입 및 인터페이스 작성이 가능합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <DiNodejsSmall className="icon" />
          <TextBox>
            <SubTextBolder>NodeJS</SubTextBolder>
            <SubText>
              express를 활용하여 서버 구축 및 DB와 연동 가능하며 웹사이트의 기본
              기능인 CRUD가 가능합니다. RESTful한 API에 대한 고민을 하며 그에
              기반한 라우터 작성을 하려고 노력합니다. Socket.io 나 websocket을
              사용하여 실시간 통신 구현이 가능합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <GrMysql className="icon" />
          <TextBox>
            <SubTextBolder>MySql</SubTextBolder>
            <SubText>
              DB schema 설정 및 데이터 추가, 조회, 수정, 삭제를 위한 query 문
              작성이 가능하며, sequelize와 같은 ORM 라이브러리 세팅 및 사용이
              가능합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <BiGitBranch className="icon" />
          <TextBox>
            <SubTextBolder>Tools</SubTextBolder>
            <SubText>
              <span className="bold">Git : </span>현재 git flow 브랜치 구조
              하에서 업무를 진행 중이라 브랜치별 특성을 인지하고 기능별 브랜치나
              급한 수정의 경우 hotFix 브랜치로 작업하여 커밋, 머지하는 등의
              업무가 가능합니다.
            </SubText>
            <SubText>
              <span className="bold">Jira : </span> Jira를 통해 기획 및 QA
              쪽에서 발견한 bug 및 release별 기능 추가에 대한 task 관리를 하며,
              전체적인 업무 진행 상황에 대해 파악합니다.
            </SubText>
            <SubText>
              <span className="bold">Figma : </span>프로젝트 진행 시 방향성 및
              필요한 데이터 파악을 위한 화면 레이아웃 구성을 할 수 있습니다.
            </SubText>
          </TextBox>
        </FlexBox>
      </Container>
    </Wrapper>
  );
}

export default Skills;
