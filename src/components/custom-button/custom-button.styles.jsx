/** @format */

import styled, { css } from "styled-components";

const buttonStyles = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 80%;
  position: absolute;
  bottom: 15%;
  opacity: 0.8;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    opacity: 0.9;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getButtonStyles}
`;
