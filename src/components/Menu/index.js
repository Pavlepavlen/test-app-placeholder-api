import React, { Fragment, useContext } from 'react'
import { SiteInfoContext } from '../../App' 

import Backdrop from '../Backdrop/index'

import { 
    StyledMenu,
    StyledNavLink,
    LinksWrapper,
    StyledAnchorLink
} from './styles'

const titleJSON = 'JSONPlaceholder API'
const githubRepoTitle = 'GitHub Repo'

const Menu = ({ open, setOpen }) => {

    const { author, siteName, year } = useContext(SiteInfoContext);

    return (
        <Fragment>
            {   open &&
                <Backdrop onClose={() => setOpen(!open)} />
            }
            <StyledMenu open={open}>
                <StyledNavLink href="/">
                    { siteName }
                </StyledNavLink>
                <LinksWrapper>
                    <StyledAnchorLink target="blank" href="https://jsonplaceholder.typicode.com/">
                        { titleJSON }
                    </StyledAnchorLink>
                    <StyledAnchorLink target="blank"  href="https://github.com/Pavlepavlen/test-app-placeholder-api">
                        { githubRepoTitle }
                    </StyledAnchorLink>
                </LinksWrapper>
                <StyledAnchorLink>
                    {`${author} ${year}`}
                </StyledAnchorLink>
            </StyledMenu>
        </Fragment>
    )
}


export default Menu;