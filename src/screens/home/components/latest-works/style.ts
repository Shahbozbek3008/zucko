import styled from "@emotion/styled";

interface SectionProps {
  bgImage: string;
}

export const Section = styled.section<SectionProps>`
  padding: 100px 50px;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  h1 {
    color: #fff;
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 120px;
    font-style: normal;
    font-weight: 700;
    line-height: 120px;
    text-transform: uppercase;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    height: 100%;
    h1 {
      font-size: 100px;
    }
  }
  @media (max-width: 800px) {
    height: 100%;
    h1 {
      font-size: 65px;
    }
  }
`;
