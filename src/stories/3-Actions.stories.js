import React from 'react';
import { action } from '@storybook/addon-actions';
import Actions from '../ui/molecules/Actions';
import mockNotification from '../mockDatas/notificationCount/mockNotification';
import { withKnobs, boolean } from "@storybook/addon-knobs";

const notificationCount = mockNotification();

const displayIcons = {
	bell: true,
	bubble: true,
	zoom: true,
};

export default {
  title: 'Actions',
  component: Actions,
  decorators: [withKnobs]
};

export const Action = () => {
	return <Actions displayIcons={displayIcons} notificationCount={notificationCount} isWhite={boolean("White icones", true)}/>
};