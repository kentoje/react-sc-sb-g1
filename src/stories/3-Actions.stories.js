import React from 'react';
import { action } from '@storybook/addon-actions';
import Actions from '../ui/molecules/Actions';
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Actions',
    component: Actions,
    decorators: [withKnobs]
};

export const Action = () => <Actions 
                            	isWhite={boolean("White icone", true)}
                            />;
