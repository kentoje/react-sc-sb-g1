import React from "react";
import PropTypes from "prop-types";
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

const Actions = props => {
  const { bell, bubble, loop } = props;
  return (
    <ActionsWrapper>
      { bell && <Bell />}
      { bubble && <Bubble />}
      { loop && <Zoom />}
    </ActionsWrapper>
  );
};

Actions.propTypes = {
  bell: PropTypes.bool,
  bubble: PropTypes.bool,
  loop: PropTypes.bool
};


export default Actions;