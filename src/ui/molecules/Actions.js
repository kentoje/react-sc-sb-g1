import React from 'react';
import styled from 'styled-components';
import Bell from '../atoms/Bell'
import Bubble from '../atoms/Bubble'
import Zoom from '../atoms/Zoom'
import Filters from '../particles/Filters';
import PropTypes from 'prop-types';
import getIconsComponents from '../../libraries/methods/getIconsComponents';

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
  margin-top: 16px;

  button:nth-child(even) {
    margin: 0 18px;
  }

  svg {
    filter: ${props => (props.isWhite ? Filters.invert_false : Filters.invert_true)};
    cursor: pointer;
  }
`;

const Actions = (props) => {
  const {
    displayIcons,
    isWhite,
    notificationCount,
  } = props;

  return (
    <ActionsWrapper isWhite={isWhite} displayIcons={displayIcons} notificationCount={notificationCount}>
      {getIconsComponents(displayIcons, iconsComponents, notificationCount)}
    </ActionsWrapper>
  );
};

Actions.propTypes = {
  displayIcons: PropTypes.object,
  notificationCount: PropTypes.object,
  isWhite: PropTypes.bool,
};

Actions.defaultProps = {
  isWhite: false,
};

export default Actions;
