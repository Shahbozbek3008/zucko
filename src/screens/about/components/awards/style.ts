import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Text, TextProps, Title } from "@mantine/core";

export const AwardsSection = styled.div`
  padding: 100px 50px;
  background-color: ${COLORS.MAIN_WHITE};

  @media (max-width: 800px) {
    padding: 60px 20px;
  }
`;

export const AwardsTitle = styled(Text)`
  color: ${COLORS.MAIN_COLOR};
  font-family: "Almarai", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 15px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionText = styled(Title)`
  font-size: 60px;
  color: ${COLORS.MAIN_COLOR};
  font-weight: 800;
  font-family: "Big Shoulders Display", sans-serif;
  text-transform: uppercase;
  line-height: 60px; /* 100% */
  letter-spacing: -0.6px;
  margin-bottom: 20px;
  & > span {
    display: block;
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 1;
    margin-top: 40px;
    & > span {
      margin-bottom: 8px;
    }
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  border-bottom: 1px solid #ff5733;
  &:last-of-type {
    border-bottom: none;
  }
  @media (max-width: 800px) {
    padding: 30px 0;
  }
`;

export const TableCell = styled(Text)<React.PropsWithChildren<TextProps>>`
  font-size: 16px;
  color: #333;
  font-weight: 600;
  color: ${COLORS.MAIN_COLOR};
  font-family: "Almarai", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
