import React from 'react';
import SalmonCdnIcon, {BASE_ICON_SIZE, SalmonCdnIconProps} from "../components/SalmonCdnIcon";
import {Meta, StoryObj} from "@storybook/react";
import {ProviderType} from "../models";

const meta: Meta<typeof SalmonCdnIcon> = {
    title: 'SalmonCdnIcon',
    component: SalmonCdnIcon,
    argTypes: {
        code: {
            description: 'Code examples',
            defaultValue: '',
            control: {
                type: 'radio',
            },
            options: ['gcash', 'maya']
        },
        width: {
            description: 'Icon width',
            defaultValue: `${BASE_ICON_SIZE}`,
        },
        height: {
            description: 'Icon height',
            defaultValue: `${BASE_ICON_SIZE}`,
        },
        alt: {
            description: 'Describes the appearance or function of an image on a page',
            control: {
                type: 'text',
            },
        }
    }

};
export default meta;

type Story = StoryObj<typeof SalmonCdnIcon>;
const Template = (args: SalmonCdnIconProps) => <SalmonCdnIcon {...args} />

export const PrimaryIcon = Template.bind({}) as Story
PrimaryIcon.args = {
    code: 'gcash',
};

export const LargeIcon = Template.bind({}) as Story
LargeIcon.args = {
    code: 'maya',
    width: BASE_ICON_SIZE * 2,
    height: BASE_ICON_SIZE * 2
};

export const PrimaryIconDev = Template.bind({}) as Story
PrimaryIconDev.args = {
    code: 'gcash',
    isDevMode: true,
    alt: 'Custom alt text'
};

export const FallbackBankIcon = Template.bind({}) as Story
FallbackBankIcon.args = {
    code: '',
    type: ProviderType.BANK
};

export const FallbackWalletIcon = Template.bind({}) as Story
FallbackWalletIcon.args = {
    code: '',
    type: ProviderType.E_WALLET
};
