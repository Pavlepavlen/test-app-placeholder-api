import React from 'react'
import { PropTypes } from 'prop-types'

import { StyledLoader } from './styles'

const Loader = ({ width = 120, height = 120 }) => (
    <StyledLoader 
        width={width} 
        height={height}
    >
        <div />
        <div />
    </StyledLoader>
)

Loader.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}

export default Loader
