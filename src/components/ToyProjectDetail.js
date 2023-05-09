const projectDetail = {
  nft: {
    subject: "NFT 음원 거래 및 스트리밍 사이트",
    period: "2022/08/19 - 2022/09/26",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/pj5.gif`,
    techStack: [
      "Frontend: Next + Typescript / 상태관리 RTK",
      "Backend: NodeJS, web3, Docker",
    ],
    assets: {
      github: "",
      demo: "",
      video: "https://www.youtube.com/watch?v=NHfNNjui88Q",
    },
    intro: [
      "첫 기업 협약 프로젝트 (with Metatrend)",
      "NFT 음원 민팅/거래/경매 및 스트리밍 사이트",
    ],
    roles: [
      "팀장 / git 관리 및 전체 팀원들 코드 리뷰",
      "민팅(음원 발행) 시 피나타로 사진 업로드 및 구글 클라우드로 오디오 파일 업로드 기능",
      "전역 플레이어 및 플레이리스트 기능",
      "미구독자의 경우 미리듣기 30초, 구독자의 경우 전체 듣기 기능 및 재생수(조회수) 기능 구현",
      "ethereum-client/go 라는 도커 이미지 파일을 활용, POA 기반 테스트용 private network 구축",
      "메타마스크와 web3 라이브러리를 이용한 음원 토큰 즉시 판매 및 구매 기능 구현",
    ],
    lessons: [
      "기업 측에서 해당 프로젝트를 더 발전시켜 실제 서비스로 상용화할 계획 중",
    ],
  },
  blockExplorer: {
    subject: "이더리움 기반 block explorer 사이트",
    period: "2022/07/04 - 2022/07/08",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/pj4.gif`,
    techStack: [
      "Frontend: React",
      "Backend: NodeJS, web3, socket.io, Sequelize",
    ],
    assets: {
      github: "https://github.com/yjleeinkr/lovebug_explorer",
      demo: "",
      video: "",
    },
    intro: [
      "이더리움 네트워크 상의 Block 및 거래 정보 조회 사이트 (EtherScan과 같은 컨셉)",
      "채굴된 블럭과 발생한 거래 정보를 실시간으로 조회 및 검색 가능",
    ],
    roles: [
      "geth (이더리움 클라이언트 소프트웨어)를 통한 프라이빗 네트워크 구축",
      "socket.io와 web3 라이브러리를 사용하여 실시간으로 정보 조회 가능하게끔 구현",
      "화면 전체 구성",
    ],
    lessons: [
      "socket.io와 web3 라이브러리를 같이 사용하여 실시간 블록체인 네트워크 상에 업데이트된 데이터들을 다루는 방법을 익히게 되었습니다.",
    ],
  },
  toastApp: {
    subject: "Android App 술자리의 민족",
    period: "2022/05/16 - 2022/05/30",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/pj3.gif`,
    techStack: ["Frontend: React Native + Expo"],
    assets: {
      github: "https://github.com/yjleeinkr/Project_Drunken_Korean",
      demo: "https://play.google.com/store/apps/details?id=com.jjlee.drunkenKorean",
      video: "",
    },
    intro: [
      "건배사하기 민망했던 경험들에서 아이디어를 얻고 만든 안드로이드 앱",
      "랜덤 건배사와 술게임 설명서",
    ],
    roles: [
      "피그마 사용하여 레이아웃 구성",
      "건배사 쪽 랜덤 화면 작업 및 데이터 수집",
      "구글 플레이스토어 배포",
    ],
    lessons: [
      "React Native로 앱 제작하는 방법을 간단하게 배웠고, 웹이 아닌 앱의 배포 과정에 대해서도 간략히 파악하게 되었습니다.",
    ],
  },
  carrotWorld: {
    subject: "중고거래/경매 사이트 Carrol world",
    period: "2022/03/21 - 2022/04/08",
    imgPath: `${process.env.PUBLIC_URL}/assets/project/pj2.gif`,
    techStack: [
      "Frontend: NodeJS",
      "Backend: NodeJS, socket.io, JWT, passport, MySQL",
    ],
    assets: {
      github: "https://github.com/yjleeinkr/carrot_world",
      demo: "",
      video: "https://www.youtube.com/watch?v=TUSVB7_jibI",
    },
    intro: [
      "당근마켓과 중고나라를 모티브로 한 웹사이트",
      "일반적인 중고 거래뿐만 아니라 socket을 통한 경매 및 채팅 가능",
    ],
    roles: [
      "socket.io를 사용한 실시간 채팅 기능 및 채팅방 구현",
      "고객센터 게시판 CRUD 및 댓글 기능 구현",
      "로컬 로그인, 회원가입, 폼체크 기능 구현",
    ],
    lessons: [
      "Express를 사용해 프론트 및 백 서버를 구축해볼 수 있었고, 비동기 통신 처리에 익숙해졌습니다.",
      "socket.io 개념 및 이를 통한 실시간 채팅에 대해서 익힐 수 있었습니다.",
    ],
  },
};

export default projectDetail;