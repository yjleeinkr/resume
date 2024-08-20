import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdTransitEnterexit } from "react-icons/md";
import { VscCircleSmallFilled } from "react-icons/vsc";
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
const SubTextBold = styled.p`
  color: #222;
  font-size: 16px;
  font-weight: 500;
  padding: 3px 0px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const ListWrapper = styled.div`
  padding: 10px;

  @media (max-width: 1024px) {
    padding: 5px 0px;
  }
`;

const ListUl = styled.ul`
  border-bottom: solid 1px #ddd;
  margin-bottom: 20px;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`;

const List = styled.li`
  font-size: 16px;
  font-weight: 300;
  padding: 6px 0px;
  display: flex;
  flex-direction: column;

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

const workData = [
  {
    company: {
      name: "베러웨이시스템즈",
      site: "https://www.betterwaysystems.com/ko/company",
    },
    role: "Web Frontend Developer",
    period: "2023.06 - 현재",
    project: [
      {
        name: "레드프린팅 모바일 웹앱",
        link: "https://m.redprinting.co.kr",
        subText: "모바일에서 확인 부탁드립니다.",
      },
    ],
    summary: `다양한 커스텀 제품을 판매하는 사이트의 모바일 웹앱 프론트를 담당하여 모바일 기준 하루 평균 700명의 유저가 사용하는 사이트를 유지보수하고 있습니다. 모바일 사용자 증가에 따라 기존 PC 버전에만 있던 기능들을 모바일에 추가하여 사용성을 개선하고 있습니다.`,
    details: [
      {
        title: "랜딩페이지 전체 리뉴얼 및 리팩토링",
        list: [
          {
            subtitle: "페이지 로딩 최적화",
            contents:
              "기존 랜딩 페이지는 첫 로드 시 모든 이미지를 불러와 로딩 시간이 길고, 우선 노출되어야 할 이미지가 늦게 나타나는 문제가 있었습니다. 이미지 lazy loading 및 priority 설정을 통해 초기 로드 용량을 줄이고, 화면에 먼저 노출되는 대광고 슬라이드의 1~2번째 이미지나 기획전 이미지 등을 먼저 로드하여 사이트 로딩 속도를 대폭 개선했습니다.",
          },
          {
            subtitle: "중복 코드 제거",
            contents:
              "제품 이미지, 제품명, 가격 등을 각 페이지마다 중복된 코드로 구현했던 부분을 컴포넌트화하여 중복 코드를 제거했습니다. 찜 및 SNS 공유 버튼 등 다양한 기능을 컴포넌트로 통합해 유지보수성을 높였습니다.",
          },
          {
            subtitle: "메모리 누수 방지 및 성능 최적화",
            contents:
              "이벤트 리스너 및 타이머 함수가 해제되지 않아 발생하는 메모리 누수를 방지하기 위해 vue의 컴포넌트 생명 주기 훅 중 beforeDestroy 또는 unmounted 훅에서 이벤트 해제 코드를 추가했습니다. 또한 제품 검색 시 타이핑마다 요청을 보내지 않도록 debounce를 적용하고, 스크롤 시 발생하는 작업에 throttle을 적용하여 성능을 최적화하는 등의 작업을 했습니다.",
          },
          {
            subtitle: "YouTube API 활용한 작업",
            contents:
              "YouTube API를 활용해 쇼츠 기능을 추가하고, Youtube에서 제공된 썸네일 및 정보로 디자이너의 요청에 최대한 맞춰 사이트 디자인을 개선했습니다.",
          },
        ],
      },
      {
        title: "사내 제품 주문 위젯 및 에디터 SDK 활용",
        list: [
          {
            subtitle: "커스텀 제품 주문 시스템 구축",
            contents:
              "사용자가 옵션을 선택할 수 있는 위젯과 이미지를 첨부하고 편집할 수 있는 에디터를 활용하여 모바일에서도 커스텀 제품 40여 종과 완제품 100여 종을 주문할 수 있는 시스템을 구축했습니다. 사내 다른 개발자들이 만든 SDK를 써보며 이해하고 질문하는 과정을 통해 도메인 지식을 습득하고 협업 능력을 향상시킬 수 있었습니다.",
          },
        ],
      },
      {
        title: "비회원 관련 기능 추가",
        list: [
          {
            subtitle: "비회원 기능 확장",
            contents:
              "기존에는 모바일에서 비회원이 주문 조회, 배송 변경, 결제 진행 및 1:1 문의를 할 수 없었습니다. 비회원도 이러한 기능을 모바일에서 쉽게 이용할 수 있도록 추가하여 사용성을 개선했습니다.",
          },
          {
            subtitle: "에디터 및 장바구니 기능 추가",
            contents:
              "모바일 버전에서는 로그인 없이 에디터를 사용하거나 장바구니에 상품을 담을 수 없어 비회원에게 폐쇄적이라 생각했습니다. 이를 개선하기 위해 비회원도 에디터를 사용하고 주문할 수 있는 기능을 개발했습니다. 백엔드 서버를 거치지 않고 프론트의 서버사이드에서 임시 랜덤 세션 아이디를 발급해 몽고디비에 저장하고 하루 동안만 유지되는 방식을 사용했으며 현재 운영 전 단계에서 QA 중입니다.",
          },
        ],
      },
      {
        title: "청첩장 사이트 백오피스 리뉴얼",
        list: [
          {
            subtitle: "",
            contents:
              "기존 청첩장 사이트는 백오피스 사이트없이 PC에 설치된 구형 ERP 프로그램을 사용하여 디자인에 맞는 생산 코드를 입력하고 관리하였습니다. 이로 인해 기획 및 디자인 팀은 특정 PC에서만 작업할 수 있어 시간과 장소에 제한을 받았습니다. 또한, 배너 및 프로모션 관리 등의 전반적인 사이트의 업데이트 작업의 대부분이 개발자가 직접 하드코딩하는 방식으로 진행되어 매우 비효율적이었습니다. 이러한 문제를 해결하기 위해 어디서든 접속 가능한 백오피스 시스템 구축 프로젝트에 참여하였습니다. Next.js 및 Ant Design UI 라이브러리를 사용하며 배너 관리, 제품 키워드 관리, 1:1 문의 관리, 후기 관리 기능을 구현했고 새로운 컨셉의 Next 13 버전을 빠르게 익힐 수 있었습니다.",
          },
        ],
      },
    ],
    stacks: ["Nuxt/Vue", "Next/React", "Javascript", "TypeScript", "NodeJS"],
  },
  {
    company: { name: "오즈랩스", site: "" },
    role: "Web Frontend Developer",
    period: "2022.11 - 2023.05",
    project: [
      {
        name: "bettingspoon.com 사이트",
        link: "",
        subText: "회사 폐업으로 현재 사이트 접속 불가",
      },
    ],
    summary: `     신입 프론트엔드 개발자로 글로벌 카지노 게임 플랫폼 웹 서비스를 메인으로 담당했고 이후 관련 제휴사 사이트, 백오피스의 프론트단을 개발했습니다.`,

    details: [
      {
        title: "vue 버전업 및 리팩토링",
        list: [
          {
            subtitle: "option API에서 composition API로의 마이그레이션",
            contents:
              "입사 당시 외주사에서 제공받은 코드는 option API로 작성되어 있었습니다. 해당 버전이 곧 지원 종료될 예정임을 파악하고 composition API로 마이그레이션 작업을 주도했습니다. 이 과정에서 option API와 composition API의 차이점을 학습하고 비교하며, 다양한 버전의 코드 작성에 유연하게 적응할 수 있었습니다.",
          },
          {
            subtitle: "사내 코딩 컨벤션 가이드 정립",
            contents:
              "외주사에서 제공받은 코드와 이전에 여러 사람들이 작업한 코드가 혼재되어 개발 코드의 코딩 컨벤션이 일관되지 않았습니다. 이러한 문제를 해결하고자 주도적으로 사내 코딩 컨벤션을 정립할 것을 제안하였습니다. 팀원들과 함께 선호하는 코딩 스타일과 그 이유에 대해 논의한 후 이를 바탕으로 가이드를 작성하였습니다. 코딩 컨벤션 가이드 도입 이후 코드 스타일이 통일되어 가독성이 크게 향상되어 코드 유지보수 및 협업 효율성이 크게 개선되었습니다.",
          },
          {
            subtitle: "코드 리팩토링 및 최적화",
            contents:
              "마이그레이션 과정에서 코드 리팩토링을 동시에 진행했습니다. 코드 내 중복된 부분이 많았는데, 단적인 예로 모든 axios 요청 코드에 baseURL 및 headers가 반복 작성되어 불필요한 작업이 많았습니다. axios의 create 및 interceptors 기능을 활용해 이러한 반복된 코드를 간결화하였고, 로그인 토큰 만료 시에도 로그인이 풀리지 않는 버그를 해결했습니다.",
          },
          {
            subtitle: "이미지 스프라이트 기법 적용",
            contents:
              "사이트 내에서 게임 레벨에 따른 NFT 캐릭터 설명이나 채팅 이모티콘 등 고정된 정적 이미지가 많았습니다. 한 페이지에서 40개 이상의 고정 이미지를 매번 가져오는 것은 비효율적이라 판단하여 여러 개의 이미지를 하나로 결합하고 CSS를 통해 위치를 조정하는 이미지 스프라이트 기법을 적용했습니다. 이를 통해 HTTP 요청 수를 줄이고, 브라우저가 이미지를 한 번만 다운로드하도록 해 웹 페이지 로딩 속도를 향상시켰습니다.",
          },
        ],
      },
      {
        title: "vue-i18n을 활용한 다국어 지원",
        list: [
          {
            subtitle: "",
            contents:
              "해당 사이트는 카지노 허용 국가에서만 오픈될 예정이었기 때문에 기본 언어는 영어로 설정해야 했습니다. 그러나 회사에서 발행한 NFT 소유자들 대부분이 한국인이었고 VPN을 통해서 접근할 수 있었기에 한국어 지원도 필요했습니다. 또한 추후 일본어, 베트남어 등 추가적인 언어 지원 계획이 있어 다국어 지원이 필수적이었습니다.",
          },
          {
            subtitle: "초기 다국어 지원 방식",
            contents:
              " 처음에는 기획자가 구글 스프레드시트에 번역 내용을 입력하면, 이를 JSON 파일로 변환해 프론트엔드 개발자가 정적 파일로 프로젝트에 포함시키고 배포하는 방식을 사용했습니다. 하지만 이 방식은 사이트에 새로운 기능이 계속 추가되는 상황에서 번역 내용의 수정이나 추가 시마다 JSON 파일을 다시 변환하고 배포해야 했기 때문에 비효율적이었습니다.",
          },
          {
            subtitle: "효율적인 다국어 관리 시스템 도입",
            contents:
              "이러한 비효율성을 개선하기 위해 백오피스 작업을 통해 JSON 파일에 직접 손을 대지 않도록 시스템을 개선했습니다. 기획자가 백오피스에서 특정 단어나 문장의 키를 클릭해 추가, 수정, 삭제할 수 있는 기능을 구현했습니다. 수정 후 배포 버튼을 누르면 AWS 상에 자동으로 배포되도록 백엔드 개발자와 협업하여 효율적인 다국어 지원 시스템을 구축했습니다. 이를 통해 관련 담당자들의 번거로움을 크게 줄이고, 다국어 지원의 신속성과 정확성을 높일 수 있었습니다.",
          },
        ],
      },
      {
        title: "제휴사 사이트 및 백오피스",
        list: [
          {
            subtitle: "",
            contents:
              "회사의 NFT 소유자 및 하위 고객을 대상으로 하는 제휴사 수익 정산 시스템을 개발했습니다. 이 시스템은 제휴사들이 소속된 하위 고객들을 관리하고 정산 내역을 효율적으로 확인할 수 있는 전용 웹 사이트로, 기획자가 기능적인 요구 사항만 제시하고 화면 구조는 개발팀 내에서 자체적으로 설계 및 구현했습니다. 또한 제휴사 고객들에게 피드백을 받아 실제 사용자의 요구를 반영해보는 경험을 할 수 있었고 이를 통해 프로젝트마다 사용자 편의성을 고려한 UI 설계와 적용에 중점을 두게 되었습니다. ",
          },
        ],
      },
    ],
    stacks: ["Vue", "Javascript"],
  },
];

function Experience() {
  const exprienceRef = useRef([]);
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
    exprienceRef.current.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Wrapper>
      <SubTitle>Work Experience.</SubTitle>
      {workData.map((data, i) => (
        <FlexBox key={i} ref={(el) => (exprienceRef.current[i] = el)}>
          <SummaryBox>
            <Subject>
              <a href={data.company.site} target="_blank" rel="noreferrer">
                {data.company.name}
                {data.company.site && <MdTransitEnterexit />}
              </a>
            </Subject>
            <SubText>{data.role}</SubText>
            <SubText>{data.period}</SubText>
          </SummaryBox>
          {data.project.map((project) => (
            <TextBox key={project.name}>
              <Subject>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                  {project.link && <MdTransitEnterexit />}
                  <SubText>{project.subText}</SubText>
                </a>
              </Subject>
              <SummaryText>{data.summary}</SummaryText>
              <DetailSubject>Details.</DetailSubject>
              <ListWrapper>
                {data.details.map((detail, i) => (
                  <ListUl key={`detail-${i}`}>
                    <DetailSubject>{detail.title}</DetailSubject>
                    {detail.list.map((v, j) => (
                      <List key={`${i}-${j}`}>
                        <SubTextBold>
                          {" "}
                          {v.subtitle && <VscCircleSmallFilled />}
                          {v.subtitle}
                        </SubTextBold>
                        <SubText>{v.contents}</SubText>
                      </List>
                    ))}
                  </ListUl>
                ))}
              </ListWrapper>
              <DetailSubject>Tech Stacks</DetailSubject>
              <PillBox>
                {data.stacks.map((v) => (
                  <Pill key={v}>{v}</Pill>
                ))}
              </PillBox>
            </TextBox>
          ))}
        </FlexBox>
      ))}
    </Wrapper>
  );
}

export default Experience;
