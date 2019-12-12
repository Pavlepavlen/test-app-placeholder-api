import styled from 'styled-components'

export const StyledItemWrapper = styled.div`
    margin: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    overflow: hidden;
    ${({ theme }) => theme.mixins.boxShadowMixin}
`

export const StyledAlbumThumbnail = styled.img`
    width: 100%;
    display: block;
`

export const StyledAlbumInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: rgba(23, 17, 35, 0.8);
`

export const StyledViewButton = styled.div`
    padding: 5px 10px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 12px;
    background-color: rgba(240, 240, 240, 0.8);
    color: rgba(23, 17, 35, 0.8);
    transition: all .3s ease;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: rgba(23, 17, 35, 0.8);
        color: ${({ theme }) => theme.colors.light};
        border: 1px solid rgba(23, 17, 35, 0.8);
        transform: scale(1.1)
    }
`