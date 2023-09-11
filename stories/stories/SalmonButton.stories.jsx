import React from 'react';
import SalmonButton from '../components/SalmonButton';

export default {
    title: 'SalmonButton',
    component: SalmonButton,
    argTypes: {
        variant:
            {
                control: {type: 'radio'},
                options: ['contained', 'text', 'outlined']
            }
    },
};

const Template = (args) => <SalmonButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Salmon Button',
    variant: 'contained'
};
