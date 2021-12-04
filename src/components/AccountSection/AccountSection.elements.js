import styled from "styled-components";

export const AcctButton = styled.a.attrs((props) => ({
  to: props.to,
}))`
  border: 1px solid;
  background-color: transparent;
  border-color: black;
  line-height: 1.42;
  letter-spacing: 0.3em;
  text-align: center;
  padding: 8px 14px;
  min-width: 90px;
  border-radius: 3px;
  margin-top: 10px;
  text-decoration: "none";
  color: black;
  cursor: pointer;
`;

export const AcctContainer = styled.div`
  padding: 75px 40px;
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 40px 17px;
  }
`;

export const AcctHeader = styled.header`
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const AcctGrid = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: -22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 88px;
  grid-template-areas: "ORDER ORDER ACCOUNT";
  @media screen and (max-width: 768px) {
    margin-left: -17px;
    grid-template-areas:
      "ORDER . ."
      "ACCOUNT . .";
    grid-auto-rows: minmax(132px, auto);
  }
`;

export const AcctGridItem = styled.div`
  float: left;
  min-height: 1px;
  padding-left: 22px;
  grid-area: ${({ area }) => area};

  @media screen and (max-width: 768px) {
    padding-left: 17px;
  }
`;

export const AcctLink = styled.link`
  text-decoration: none;
  background: 0 0;
  color: black;
`;

export const AcctNav = styled.nav`
  font-size: 11px;
  margin: 0.25px 0 10px;
  text-align: center !important;
  color: black;

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const AcctSec = styled.main`
  color: #fff;
  padding: 60px 0 260px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const AcctSpan = styled.span``;

export const AcctSubtitle = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 1.4;
  color: black;
`;

const StyledHeading = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  color: black;
  font-size: 22px;
  line-height: 16px;
  letter-spacing: 0.1em;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Heading = ({ level, ...rest }) => {
  return <StyledHeading as={`h${level}`} {...rest} />;
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
