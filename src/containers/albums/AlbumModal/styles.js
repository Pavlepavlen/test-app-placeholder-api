import styled from 'styled-components'

export const StyledTitle = styled.div`
    margin: 10px auto;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    text-align: left;
    color: ${({ theme }) => theme.colors.almostBlack};
    letter-spacing: 0.1rem;
`

export const LoaderWrapper = styled.div`
    ${({ theme }) => theme.mixins.absoluteMixin}
`