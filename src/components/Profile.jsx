import styled from "styled-components";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { SiTistory } from "react-icons/si";
import { Title, Wrapper } from "./Common";

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImgBox = styled.img`
  width: 28%;
`;

const TextBox = styled.div`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;

  .introduceText {
    padding: 10px 0px;
    font-size: 15px;
    font-weight: 400;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 100;
  display: flex;
  align-items: center;
  padding: 7px 0px;

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
  return (
    <FlexWrapper>
      <ImgBox src="profile_img.png" alt="my_profile" />
      <TextBox>
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
          채용 사이트에 나와 있는 번호로 연락 부탁드립니다.
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