import styled from "styled-components";

export const Section = styled.div`
  background-color: #f3f7f4;
  padding-top: 150px;
  padding-bottom: 130px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Col = styled.div`
  flex: 0 0 50%;
`;
export const Img = styled.img``;

Section.Content = styled.div`
  h1 {
    font-family: "Times New Roman";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 1px;
    color: #283337;
    margin-bottom: 44px;
  }
  p {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 31px;
    color: #40494d;
    margin-bottom: 20px;
  }
  button {
    width: 218px;
    height: 56px;
    background: #283337;
    border-radius: 56px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    border: none;
  }
`;
Section.ImgBox = styled.div`
  position: relative;
  width: 415px;
  height: 540px;
  object-fit: cover;
  margin: 0 auto;
  .main-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }
  .img1 {
    position: absolute;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 0;
    z-index: 2;
  }
  .img2 {
    position: absolute;
    width: 230px;
    height: 187px;
    transform: translate(-50%, -50%);
    top: 45%;
    left: 100%;
    z-index: 2;
  }
  .img3 {
    position: absolute;
    width: 210px;
    height: 189px;
    transform: translate(-50%, -50%);
    top: 96%;
    left: 50%;
    z-index: 2;
  }
`;
Section.Partners = styled.div`
  width: 100%;
  padding: 20px 0px;
  margin-top: 200px;
  margin-bottom: 0px;
`;
// ======= small images start ======

// ======= small images end ======
