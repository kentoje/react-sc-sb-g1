import React from "react";
import styled from "styled-components";

import Bell from "../atoms/Bell"
import Bubble from "../atoms/Bubble"
import Zoom from "../atoms/Zoom"

const ActionsWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-left: 15px;
  margin-right: 15px;

  div {
    cursor: pointer;
  }

  svg {
    filter: invert(1);
  }
`;

const Actions = () => {
  return (
    <ActionsWrapper>
      <Bell />
      <Bubble />
      <Zoom />
    </ActionsWrapper>
  );
};

export default Actions;