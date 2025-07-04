import styled from "@emotion/styled";

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 100px;
  h1 {
    color: var(--Colors-Brand-100, #e84511);
    text-align: center;
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 120px;
    font-style: normal;
    font-weight: 800;
    line-height: 120px;
    letter-spacing: -1.2px;
    text-transform: uppercase;
  }

  p {
    color: var(--Colors-Brand-100, #e84511);
    font-family: "Almarai", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
    width: 50%;
    span {
      padding-left: 55px;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 100px;
    }
  }

  @media (max-width: 800px) {
    gap: 20px;
    padding-bottom: 50px;
    h1 {
      font-size: 65px;
      line-height: inherit;
    }
    p {
      width: 100%;
      font-size: 18px;
      line-height: 1.3;
    }
  }
`;
