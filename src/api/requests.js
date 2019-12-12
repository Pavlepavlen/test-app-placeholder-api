import { apiUrl, albums, userId, users, photos, searchByAlbumId } from './constants'

import { getFilledWithIndexesArray } from 'utils'

export const getAlbumsByUserId = ( id ) => {
    return fetch(`${apiUrl}${albums}?${userId}=${id}`)
        .then(data => {
            if (!data.ok) {
                throw new Error('error')
            }
            return data.json()
        })
        .catch(error => error)
}

export const getAlbumById = ( id ) => {
    return fetch(`${apiUrl}${albums}/${id}`)
        .then(data => {
            if (!data.ok) {
                throw new Error('error')
            }
            return data.json()
        })
        .catch(error => error)
}

export const getUserById = ( id ) => {
    return fetch(`${apiUrl}${users}/${id}`)
    .then(data => {
        if (!data.ok) {
            throw new Error('error')
        }
        return data.json()
    })
        .catch(error => error)
}

export const getThumbnailsByAlbumId = ( id, start = 1, limit = 1 ) => {
    return fetch(`${apiUrl}${photos}?${searchByAlbumId(id, start, limit)}`)
    .then(data => {
        if (!data.ok) {
            throw new Error('error')
        }
        return data.json()
    })
    .catch(error => error)
}

export const getAlbumsIds = ( albumsCount ) => {
    return Promise.resolve(getFilledWithIndexesArray(albumsCount, 10));
}
