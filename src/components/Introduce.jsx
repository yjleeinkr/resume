import styled from "styled-components";
import { SubTitle } from "./Common";

const TextBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const ParagraphText = styled.p`
  font-size: 17px;
  font-weight: 300;
  padding: 20px 0px;
  line-height: 28px;
`;

function Profile() {
  return (
      <TextBox>
        <SubTitle>Introduce.</SubTitle>
        <ParagraphText>
          신입 웹 프론트엔드 개발자 이연정입니다. 의류학을 전공해 의류업계 쪽에서 일했지만 UI/UX
          디자인에 관심이 많아 2022년부터 개발 교육 과정을 밟았으며, 현재
          프론트엔드 개발자로서 경험을 쌓고 있는 중입니다. 한 서비스의 첫인상을
          결정하는 건 UI라고 생각하기 때문에 사용하기 매끄럽고 계속 들어가고
          싶은 좋은 서비스를 만드는 개발자가 되고자 합니다.
        </ParagraphText>
      </TextBox>
  );
}

export default Profile;
