import styled from 'styled-components'

export const StyledHeaderWrapper = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.violet};
`

export const StyledBrand = styled.div`
    padding: 25px;
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSizes.large};
    color: ${({theme}) => theme.colors.dimViolet};
    text-align: center;
    letter-spacing: 0.1rem;
`