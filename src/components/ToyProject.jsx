import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { TbPlaylist, TbCarrot } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { GrPrevious, GrNext } from "react-icons/gr";
import { isMobile, isTablet } from "react-device-detect";
import { SubTitle } from "./Common";
import styles from "./ToyProject.module.css";

const Wrapper = styled.div`
  padding: 20px;
`;

const SlideBox = styled.div`
  padding: 40px 0px;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  overflow: hidden;
  overflow: -moz-scrollbars-none;
  overflow: -webkit-scrollbar;
  display: flex;
  z-index: 20;
  transform: translateX(100px);
  transition: all 0.5s linear;

  &::-webkit-scrollbar {
    display: none;
  }
  &::-moz-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const CardWrapper = styled.div`
  display: flex;
  transition: all 0.4s ease;
  transform: ${(props) => `translateX(${props.movePx}px)`};
`;

const ProjectCard = styled.div`
  min-width: 250px;
  background-color: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08) inset;
  border-radius: 18px;
  padding: 30px;
  box-sizing: border-box;
  margin: 0px 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.02);
  }
`;

const CommonBtn = styled.span`
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.087);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 43%;
  transition: all 0.5s;
`;

const PrevBtn = styled(CommonBtn)`
  left: 0;
  opacity: ${(props) => (props.movePx === 0 ? 0 : 0.7)};
`;

const NextBtn = styled(CommonBtn)`
  right: 0;
  opacity: ${(props) => (props.movePx === -200 ? 0 : 0.7)};

  @media (max-width: 1024px) {
    opacity: ${(props) => (props.movePx === -400 ? 0 : 0.7)};
  }

  @media (max-width: 767px) {
    opacity: ${(props) => (props.movePx === -810 ? 0 : 0.7)};
  }
`;

const projectData = [
  {
    icon: <TbPlaylist className={`${styles.icon} ${styles.purple}`} />,
    title1: "기업 협업 프로젝트",
    title2: "NFT 음원 거래 사이트",
    params: "nft",
    bolder: 2,
  },
  {
    icon: <FaEthereum className={`${styles.icon} ${styles.slate}`} />,
    title1: "이더리움 기반",
    title2: "Block Explorer 사이트",
    params: "blockExplorer",
    bolder: 2,
  },
  {
    icon: <AiOutlineAppstore className={`${styles.icon} ${styles.green}`} />,
    title1: "랜덤 건배사 앱",
    title2: "술자리의 민족",
    params: "toastApp",
    bolder: 1,
  },
  {
    icon: <TbCarrot className={`${styles.icon} ${styles.orange}`} />,
    title1: "중고거래/경매 사이트",
    title2: "Carrot World",
    params: "carrotWorld",
    bolder: 1,
  },
];

function ToyProject({ showModal }) {
  const [movePx, setMovePx] = useState(0);
  const sliderRef = useRef();

  const showDetails = (projectName) => {
    showModal(true, projectName);
  };

  const moveToNext = () => {
    if (!isTablet && isMobile && movePx > -810) {
      setMovePx(movePx - 270);
      console.log('mobile');
      return;
    }
    if (isTablet && movePx > -400) {
      setMovePx(movePx - 200);
      return;
    }
    if (movePx > -200) {
      setMovePx(movePx - 200);
      return;
    }
  };

  const moveToPrev = () => {
     if (!isTablet && isMobile && movePx < 0) {
       setMovePx(movePx + 270);
       return;
     }
    if (movePx < 0) setMovePx(movePx + 200);
  };

  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.transform = "translateX(0px)";
        } else {
          v.target.style.transform = "translateX(100px)";
        }
      });
    });
    observer.observe(sliderRef.current);
  }, []);

  return (
    <Wrapper>
      <SubTitle>Toy Project.</SubTitle>
      <SlideBox>
        <Slider ref={sliderRef}>
          <CardWrapper movePx={movePx}>
            {projectData.map((v, i) => (
              <ProjectCard
                key={`project_${i}`}
                onClick={() => showDetails(v.params)}
              >
                {v.icon}
                <p className={v.bolder === 1 ? styles.bold : ""}>{v.title1},</p>
                <p className={v.bolder === 2 ? styles.bold : ""}>{v.title2}.</p>
              </ProjectCard>
            ))}
          </CardWrapper>
        </Slider>
        <PrevBtn onClick={moveToPrev} movePx={movePx}>
          <GrPrevious />
        </PrevBtn>
        <NextBtn onClick={moveToNext} movePx={movePx}>
          <GrNext />
        </NextBtn>
      </SlideBox>
    </Wrapper>
  );
}

export default ToyProject;
