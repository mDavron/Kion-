import React from "react";
import { Section, Row, Col, ProductOffers, ProductDescr,ProductIcon } from "./style";

function Product() {
  return (
    <Section id="product">
      <div className="_container">
        <Row>
          <Col>
            <ProductOffers>
              <h1>The Product</h1>
              <p>
                Kion offers the only single platform approach to ,<span>cloud
                enablement</span>, transcending cloud management and cloud governance
                by offering all three pillars necessary for total cloud control.
              </p>
              <button>More About the Product</button>
            </ProductOffers>
          </Col>
          <Col>
            <ProductDescr>
                <ProductIcon/>
              <h1>Automation & Orchestration</h1>
              <p>
                Provision accounts, get enterprise-wide visibility, and fully
                integrate the cloud with your tech stack to automate the full
                cloud lifecycle.
              </p>
              <a href="#">Learn More</a>
            </ProductDescr>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default Product;
