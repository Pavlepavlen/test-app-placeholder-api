import React, { Fragment, useEffect, useReducer, useContext } from 'react'

import { SiteInfoContext } from '../../App'
import {
    getAlbumById,
    getUserById,
    getThumbnailsByAlbumId,
    getAlbumsIds
} from 'api'

import {
    albumsInitialState,
    albumsReducer,
    albumsTypes,
    thumbnailReducer,
    thumbnailTypes,
    thumbnailInitialState
} from 'store'

import AlbumsList from './AlbumsList'
import Article from 'components/Article'
import AlbumModal from './AlbumModal'
import Loader from 'components/Loader'

const sectionTitle = 'Hello, welcome to my test project. On this page you could pick one of the following 9 albums to get more information about songs that they are consist of. I hope you will like it'
const errorMessage = 'Something went wrong in request. Try to reload'

const Albums = () => {

    const [albumsStore, albumsDispatch] = useReducer(albumsReducer, albumsInitialState)
    const [thumbnailStore, thumbnailDispatch] = useReducer(thumbnailReducer, thumbnailInitialState)

    const { thumbnailsPerPage } = useContext(SiteInfoContext)
    

    const fetchAlbumsIds = async ( albumsCount = 9 ) => {
        try {
            const albumsIds = await getAlbumsIds(albumsCount)
            albumsDispatch({type: albumsTypes.RESOLVE_ALBUMS_IDS_DATA, payload: albumsIds})
        } catch {
            albumsDispatch({type: albumsTypes.ERROR_OCCURRED_IN_ALBUMS_IDS, payload: errorMessage})
        }
    }

    const fetchAlbumInfo = async ( albumId ) => {
        try {
            const albumInfo = await getAlbumById(albumId)
            const requests = [getUserById(albumInfo.userId), getThumbnailsByAlbumId(albumInfo.id)]
            const [userInfo, thumbnailInfo] = await Promise.all(requests)

            const result = {
                authorName: userInfo.name,
                albumTitle: albumInfo.title,
                albumThumbnail: thumbnailInfo[0].thumbnailUrl,
                albumId: albumInfo.id
            }

            albumsDispatch({type: albumsTypes.RESOLVE_ADDITIONAL_DATA, payload: result})
        } catch {
            albumsDispatch({type: albumsTypes.ERROR_OCCURRED_IN_ADDITIONAL_DATA, payload: {error: errorMessage, albumId}})
        }
    }

    const fetchAlbumThumbnails = async ( albumId, activePage ) => {
        try {
            const thumbnails = await getThumbnailsByAlbumId(albumId, activePage * thumbnailsPerPage, thumbnailsPerPage)
            const result = {
                thumbnails,
                currentPage: activePage
            }

            thumbnailDispatch({type: thumbnailTypes.RESOLVE_THUMBNAILS, payload: result})
        } catch {
            thumbnailDispatch({type: thumbnailTypes.ERROR_OCCURRED_IN_THUMBNAILS, payload: errorMessage})
        }
    }

    useEffect(() => {
        albumsDispatch({ type: albumsTypes.REQUEST_FOR_ALBUMS_IDS })
        fetchAlbumsIds()
    }, [])

    const requestForAlbumData = ( id ) => {
        albumsDispatch({ type: albumsTypes.REQUEST_FOR_ADDITIONAL_DATA, payload: id })
        fetchAlbumInfo(id)
    }

    const requestForThumbnails = ( albumId, page = 1 ) => {
        thumbnailDispatch({ type: thumbnailTypes.REQUEST_FOR_THUMBNAILS, payload: page })
        fetchAlbumThumbnails(albumId, page)
    }

    const setSelectedAlbum = ( album = null ) => {
        albumsDispatch({ type: albumsTypes.SET_SELECTED_ALBUM, payload: album })

        if (!album) {
            thumbnailDispatch({ type: thumbnailTypes.RESET_THUMBNAILS })
        }
    }

    const { albumsIds, albumsData, selectedAlbum, loading, error } = albumsStore

    return (
        <Fragment>
            <Article title={sectionTitle} />
            {   loading &&
                    <Article relative={true} height={'300px'}>
                        <Loader />
                    </Article>
            }
            {   error &&
                    <Article title={error} />

            }
            {   albumsIds && <AlbumsList
                    requestForAlbumData={requestForAlbumData}
                    fetchAlbumInfo={fetchAlbumInfo}
                    albumsData={albumsData}
                    albumsIds={albumsIds}
                    setSelectedAlbum={setSelectedAlbum}
                /> 
            }
            {   selectedAlbum &&
                    <AlbumModal
                        thumbnailStore={thumbnailStore}
                        requestForThumbnails={requestForThumbnails}
                        itemsPerPage={thumbnailsPerPage}
                        onClose={() => setSelectedAlbum(null)}
                        pages={0}
                        selectedAlbum={selectedAlbum}
                    /> 
                // pages 0 because the only one you could do to get pages count it's to preload all thumbnails from current album and calculate length but in this case pagination not need i guess because of performance
            }
        </Fragment>
    )
}

export default Albums
