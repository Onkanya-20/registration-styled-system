import styled from "styled-components";
import {
  typography,
  space,
  color,
  shadow,
  variant,
  layout,
  flexbox,
} from "styled-system";
import theme from "./theme";

const Box = styled.div`
  ${variant({
    variants: {
      normal: {
        p: 2,
        boxShadow: "default",
        borderRadius: 2,
      },
      large: {
        p: 3,
        boxShadow: "large",
        borderRadius: 4,
        fontSize: 4,
        fontWeight: "bold",
        mb: 4,
      },
    },
  })}
  ${color}
  ${typography}
  ${space}
  ${shadow}
  ${flexbox}
  ${layout}
`;

Box.defaultProps = {
  variant: "normal",
  theme,
};

export { Box };
