import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 820px) {
    margin-bottom: 30px;
  }
`;

export const FormContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 75px 40px;
  max-width: 450px;
  @media screen and (max-width: 768px) {
    padding: 40px 17px;
    margin: 0 auto;
  }
`;

export const FormContent = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

export const FormSubmit = styled.p`
display: block;
margin-bottom: 15px;
`

export const FormError = styled.div`
  color: #d02e2e;
  background-color: #fff6f6;
  border-color: #d02e2e;
  border: 1px solid;
  max-width: 440px;
  padding: 6px 12px;
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 18px;
  text-align: left;
`;

export const FormListItem = styled.li`
  margin-bottom: 0;
`;

export const FormTitle = styled.h1`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 22px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 0;
`;

export const FormList = styled.ul`
  margin-left: 20px;
`;

export default GlobalStyle;
