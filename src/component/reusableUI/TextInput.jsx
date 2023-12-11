import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme/index";

const TextInput = React.forwardRef(
  ({ className, value, Icon, ...extraProps }, ref) => {
    // console.log(Icon);
    return (
      <TextInputStyled className={className}>
        {Icon && Icon}
        <input ref={ref} value={value} type="text" {...extraProps} />
      </TextInputStyled>
    );
  }
);
export default TextInput;
const TextInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  // display: flex;
  align-items: center;
  padding: 15px 20px;
  margin: 5px 0; // could be handle in Parent too
  /* white-space: nowrap; */

  input {
    font-family: inherit;

    cursor: pointer;
    background-color: ${theme.colors.white};
    border: none;
    text-align: center;
    display: flex;
    color: ${theme.colors.incognito};
    text-align: left;
    font-size: ${theme.fonts.P2};
    padding-left: 40px;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
