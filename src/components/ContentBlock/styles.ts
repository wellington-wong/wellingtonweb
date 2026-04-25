import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 0rem 0 2.8rem;

  @media only screen and (max-width: 1024px) {
    padding: 3.9rem 0 3.9rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;
export const NewLine = styled("div")`
  p {
    margin: 0;
  }
`;

export const StyledLink = styled("a")`
`;
export const StyledStrong = styled("strong")`
`;
export const StyledSpan = styled("span")`
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};

    .cloud-icon {
      canvas {
        opacity: 0.5
      }
    }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 3.99rem;
  }

  .github-icon {
    font-size: 20px;
    margin-right: 8px;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  > .ant-row {
    .ant-col {
      margin-right: 20px;
    }
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
