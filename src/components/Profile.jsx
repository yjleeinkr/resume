import { useEffect, useRef } from "react";
import styled from "styled-components";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { SiTistory } from "react-icons/si";
import { Title, Wrapper } from "./Common";

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ImgBox = styled.img`
  width: 28%;
  opacity: 0.5;
  transform: translateY(-20px);
  transition: all 0.7s;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

const TextBox = styled.div`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0.5;
  transform: translateY(-20px);
  transition: all 0.7s;

  .introduceText {
    padding: 10px 0px;
    font-size: 15px;
    font-weight: 400;

    @media (max-width: 767px) {
      font-size: 16px;
      padding: 5px 0px;
      font-weight: 300;
    }
  }

  @media (max-width: 1024px) {
    width: 68%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 100;
  display: flex;
  align-items: center;
  padding: 7px 0px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    padding: 5px 0px;
  }

  &:hover {
    color: #0c80bf;
    transition: linear 0.3s;
    cursor: pointer;
  }
  a:hover {
    color: #0c80bf;
    transition: linear 0.3s;
    cursor: pointer;
  }
  .icons {
    margin-right: 10px;
    font-size: 15px;
  }
`;

const NonHoverText = styled(Text)`
  &:hover {
    color: #000;
    cursor: default;
  }
  .icons {
    margin-right: 10px;
    font-size: 15px;
  }
`;

function Profile() {
  const imgRef = useRef();
  const profileRef = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.opacity = 1;
          v.target.style.transform = "translateY(0px)";
        } else {
          v.target.style.opacity = 0;
          v.target.style.transform = "translateY(-20px)";
        }
      });
    });
    observer.observe(profileRef.current);
    observer.observe(imgRef.current);
  }, []);
  return (
    <FlexWrapper>
      <ImgBox src={`${process.env.PUBLIC_URL}/profile_img.png`} alt="my_profile" ref={imgRef} />
      <TextBox ref={profileRef}>
        <Title>이연정</Title>
        <p className="introduceText">
          좋은 서비스에 대해 고민할 줄 아는 개발자가 되고자 합니다.
        </p>
        <Text>
          <HiOutlineMail className="icons" />
          <a href="mailto:yjleeinkr@gmail.com">yjleeinkr@gmail.com</a>
        </Text>
        <NonHoverText>
          <HiPhone className="icons" />
          채용 사이트 상의 번호로 연락 부탁드립니다.
        </NonHoverText>
        <Text>
          <GoMarkGithub className="icons" />
          <a
            href="https://github.com/yjleeinkr?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/yjleeinkr
          </a>
        </Text>
        <Text>
          <SiTistory className="icons" />
          <a
            href="https://yjleekr.tistory.com"
            target="_blank"
            rel="noreferrer"
          >
            https://yjleekr.tistory.com
          </a>
        </Text>
      </TextBox>
    </FlexWrapper>
  );
}

export default Profile;