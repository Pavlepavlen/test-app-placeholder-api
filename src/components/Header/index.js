import React, { useContext } from 'react'
import { SiteInfoContext } from '../../App' 

import { StyledHeaderWrapper, StyledBrand } from './styles'

const Header = () => {

    const { siteName } = useContext(SiteInfoContext);

    return (
        <StyledHeaderWrapper>
            <StyledBrand>
                { siteName }
            </StyledBrand>
        </StyledHeaderWrapper>
    )
}

export default Header
