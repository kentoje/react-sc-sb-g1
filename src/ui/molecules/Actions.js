import React from "react";
import styled from "styled-components";
import Bell from "../atoms/Bell"
import Bubble from "../atoms/Bubble"
import Zoom from "../atoms/Zoom"
import Filters from "../particles/Filters";
import PropTypes from "prop-types";
import getIconsComponents from "../../libraries/methods/getIconsComponents";

const iconsComponents = {
  bell: {
    id: 1,
    component: Bell,
  },
  bubble: {
    id: 2,
    component: Bubble,
  },
  zoom: {
    id: 3,
    component: Zoom,
  },
};

const ActionsWrapper = styled.div `
  display: flex;

  svg {
    filter: ${props => (props.isWhite ? Filters.invert_false : Filters.invert_true)};
    cursor: pointer;
  }
`;

const Actions = (props) => {
  const {
    displayIcons,
    isWhite,
  } = props;

  return (
    <ActionsWrapper isWhite={isWhite} displayIcons={displayIcons}>
      {getIconsComponents(displayIcons, iconsComponents)}
    </ActionsWrapper>
  );
};

Actions.propTypes = {
  displayIcons: PropTypes.object,
  isWhite: PropTypes.bool,
};

Actions.defaultProps = {
  isWhite: false,
  bubble: true,
  bell: true,
  loop: true,
};

export default Actions;