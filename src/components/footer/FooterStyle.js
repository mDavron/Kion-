import styled from "styled-components";
import {ReactComponent as Logo} from '../../assets/icons/footer-logo.svg'

export const Section = styled.div`
  background: #101c21;
  color: #fff;
  padding-top: 100px;
`;
export const FooterRow = styled.div`
  display: flex;
  width: 100%;
`;
export const Col4 = styled.div`
  max-width: 40%;
  flex-basis: 40%;
 
`;
export const Col8 = styled.div`
  max-width: 60%;
  flex-basis: 60%;
  margin-left: auto;
  .left{
    display: flex;
    justify-content:center;
  }
`;
// ======== Menu style start =======
export const Menu = styled.ul`
  list-style: none;
  margin-bottom: 35px;
 
`;
export const MenuHeading = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #878d90;
  margin-bottom: 16px;

`;

export const List = styled.li`
  margin-bottom: 13px;

`;
export const Link = styled.a`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #cfd2d3;
  text-decoration: none;
  cursor: pointer;
`;

// ========  Menu style end  =======
export const Button = styled.button`
  height: 56px;
  width: 218px;
  margin: 17px 0;
  background-color: #283337;
  border-radius: 56px;
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
  }`

// ====== nav =======

export const MenuRow = styled.div`
width: 100%;
display: flex;
`;

export const Col25 = styled.div`
flex-basis:30%;
`;
export const Col10 = styled.div`
flex-basis:10%;
`;
Menu.Logo = styled(Logo)`
height: 61px;
width: 60px;
`;