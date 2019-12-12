import styled from 'styled-components'

export const PaginationWrapper = styled.div`
    margin: 10px auto;
    display: flex;
    justify-content: center;
`

export const ButtonGroup = styled.div`
    ${({ theme }) => theme.mixins.absoluteMixin};
    top: 90%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.colors.almostBlack};
    border-radius: 12px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: rgba(23, 17, 35, 0.8);
    width: max-content;
    background-color: rgba(240, 240, 240, 1);
    color: ${({ theme }) => theme.colors.almostBlack};
    ${({ theme }) => theme.mixins.boxShadowMixin}
`

export const StyledButton = styled.button`
    outline: none;
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    border: none;
    border-right: 1px solid ${({ theme }) => theme.colors.almostDark};
    background-color: transparent;
    cursor: pointer;
    transition: all .3s ease-in;
    ${({ active }) => active && 'background-color: rgba(23, 17, 35, 0.8)'};
    ${({ active, theme }) => active && theme.colors.light};

    &:last-child {
        border-bottom-right-radius: 12px;
        border-top-right-radius: 12px;
    }

    &:first-child {
        border-bottom-left-radius: 12px;
        border-top-left-radius: 12px;
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.dimViolet}
    }

    &:last-of-type {
        border: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:hover:enabled {
        background-color: rgba(23, 17, 35, 0.8);
        color: ${({ theme }) => theme.colors.light};
    }
`