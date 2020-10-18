import styled, { css } from "styled-components";
const Input = styled.input`
  color: #1c1e21;
  caret-color: #bea856;
  border: none;
  border-bottom: 1px solid #9f8a3b;
  opacity: 1;
  width: 100%;
  outline: none;
  margin-bottom: 4px;
  appearance: none;
  background: transparent;
  border-radius: 0px;
  padding-right: 32px;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
  }
  &::placeholder {
    color: #e4e4e4;
  }
`;

export { Input };
