import styled from "styled-components";
import main from '../../assets/images/support-img.png'

export const Section = styled.div`
    padding-top: 144px;
    /* background-color: #555; */
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
`;
export const Col = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div``;

Content.Heading = styled.h1`
  font-family: "Times New Roman";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1px;
  color: #283337;
  margin-bottom: 43px;
`;
Content.Text = styled.p`
width: 381px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #40494d;
  margin-bottom:24px
`;
// ====== Content Heading,Text Style end =======

// ====== MENU Style start =======
export const Menu = styled.ul`
  list-style: none;
`;
Menu.Title = styled.h1`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #283337;
  margin-bottom:24px
`;
Menu.List = styled.li`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #40494d;
  cursor: pointer;
  margin-left: 34px;
  padding: 6px 0px;
`;
export const Link = styled.a`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  color: #40494d;
  text-decoration: none;
  cursor: pointer;
  margin-top: 18px;
  display: inline-block;
`;
// ====== MENU Style end =======

// ====== Box Style start =======

export const BoxImg = styled.div`
position: relative;
width: 640px;
height: 360px;
border-radius: 6px;
`;
export const Img = styled.img.attrs({src:main})`
position: absolute;
width: 100%;
height: 100%;
top:0;
left: 0;
object-fit: cover;
`;


// ====== Box Style end =======
