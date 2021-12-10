import styled from "styled-components";

export const Form = styled.form.attrs({
  action: "",
})``;

export const FormButton = styled.a.attrs((props) => ({
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

export const FormGrid = styled.div`
  list-style: none;
  margin-left: -10px;
`;

export const FormGridItem = styled.div`
  padding-left: 10px;
  width: 50%;
  min-height: 1px;
  float: left;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 820px) {
    margin-bottom: 30px;
  }
`;

export const FormInput = styled.input.attrs((props) => ({
  type: props.type,
  value: props.value,
}))`
  display: block;
  margin-bottom: 30px;
  padding: 8px 10px;
  border: 1px solid;
  border-radius: 0;
  width: 100%;
  line-height: 1.4;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

export const FormLabel = styled.label.attrs((props) => ({
  id: props.id,
}))`
  display: block;
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
  font-size: 0.8em;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const FormList = styled.ul`
  margin-left: 20px;
`;

export const FormListItem = styled.li`
  margin-bottom: 0;
`;

export const FormSec = styled.main`
  color: #fff;
  padding: 60px 0 260px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const FormSubmit = styled.p`
  display: block;
  margin-bottom: 15px;
`;

export const FormSubmitBtn = styled.button.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  text-align: center;
  border: none;
  padding: 13px, 20px;
  font-size: 18px;
  line-height: 24px;
  outline: none;
  letter-spacing: 0.3em;
  background-color: transparent;
  cursor: pointer;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const FormSuccess = styled.div`
  color: #2ed02e;
  background-color: #f6fff6;
  border-color: #2ed02e;
  border: 1px solid;
  max-width: 440px;
  padding: 6px 12px;
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 18px;
  text-align: left;
`;

export const FormTitle = styled.h1`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 22px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 0;
`;
