import React from 'react';
import { action } from '@storybook/addon-actions';
import Bell from '../ui/atoms/Bell';
import Zoom from '../ui/atoms/Zoom';
import Bubble from '../ui/atoms/Bubble';
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: 'Icons',
    component: Bell,
    decorators: [withKnobs]
};

export const BellIcon = () => <Bell />;
export const ZoomIcon = () => <Zoom />;
export const BubbleIcon = () => <Bubble />;
