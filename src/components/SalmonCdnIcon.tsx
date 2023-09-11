import * as React from 'react'
import styled from "@emotion/styled";

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
}

const SalmonCdnIcon = styled(({ code, isDevMode = false, alt, width = BASE_ICON_SIZE, height = BASE_ICON_SIZE }: SalmonCdnIconProps) => {
    const currentCdnLink = isDevMode ? environmentCdnLinks.DEVELOPMENT : environmentCdnLinks.PRODUCTION
    const imgPath = `${currentCdnLink}${code}.svg`

    return (
        <object type="image/svg+xml" data={imgPath} width={width || 'auto'} height={height || 'auto'} >
            <img
                src={imgPath}
                width={width || 'auto'}
                height={height || 'auto'}
                alt={alt || `${code} icon`}
            />
        </object>
    )

})(() => ({
    objectFit: 'cover'
}));

export default SalmonCdnIcon;