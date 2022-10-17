import styled from "styled-components";

export const Section = styled.div`
  height: 668px;
  background: #f3f7f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "Times New Roman";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 1px;
    color: #283337;
    text-align: center;
    margin-bottom: 75px;
  }
`;
export const ResultsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 250px;
`;
export const Card = styled.div`
  text-align: center;

  h2 {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 70px;
    text-align: center;
    color: #283337;
    margin-bottom: 19px;
  }
  p {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #40494d;
  }
`;
export const ResultsBottom = styled.div`
width: 100%;
height: 262px;
background-color: #fff;
`;