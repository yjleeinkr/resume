import styled from "styled-components";
import { TbPlaylist, TbCarrot } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { SubTitle } from "./Common";
import styles from "./ToyProject.module.css"

const Wrapper = styled.div`
  padding: 20px;
`;

const SlideBox = styled.div`
  padding: 40px 0px;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  overflow: scroll;
  overflow: -moz-scrollbars-none;
  overflow: -webkit-scrollbar;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-moz-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ProjectCard = styled.div`
  width: 400px;
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

function ToyProject({ showModal }) {
  const showDetails = (projectName) => {
    showModal(true, projectName);
  }
  return (
    <Wrapper>
      <SubTitle>Toy Project.</SubTitle>
      <SlideBox>
        <Slider>
          <ProjectCard onClick={() => showDetails("nft")}>
            <TbPlaylist className={`${styles.icon} ${styles.purple}`} />
            <div>
              <p>기업 협업 프로젝트,</p>
              <p>NFT 음원 거래 사이트.</p>
            </div>
          </ProjectCard>
          <ProjectCard onClick={() => showDetails("blockExplorer")}>
            <FaEthereum className={`${styles.icon} ${styles.slate}`} />
            <div>
              <p>이더리움 기반,</p>
              <p>Block Explorer 사이트.</p>
            </div>
          </ProjectCard>
          <ProjectCard onClick={() => showDetails("toastApp")}>
            <AiOutlineAppstore className={`${styles.icon} ${styles.green}`} />
            <div>
              <p>랜덤 건배사 앱,</p>
              <p>술자리의 민족.</p>
            </div>
          </ProjectCard>
          <ProjectCard onClick={() => showDetails("carrotWorld")}>
            <TbCarrot className={`${styles.icon} ${styles.orange}`} />
            <div>
              <p>중고거래/경매 사이트,</p>
              <p>Carrot World</p>
            </div>
          </ProjectCard>
        </Slider>
      </SlideBox>
    </Wrapper>
  );
}

export default ToyProject;
