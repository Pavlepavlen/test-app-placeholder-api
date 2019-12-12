import React from 'react'
import PropTypes from 'prop-types'

import {
    ThumbnailSectionWrapper,
    StyledThumbnail
} from './styles'

const ThumbnailsList = ({ thumbnails }) => (
    <ThumbnailSectionWrapper>
        {   !!thumbnails.length &&
                thumbnails.map(item => (
                    <StyledThumbnail key={item} src={item} />
                ))
        }
    </ThumbnailSectionWrapper>
)

ThumbnailsList.propTypes = {
    thumbnails: PropTypes.arrayOf(PropTypes.string),
}

export default ThumbnailsList
