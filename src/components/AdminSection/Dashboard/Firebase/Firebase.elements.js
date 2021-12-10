import styled from "styled-components";

export const FirebaseTitle = styled.div`
  color: black;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const FirebaseForm = styled.form`
  margin: 30px auto 10px;
  text-align: center;
  color: black;
`;

export const FirebaseLabel = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid #efb6b2;
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: #efb6b2;
  font-weight: bold;
  font-size: 24px;

  &:hover {
    color: #fff;
    transition: all 0.3s ease;
    background: #efb6b2;
  }
`;

export const FirebaseInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

export const FirebaseOutput = styled.output`
  height: 60px;
  font-size: 0.8rem;
`;

export const FirebaseError = styled.div`
  color: #ff4a4a;
`;

export const FirebaseImgGrid = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

 

  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  }
`;
export const FirebaseImgWrapper = styled.div`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;
`;

export const FirebaseImg = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const FirebaseBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

`

export const FirebaseBackdropImg = styled.img`

display: block;
  max-width: 60%;
  max-width: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid #fff;

`
