import styled from "@emotion/styled";

export const Header = styled("header")`
  width: 100%;
  position: fixed;
  z-index: 10;
  padding: 35px 50px 0 50px;
  a {
    cursor: pointer;
  }
  .burger {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    padding: 20px 20px 0 20px;
  }
`;
