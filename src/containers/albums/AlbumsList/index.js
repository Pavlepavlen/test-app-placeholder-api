import React from 'react'
import PropTypes from 'prop-types'

import Article from 'components/Article'
import AlbumsItem from '../AlbumsItem'
import { ItemsWrapper } from './styles'

const AlbumsList = ({ requestForAlbumData, albumsIds, albumsData, setSelectedAlbum }) => (
    <Article width={'95%'} >
        <ItemsWrapper>
            { albumsIds && albumsIds.map(item => (
                <AlbumsItem
                    key={item}
                    albumId={item}
                    setSelectedAlbum={setSelectedAlbum}
                    album={albumsData.get(item)}
                    requestForAlbumData={requestForAlbumData}
                />
            ))}
        </ItemsWrapper>
    </Article>
)

AlbumsList.propTypes = {
    albumsIds: PropTypes.arrayOf(PropTypes.number),
    setSelectedAlbum: PropTypes.func,
    albumsData: PropTypes.object,
    thumbnailStore: PropTypes.object
}

export default AlbumsList
