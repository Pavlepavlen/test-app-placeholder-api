import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { StyledModal, StyledCloseIcon } from './styles'
import Backdrop from '../Backdrop';

const Modal = ({ onClose, children, width, height }) => {

    const [element, setElement] = useState(null)

    useEffect(() => {
        
        const root = document.createElement('div')
        document.body.appendChild(root)
        document.body.style.overflow = 'hidden'

        setElement(root)

        return () => {
            document.body.removeChild(root)
            document.body.style.overflow = 'unset'
        }
    }, [])

    if (element) {
        return ReactDOM.createPortal(
            <Fragment>
                <Backdrop zIndex={100} onClose={onClose} />
                <StyledModal height={height} width={width}>
                    <StyledCloseIcon onClick={onClose} />
                    { children }
                </StyledModal>
            </Fragment>
            ,
            element
        )
    }
    return null
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.node
    ]),
    width: PropTypes.string,
    height: PropTypes.string,
    onClose: PropTypes.func
}

export default Modal