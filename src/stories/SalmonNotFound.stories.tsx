import React from 'react';
import type { Meta } from '@storybook/react';
import { SalmonNotFoundPage } from '../pages/SalmonNotFoundPage';
import {SalmonNotFoundPageProps} from "../pages/SalmonNotFoundPage/SalmonNotFoundPage";

const meta: Meta<typeof SalmonNotFoundPage> = {
    title: 'SalmonNotFoundPage',
    component: SalmonNotFoundPage,
    argTypes: {
        goBackToMainPage: { action: 'go back' }
    },
};
export default meta

const Template = (args: SalmonNotFoundPageProps) => <SalmonNotFoundPage {...args} />;

export const Default = Template.bind({});
