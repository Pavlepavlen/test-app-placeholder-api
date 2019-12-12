import styled from 'styled-components'

export const StyledWrapper = styled.div`
    margin: 30px auto 10px;
    width: ${({ width }) => width || '80%'};
    ${({ height }) => height ? `height: ${height}` : ''};
    ${({ relative }) => relative ? `position: relative` : ''};
    text-align: center;
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
    ${({ theme }) => theme.mixins.boxShadowMixin};
    border-radius: 12px;
    background-color: rgba(240, 240, 240, 0.6);
`

export const StyledTitle = styled.h4`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.almostBlack};
    margin: 5px 0;
    font-weight: lighter;
    letter-spacing: 0.05rem;
`