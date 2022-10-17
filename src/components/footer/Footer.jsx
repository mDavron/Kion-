import React from "react";
import FooterBottom from "./footer-bottom/FooterBottom";
import {
  Section,
  FooterRow,
  Col4,
  Col8,
  Menu,
  List,
  Link,
  MenuHeading,
  Button,
  MenuRow,
  Col25,
  Col10,
} from "./FooterStyle";
import Form from "./form/Form";

const Footer = () => {
  return (
    <Section>
      <div className="_container-fluid">
        <FooterRow>
          <Col4 flex="40%">
            <Menu>
              <MenuHeading>Our Product</MenuHeading>
              <List>
                <Link>Product Overview</Link>
              </List>
              <List>
                <Link>Automation & Orchestration</Link>
              </List>
              <List>
                <Link>Financial Management</Link>
              </List>
            </Menu>
            <Menu>
              <List>
                <Link>Continuous Compliance</Link>
              </List>
              <List>
                <Link>Integrations</Link>
              </List>
              <List>
                <Link>Request a Demo</Link>
              </List>
              <List>
                <Link>Try Kion For Free</Link>
              </List>
            </Menu>
            <Button>Shedule Demo</Button>
          </Col4>
          <Col8 flex="60%">
            <MenuRow>
              <Col25>
                <Menu>
                  <MenuHeading>Resources</MenuHeading>
                  <List>
                    <Link>All Resources</Link>
                  </List>
                  <List>
                    <Link>Blog</Link>
                  </List>
                  <List>
                    <Link>Case Studies</Link>
                  </List>
                </Menu>
              </Col25>

              <Col25>
                <Menu>
                  <MenuHeading>Support</MenuHeading>
                  <List>
                    <Link>Support Overview</Link>
                  </List>
                  <List>
                    <Link>FAQs</Link>
                  </List>
                </Menu>
              </Col25>

              <Col25>
                <Menu>
                  <MenuHeading>About</MenuHeading>
                  <List>
                    <Link>About Us</Link>
                  </List>
                  <List>
                    <Link>Careers</Link>
                  </List>
                  <List>
                    <Link>Contact</Link>
                  </List>
                </Menu>
              </Col25>

              <Col10>
                <Menu className="left">
                  <Menu.Logo />
                </Menu>
              </Col10>
            </MenuRow>
            <Form />
          </Col8>
        </FooterRow>
        <FooterBottom />
      </div>
    </Section>
  );
};

export default Footer;
