import styled from 'styled-components'

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.dimViolet};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 50%;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 80%;
    }
`;

export const StyledAnchorLink = styled.a`
    padding: 2rem 1.5rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    opacity: 0.8;
    text-decoration: none;
    transition: color 0.3s ease-in;
    cursor: pointer;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
        text-decoration: none;
        opacity: 1;
        color: ${({ theme }) => theme.primaryHover};
    }
`

export const StyledNavLink = styled.a`
    padding: 2.5rem 1.5rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSizes.large};
    opacity: 0.8;
    text-decoration: none;
    transition: color 0.3s ease-in;
    cursor: pointer;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
        text-decoration: none;
        opacity: 1;
        color: ${({ theme }) => theme.primaryHover};
    }
`

export const LinksWrapper = styled.span`
    display: flex;
    flex-direction: column;
`