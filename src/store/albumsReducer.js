const initialAlbumData = {
    id: 0,
    title: '',
    authorName: '',
    thumbnailUrl: '',
    loading: false,
    error: '',
}

export const types = {
    REQUEST_FOR_ALBUMS_IDS: 'REQUEST_FOR_ALBUMS_IDS',
    ERROR_OCCURRED_IN_ALBUMS_IDS: 'ERROR_OCCURRED_IN_ALBUMS_IDS',
    RESOLVE_ALBUMS_IDS_DATA: 'RESOLVE_ALBUMS_IDS_DATA',
    REQUEST_FOR_ADDITIONAL_DATA: 'REQUEST_FOR_ADDITIONAL_DATA',
    ERROR_OCCURRED_IN_ADDITIONAL_DATA: 'ERROR_OCCURRED_IN_ADDITIONAL_DATA',
    RESOLVE_ADDITIONAL_DATA: 'RESOLVE_ADDITIONAL_DATA',
    SET_SELECTED_ALBUM: 'SET_SELECTED_ALBUM'
}

export const initialState = {
    albumsData: null,
    loading: false,
    error: null,
    albumsIds: null,
    selectedAlbum: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case types.REQUEST_FOR_ALBUMS_IDS:
            return {
                ...state,
                loading: true
            };
        case types.ERROR_OCCURRED_IN_ALBUMS_IDS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case types.RESOLVE_ALBUMS_IDS_DATA:
            const albumsData = new Map();
            const albumsIds = action.payload;

            action.payload.forEach(item => {
                albumsData.set(item, initialAlbumData)
            })

            return {
                ...state,
                loading: false,
                albumsData,
                albumsIds
            }
        case types.REQUEST_FOR_ADDITIONAL_DATA:
            const updatedData = state.albumsData;
            for (let [key, value] of state.albumsData) {
                if (key === action.payload) {
                    updatedData.set(key, {...value, loading: true})
                }
            }

            return {
                ...state,
                albumsData: updatedData
            }
        case types.ERROR_OCCURRED_IN_ADDITIONAL_DATA:
            const errorInDataItems = state.albumsData;
            const {payload: { error, albumId: id }} = action;
            for (let [key, value] of state.albumsData) {
                if (key === id) {
                    errorInDataItems.set(
                        key, 
                        {
                            ...value,
                            loading: false,
                            error
                        })
                }
            }

            return {
                ...state,
                albumsData: errorInDataItems
            }
        case types.RESOLVE_ADDITIONAL_DATA:
            const updatedDataItems = state.albumsData;
            const {payload: { albumTitle, authorName, albumThumbnail, albumId }} = action;
            for (let [key, value] of state.albumsData) {
                if (key === albumId) {
                    updatedDataItems.set(
                        key, 
                        {
                            ...value,
                            loading: false,
                            title: albumTitle,
                            authorName: authorName,
                            thumbnailUrl: albumThumbnail,
                            id: albumId
                        })
                }
            }

            return {
                ...state,
                albumsData: updatedDataItems
            }
        case types.SET_SELECTED_ALBUM:
            return {
                ...state,
                selectedAlbum: action.payload
            }
        default:
        return {...state}
    }
}