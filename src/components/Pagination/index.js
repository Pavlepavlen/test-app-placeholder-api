import React from 'react'
import PropTypes from 'prop-types'

import {
    PaginationWrapper,
    ButtonGroup,
    StyledButton
} from './styles'

const buttonTypes = {
    previous: 'Previous',
    next: 'Next'
}

const Pagination = ({ pagesList, currentPage, setCurrentPage, lastPage }) => {

    const setCurrentHandler = ( item ) => {
        if (item === buttonTypes.previous) {
            setCurrentPage(currentPage - 1)
        } else if ((item === buttonTypes.next)) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(parseInt(item))
        }
    }

    return (
        <PaginationWrapper>
            <ButtonGroup>
                <StyledButton 
                    onClick={() => setCurrentHandler(buttonTypes.previous)}
                    disabled={currentPage === 1}
                >
                    { buttonTypes.previous }
                </StyledButton>
                {   !!pagesList.length &&
                        pagesList.map(item => 
                            <StyledButton
                                key={item}
                                active={item === currentPage}
                                onClick={() => setCurrentHandler(item)}>
                                    {item}
                            </StyledButton>
                )}
                <StyledButton
                    onClick={() => setCurrentHandler(buttonTypes.next)}
                    disabled={lastPage}
                >
                    { buttonTypes.next }
                </StyledButton>
            </ButtonGroup>
        </PaginationWrapper>
    )
}

Pagination.propTypes = {
    pagesList: PropTypes.arrayOf(PropTypes.number).isRequired,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    lastPage: PropTypes.bool   
}

export default Pagination
