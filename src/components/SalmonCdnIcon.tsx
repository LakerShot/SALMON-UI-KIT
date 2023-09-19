import * as React from 'react'
import styled from "@emotion/styled";
import {SyntheticEvent} from "react";
import {ProviderType} from "../models";
import Bank from "../assets/icon/bank.svg";
import Wallet from "../assets/icon/ewallet.svg";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const environmentCdnLinks = {
    DEVELOPMENT: 'https://cdn.dev.fhl.world/payment/providers/',
    PRODUCTION: 'https://s.slmn.ph/payment/providers/'
}

export const BASE_ICON_SIZE = 32

export interface SalmonCdnIconProps {
    code: string
    isDevMode?: boolean
    width?: string | number
    height?: string | number
    alt?: string
    type?: ProviderType;
}

const SalmonCdnIcon = styled(({code, alt, width, height, type, isDevMode = false}: SalmonCdnIconProps) => {
    const cdnLink = isDevMode ? environmentCdnLinks.DEVELOPMENT : environmentCdnLinks.PRODUCTION;

    const imgPath = `${cdnLink}${code}.png`;
    const handleImageError = ({ currentTarget }: SyntheticEvent<HTMLImageElement>): void => {
        const fallbackIcon = type === ProviderType.E_WALLET ? Wallet : Bank;
        currentTarget.onerror = null;
        currentTarget.src = fallbackIcon;
    };

    return (
        <Container>
            <img
                src={imgPath}
                width={width || 'auto'}
                height={height || 'auto'}
                alt={alt || `${code} icon`}
                onError={handleImageError}
            />
        </Container>
    )

})(() => ({
    objectFit: 'cover'
}));

export default SalmonCdnIcon;