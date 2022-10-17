import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(40, 51, 55, 0.08);
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
`;
export const Logo = styled(logo)`
  min-width: 120px;
`;

//======= menu style start ========
export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-left: auto;
`;
Menu.Item = styled.li`
  margin: 0px 34px;
  list-style: none;
  @media (max-width: 997px) {
    margin: 0px 15px;
  }
`;
Menu.Link = styled.a`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #40494d;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: #000;
  }
`;
//======= menu style end ========

//======= right box style start ========

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border: 1px solid #40494d;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 50px;
  @media (max-width: 997px) {
    margin-left: 10px;
  }
`;
export const Search = styled(search)``;

export const Button = styled.button`
  height: 56px;
  background-color: #283337;
  border-radius: 56px;
  min-width: 177px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  &:hover {
    background-color: #37454b;
  }
  @media (max-width: 997px) {
    font-size: 16px;
    min-width: 150px;
  }
`;

//======= right box style end ========
