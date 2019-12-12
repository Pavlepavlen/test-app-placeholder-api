import styled from 'styled-components'

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 500px;
    overflow-y: scroll;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 400px;
    }
`