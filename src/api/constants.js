export const apiUrl = 'https://jsonplaceholder.typicode.com/'

export const albums = 'albums'

export const users = 'users'

export const userId = 'userId'

export const photos = 'photos'

export const searchByAlbumId = (albumId, start = 1, limit = 1) => `albumId=${albumId}&_start=${start}&_limit=${limit}`