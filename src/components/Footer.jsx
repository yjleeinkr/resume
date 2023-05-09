import styled from "styled-components";

const FooterLayout = styled.footer`
  text-align: right;
  padding: 100px 0px 10px 0px;
  color: #000;
  font-weight: 300;

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 100px 10px 10px 0px;
  }
`;

function Footer() {
  return <FooterLayout>ⓒ 2023 YeonJeong Lee</FooterLayout>;
}

export default Footer;