import styled from "styled-components";
import {
  buttonStyle,
  variant,
  style,
  color,
  space,
  typography,
} from "styled-system";
import { Box } from "./Box";
import theme from "./theme";

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes",
});

const mainColor = style({
  prop: "mainColor",
  cssProperty: "--main-color",
  key: "colors",
});

const Button = styled.button`
  border-radius: 3px;
  border: none;
  cursor: pointer;
  outline: none;
  ${mainColor}
  ${buttonSize}
  ${color}
  ${space}
  ${typography}
`;

Button.defaultProps = {
  theme,
};

export { Button };
