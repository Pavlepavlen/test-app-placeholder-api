import styled from 'styled-components'
import Background from 'assets/images/background.jpg'

export const StyledBackground = styled('div')`
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    position: absolute;
    left: 0;
    top: 8%;
    width: 100%;
    z-index: -10;
`;