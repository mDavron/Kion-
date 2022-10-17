import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 12px;
  margin-bottom: 32px;
`;
const FormWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  input {
    width: 461px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #cfd2d3;
    border-radius: 4px;
    padding-left: 37px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #878d90;
  }
  button {
    width: 160px;
    height: 56px;
    background: #283337;
    border-radius: 56px;
    cursor: pointer;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: #ffffff;
    cursor: pointer;
    border: none;
    transition: 0.3s ease;
    &:hover {
      background-color: #37454b;
    }
  }
`;

const Form = () => {
  return (
    <>
      <Heading>Sign up for our monthly newsletter</Heading>
      <FormWrapper>
        <input type="email" placeholder="Email*" />
        <button>Subscribe</button>
      </FormWrapper>
    </>
  );
};

export default Form;
