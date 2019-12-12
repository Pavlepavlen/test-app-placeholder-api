import styled from 'styled-components'

export const ThumbnailSectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    border-top: 2px solid ${({ theme }) => theme.colors.blue};
`

export const StyledThumbnail = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
`

