import React from "react";
import styled from "styled-components";

import Bell from "../atom/Bell"
import Bubble from "../atom/Bubble"
import Zoom from "../atom/Zoom"

const ActionsWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-left: 15px;
  margin-right: 15px;

  div {
    cursor: pointer;
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