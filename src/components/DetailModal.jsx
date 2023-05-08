import styled, { keyframes } from 'styled-components';
import { CgClose } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { BiVideo } from "react-icons/bi";
import projectDetail from './ToyProjectDetail'

const modalAnimation = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0px;
  }
`;

const modalLayerAnimation = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const ModalLayer = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  animation: ${modalLayerAnimation} 0.3s;

  .invisibleLayer {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
`;

const Modal = styled.div`
  width: 90%;
  max-width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 10px;
  animation: ${modalAnimation} 0.3s;
  z-index: 10;
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .closingBtn {
    background: #e8e8ed;
    border-radius: 50%;
    color: #000;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    cursor: pointer;
  }
  h1 {
    font-size: 25px;
  }
`;

const ModalBody = styled.section`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

const SummaryBox = styled.div`
  width: 45%;

  ul li {
    padding: 10px 0px;
  }

  .subject {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 5px;
  }

  .text {
    font-weight: 300;
    padding: 2px 0px;
    font-size: 13px;
  }
  .assetsBox {
    .pill {
      display: inline-flex;
      align-items: center;
      background-color: #000;
      color: #fff;
      font-size: 12px;
      padding: 10px;
      width: fit-content;
      cursor: pointer;
      margin-right: 10px;
      border-radius: 5px;

      .icon {
        margin-right: 5px;
      }
    }
  }
`;

const DetailBox = styled.div`
  width: 53%;

  ul li {
    padding: 10px;
  }
  .subject {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 5px;
  }

  .text {
    font-weight: 300;
    padding: 2px 0px;
    font-size: 14px;
    line-height: 22px;
  }
`;

const Img = styled.img`
  width: 100%;
`

function DetailModal({ isModalVisible, showModal, project }) {
  const contents = projectDetail[project];

  const hideModal = () => {
    showModal(false, '')
  }
  return (
    <ModalLayer isVisible={isModalVisible}>
      <div className="invisibleLayer" onClick={hideModal}></div>
      <Modal>
        <ModalHeader>
          <span className="closingBtn" onClick={hideModal}>
            <CgClose />
          </span>
          <h1>{contents?.subject}</h1>
        </ModalHeader>
        <ModalBody>
          <SummaryBox>
            <Img src={contents?.imgPath} alt="project_video" />
            <ul>
              <li>
                <span className="subject">Period.</span>
                <p className="text">{contents?.period}</p>
              </li>
              <li>
                <span className="subject">Tech Stack.</span>
                {contents?.techStack.map((tech, i) => (
                  <p className="text" key={`stack_${i}`}>
                    {tech}
                  </p>
                ))}
              </li>
              <li className="assetsBox">
                {contents?.assets.github !== "" && (
                  <span className="pill">
                    <BsGithub className="icon" />
                    Github
                  </span>
                )}
                {contents?.assets.demo !== "" && (
                  <span className="pill">
                    <CgWebsite className="icon" />
                    Demo
                  </span>
                )}
                {contents?.assets.video !== "" && (
                  <span className="pill">
                    <BiVideo className="icon" />
                    Video
                  </span>
                )}
              </li>
            </ul>
          </SummaryBox>
          <DetailBox>
            <ul>
              <li>
                <span className="subject">Intro.</span>
                {contents?.intro.map((intro, i) => (
                  <p className="text" key={`intro_${i}`}>
                    - {intro}
                  </p>
                ))}
              </li>
              <li>
                <span className="subject">My R&R.</span>
                {contents?.roles.map((role, i) => (
                  <p className="text" key={`role_${i}`}>
                    - {role}
                  </p>
                ))}
              </li>
              <li>
                <span className="subject">Achievements.</span>
                {contents?.lessons.map((lesson, i) => (
                  <p className="text" key={`lesson_${i}`}>
                    - {lesson}
                  </p>
                ))}
              </li>
            </ul>
          </DetailBox>
        </ModalBody>
      </Modal>
    </ModalLayer>
  );
}

export default DetailModal;
