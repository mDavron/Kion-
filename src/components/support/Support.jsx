import React from "react";
import { Section, Row, Col, Content,Menu,Link,BoxImg,Img } from "./style";
import SupportBottom from "./SupportBottom";

const Support = () => {
  return (
    <Section id="support">
      <div className="_container-fluid">
      <Row>
        <Col>
          <Content>
            <Content.Heading>The Kion <br /> Difference</Content.Heading>
            <Content.Text>
              We deliver more than just the features to manage and govern your
              cloud. Kion gives you a comprehensive solution for your cloud to
              enable your organization to achieve more.
            </Content.Text>
            <Menu>
             <Menu.Title>Our Differences</Menu.Title>
             <Menu.List>Cloud-native access</Menu.List>
             <Menu.List>A private, self-hosted architecture</Menu.List>
             <Menu.List>Multi-cloud control</Menu.List>
             <Menu.List>A single, intuitive interface</Menu.List>
            </Menu>
            <Link>Learn More</Link>
          </Content>
        </Col>
        <Col>
          <BoxImg>
            <Img/>
          </BoxImg>
        </Col>
      </Row>
      <Row></Row>
      </div>
      <SupportBottom/>
    </Section>
  );
};

export default Support;
