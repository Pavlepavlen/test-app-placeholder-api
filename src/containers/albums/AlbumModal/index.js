import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { getFilledWithIndexesArray } from 'utils'

import Modal from 'components/Modal'
import Pagination from 'components/Pagination'
import Loader from 'components/Loader'
import ThumbnailsList from '../ThumbnailsList'

import { StyledTitle, LoaderWrapper } from './styles'

const AlbumModal = ({ selectedAlbum, onClose, pages, requestForThumbnails, thumbnailStore }) => {

    const { currentPage, thumbnails, loading, error, lastPage } = thumbnailStore;

    useEffect(() => {
        requestForThumbnails(selectedAlbum.id, currentPage)

    // eslint-disable-next-line
    }, [])

    const changePageHandler = ( pageNumber ) => {
        requestForThumbnails(selectedAlbum.id, pageNumber)
    }

    return (
        <Modal height={'600px'} width={'90%'} onClose={onClose}>
            <StyledTitle>
                {selectedAlbum.title}
            </StyledTitle>
            {   loading &&
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
            }
            {   error &&
                    <StyledTitle>
                        { error }
                    </StyledTitle>
            }
            {   thumbnails && !loading && !error && 
                    <ThumbnailsList
                        loading={loading}
                        error={error}
                        thumbnails={thumbnails}
                    />
            }
            <Pagination
                lastPage={lastPage}
                currentPage={currentPage}
                setCurrentPage={changePageHandler}
                pagesList={getFilledWithIndexesArray(3, 1)}
            />
        </Modal>
    )
}

AlbumModal.propTypes = {
    album: PropTypes.object,
    onClose: PropTypes.func,
    pages: PropTypes.number,
    itemsPerPage: PropTypes.number,
    thumbnailStore: PropTypes.object
}

export default AlbumModal
