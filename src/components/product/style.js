import styled from "styled-components";
import { ReactComponent as productIcon } from "../../assets/icons/product-icon.svg";

export const Section = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
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
export const ProductOffers = styled.div`
  margin-right: 194px;

  @media (max-width: 1120px) {
    margin-right: 60px;
  }
  h1 {
    font-family: "Times New Roman";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 1px;
    color: #283337;
    margin-bottom: 28px;
  }
  p {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    color: #40494d;
    margin-bottom: 39px;
  }
  span {
    color: #283337;
    text-decoration: underline;
    font-weight: 600;
  }
  button {
    height: 56px;
    padding: 16px 25px 19px 25px;
    background: #283337;
    border-radius: 56px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    border: none;
    transition: .3s ease;
    &:hover{
        background-color: #37474c;
    }
  }
`;
export const ProductDescr = styled.div`
  width: 560px;
  background: #f3f7f4;
  border-radius: 6px;
  padding: 80px 89px 80px 80px;
  @media (max-width: 1120px) {
    padding: 80px 60px 80px 60px;
    font-size: 16px;
    width: auto;
  }
  h1 {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 34px;
    color: #283337;
    margin-bottom: 51px;
  }
  p {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #40494d;
    margin-bottom: 38px;
  }
  a {
    text-decoration: none;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    display: block;
    text-align: right;
    color: #283337;
    cursor: pointer;
  }
`;
export const ProductIcon = styled(productIcon)``;
