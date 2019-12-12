import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg'

export const StyledModal = styled('div')`
    ${({ theme }) => theme.mixins.absoluteMixin};
    width: ${({ width }) => width || '70%'};
    ${({ height }) => height ? `height: ${height}` : ''}
    background-color: rgba(240, 240, 240, 0.8);
    border: 2px solid ${({ theme }) => theme.colors.almostBlack};
    border-radius: 12px;
    padding: 50px 30px;
    text-align: center;
    font-family: 'OpenSans';
    box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
    z-index: 200;
`

export const StyledCloseIcon = styled(CloseIcon)`
    width: 30px;
    position: absolute;
    top: 12px;
    right: 12px;
    transition: .3s all ease-in;
    fill: ${({ theme }) => theme.colors.almostBlack};

    &:hover {
        transform: scale(1.2);
        fill: ${({ theme }) => theme.colors.red};
    }
`