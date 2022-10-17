import React from "react";
import { Section, Row, Col, Img } from "./style";
import mainImg from "../../assets/images/main.png";
import img1 from "../../assets/icons/icon-01.svg";
import img2 from "../../assets/icons/icon-02.svg";
import img3 from "../../assets/icons/icon-03.svg";
import icon1 from '../../assets/icons/nasa.svg'
import icon2 from '../../assets/icons/absolute.svg'
import icon3 from '../../assets/icons/cdc.svg'
import icon4 from '../../assets/icons/indeed.svg'
import icon5 from '../../assets/icons/verizon.svg'


const Main = () => {
  return (
    <Section id="#">
      <div className="_container-fluid">
        <Row>
          <Col>
            <Section.Content>
              <h1>
                Complete cloud  enablement has <br /> arrived.
              </h1>
              <p>
                Oversee, secure, and scale your <br /> cloud with one solution.
              </p>
              <button>Request Demo</button>
            </Section.Content>
          </Col>
          <Col>
            <Section.ImgBox>
              <Img src={mainImg} className="main-img" />
              <Img src={img1} className="img1" />
              <Img src={img2} className="img2" />
              <Img src={img3} className="img3" />
            </Section.ImgBox>
          </Col>
        </Row>
        <Section.Partners>
        <Row>
       <Img src={icon1}/>
       <Img src={icon2}/>
       <Img src={icon3}/>
       <Img src={icon4}/>
       <Img src={icon5}/>
        </Row>
        </Section.Partners>
      </div>
    </Section>
  );
};

export default Main;
