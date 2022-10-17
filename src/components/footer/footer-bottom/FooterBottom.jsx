import React from "react";
import styled from "styled-components";
import icon1 from "./icons/twit.svg";
import icon2 from "./icons/facebook.svg";
import icon3 from "./icons/in.svg";
import icon4 from "./icons/instagram.svg";

const Footer = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  flex-basis: 60%;
`;
const Col = styled.div`
  flex-basis: 50%;
  display: flex;
  gap: 30px;
  .ml-auto {
    margin-left: auto;
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`;
const Text = styled.p``;
const Img = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const FooterBottom = () => {
  return (
    <Footer>
      <Row>
        <IconRow>
          <Img src={icon1} />
          <Img src={icon2} />
          <Img src={icon3} />
          <Img src={icon4} />
        </IconRow>
        <TextRow>
          <Col>
            <Text>License Agreement</Text>
            <Text>Privacy Policy</Text>
          </Col>
          <Col>
            <Text className="ml-auto">
              Copyright © 2022 Oct 15, Inc. All rights reserved.
            </Text>
          </Col>
        </TextRow>
      </Row>
    </Footer>
  );
};

export default FooterBottom;
