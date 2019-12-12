const absoluteMixin = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const boxShadowMixin = `
    box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
`

const colors = {
    violet: '#822E81',
    darkViolet: '#3A015C',
    red: '#9E0031',
    dimViolet: '#372248',
    almostBlack: '#171123',
    blue: '#3C91E6',
    light: '#FFFBFE',
    lightGray: '#7A7D7D'
}

const fontSizes = {
    small: '12px',
    regular: '14px',
    medium: '20px',
    large: '32px'
}

const breakpoints = {
    sm: '760px',
    md: '996px',
    lg: '1200px'
}

const mixins = {
    absoluteMixin,
    boxShadowMixin
}

export const theme = {
    mixins,
    colors,
    breakpoints,
    fontSizes
}