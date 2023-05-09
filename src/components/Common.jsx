import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px 20px;

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  padding: 5px 0px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
export const Subject = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 5px 0px;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 767px) {
    font-size: 1.1rem;
  }
`;

export const DetailSubject = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0px;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;