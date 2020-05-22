import React from "react";
import styled from "styled-components";
import Bell from "../atoms/Bell"
import Bubble from "../atoms/Bubble"
import Zoom from "../atoms/Zoom"
import Filters from "../particles/Filters";
import PropTypes from "prop-types";

const ActionsWrapper = styled.div `
  display: flex;

  svg {
    filter: ${props => (props.isWhite ? Filters.invert_false : Filters.invert_true)};
    cursor: pointer;
  }
`;

const Actions = (props) => {
  const {
    bell,
    bubble,
    loop,
    isWhite
  } = props;

  return (
    <ActionsWrapper isWhite={isWhite}>
      {bell && <Bell />}
      {bubble && <Bubble />}
      {loop && <Zoom />}
    </ActionsWrapper>
  );
};

Actions.propTypes = {
  bell: PropTypes.bool,
  bubble: PropTypes.bool,
  loop: PropTypes.bool,
  isWhite: PropTypes.bool,
};

Actions.defaultProps = {
  isWhite: false,
  bubble: true,
  bell: true,
  loop: true,
};

export default Actions;