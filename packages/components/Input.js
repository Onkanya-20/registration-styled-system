import styled from "styled-components";
import { typography, space, color } from "styled-system";
import theme from "./theme";
import { Input } from "antd";
const CustomInput = styled(Input)`
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #bea856;
  ${typography}
  ${space}
  ${color}
`;

CustomInput.defaultProps = {
  theme,
};

const CustomPassword = styled(Input.Password)`
  && {
    .ant-input {
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #bea856;
      ${typography}
      ${space}
      ${color}
    }
  }
`;

export { CustomInput, CustomPassword };
