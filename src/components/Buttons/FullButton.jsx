import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid black;
  background-color: transparent;
  border-radius: 3px;
  width: 100%;
  padding: 15px;
  outline: none;
  color: black;
  :hover {
    background-color: black;
    color: white;
  }
`;

