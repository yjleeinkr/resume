import styled from "styled-components";
import { SubTitle, Subject, Wrapper } from "./Common";

const TextBox = styled.div`
  padding: 30px 0px;
`;

const SummaryText = styled.p`
  font-size: 17px;
  font-weight: 300;
  padding: 15px 0px;
  line-height: 30px;
`;

const SubTextBolder = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 3px 0px;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 300;
  padding: 3px 0px;
`;

function Education() {
  return (
    <Wrapper>
      <SubTitle>Education.</SubTitle>
      <TextBox>
        <Subject>경일 게임 아카데미</Subject>
        <SubTextBolder>
          블록체인 기반 핀테크 및 응용 SW 개발자 양성과정 수료
        </SubTextBolder>
        <SubText>2021. 12 – 2022. 10</SubText>
        <SummaryText>
          비전공자를 위한 개발자 양성 과정을 10개월 간 수료하였습니다.
          HTML, CSS와 같은 기본적인 마크업 언어부터 시작하여 Javascript의
          기본적인 문법을 습득하였습니다. 그 이후엔 Node.js 환경에서 Express
          서버 구축 및 MySQL 기반 관계형 데이터베이스에 대한 교육을 받았습니다.
          React, Next를 활용한 프론트 구성, AWS EC2 서버 배포 등을 배우는 것을
          끝으로 6~7개월간 웹 프로그래밍에 대해 익힐 수 있었습니다.
          그 이후 3개월 간은 블록체인과 관련된 교육을 받았습니다.
          블록체인, 비트코인, 이더리움에 대한 전반적인 흐름, 개념에 대해 배운 후
          Typescript를 활용하여 비트코인 기반 블록체인을 구현해보았으며, web3
          라이브러리를 사용하여 탈중앙화 앱인 Dapp 제작 및 Solidity를 통한
          스마트 컨트랙트 작성 및 배포 등을 익히면서 블록체인 쪽 개발에 대해
          전반적으로 배울 수 있었습니다. 이외에 교육과정 중 배운 내용을 바탕으로 1~2개월마다 팀 프로젝트를 진행하였으며, 이를 통해 기본적인 git 사용법 및 협업하는 방식에 대해
          익히게 되었습니다.
          <br></br>
          <br></br>
        </SummaryText>
        <Subject>성신여자대학교</Subject>
        <SubTextBolder>
            생활과학대학 의류학과 졸업
        </SubTextBolder>
        <SubText>2011. 03 – 2016. 02</SubText>
      </TextBox>
      <TextBox></TextBox>
    </Wrapper>
  );
}

export default Education;
