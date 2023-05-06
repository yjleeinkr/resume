import styled from "styled-components";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { SiTistory } from "react-icons/si";
import styles from './Profile.module.css'
import { Title } from "./Common";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const ImgBox = styled.img`
  width: 28%;
`;

const TextBox = styled.div`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 100;
  display: flex;
  align-items: center;
  &:hover {
    color: slategrey;
    transition: linear 0.3s;
    cursor: pointer;
  }
  padding: 7px 0px;
`;

const NonHoverText = styled(Text)`
  &:hover{
    color: #000;
    cursor: default;
  }
`

function Profile() {
  return (
    <Wrapper>
      <ImgBox src="profile_img.png" alt="my_profile" />
      <TextBox>
        <Title>이연정</Title>
        <p className={styles.introduceText}>
          좋은 서비스에 대해 고민할 줄 아는 개발자가 되고자 합니다.
        </p>
        <Text>
          <HiOutlineMail className={styles.icons} />
          <a href="mailto:yjleeinkr@gmail.com">yjleeinkr@gmail.com</a>
        </Text>
        <NonHoverText>
          <HiPhone className={styles.icons} />
          채용 사이트에 나와 있는 번호로 연락 부탁드립니다.
        </NonHoverText>
        <Text>
          <GoMarkGithub className={styles.icons} />
          <a
            href="https://github.com/yjleeinkr?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/yjleeinkr
          </a>
        </Text>
        <Text>
          <SiTistory className={styles.icons} />
          <a
            href="https://yjleekr.tistory.com"
            target="_blank"
            rel="noreferrer"
          >
            https://yjleekr.tistory.com
          </a>
        </Text>
      </TextBox>
    </Wrapper>
  );
}

export default Profile;