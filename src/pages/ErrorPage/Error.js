import React from "react";
import { InfoSec, TextWrapper } from "../../components/InfoSection/InfoSection.elements";
import { Container } from "../../globalStyles";

const Error = () => {
  return (
    <>
      <InfoSec>
          <Container>
              <TextWrapper>Page Not Found</TextWrapper>
          </Container>
      </InfoSec>
    </>
  );
};

export default Error;
