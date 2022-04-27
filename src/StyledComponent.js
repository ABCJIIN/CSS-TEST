import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import styled, { css } from "styled-components";
import { withTheme } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: withTheme;
  color: toBePartiallyChecked;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-content: center;
  justyfy-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}

  & + button {
    margin-left: 1rem;
  }
`;

function StyledComponent(props) {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
}

export default StyledComponent;
