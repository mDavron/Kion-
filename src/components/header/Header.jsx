import React from "react";
import { data } from "./HeaderData";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Menu,
  Box,
  Circle,
  Search,
  Button,
} from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="_container-fluid">
        <HeaderInner>
          <Logo />
          <Menu>
            {data.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <Menu.Link href ={item.path}>{item.title}</Menu.Link>
                </Menu.Item>
              );
            })}
          </Menu>
          <Box>
            <Circle>
              <Search />
            </Circle>
            <Button>Schedule Demo</Button>
          </Box>
        </HeaderInner>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
