import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import Loader from 'components/Loader'

import { 
    StyledItemWrapper,
    StyledAlbumThumbnail,
    StyledAlbumInfo,
    StyledViewButton
} from './styles'

const AlbumsItem = ({ albumId, requestForAlbumData, album, setSelectedAlbum }) => {

    useEffect(() => {
        requestForAlbumData(albumId)

    // eslint-disable-next-line
    }, [albumId])

    const { loading, error, thumbnailUrl, authorName } = album;

    return (
        <Fragment>
            {   loading &&
                    <Loader />
            }
            {   error &&
                    <StyledItemWrapper>
                        { error }
                    </StyledItemWrapper>
            }
            {   !loading && !error &&
                    <StyledItemWrapper>
                        <StyledAlbumThumbnail src={thumbnailUrl} />
                        <StyledAlbumInfo>
                            <StyledViewButton onClick={() => setSelectedAlbum(album)}>
                                View
                            </StyledViewButton>
                            { authorName }
                        </StyledAlbumInfo>
                    </StyledItemWrapper>
            }
        </Fragment>
    )
}

AlbumsItem.propTypes = {
    albumId: PropTypes.number.isRequired,
    requestForAlbumData: PropTypes.func,
    album: PropTypes.object,
    setSelectedAlbum: PropTypes.func
}

export default AlbumsItem