
import React from 'react'
import PropTypes from 'prop-types'

import { StyledBackdrop } from './styles'

const Backdrop = ({ onClose, zIndex }) => <StyledBackdrop zindex={zIndex} onClick={onClose} />

Backdrop.propTypes = {
    onClose: PropTypes.func,
    zIndex: PropTypes.number
}

export default Backdrop