export const types = {
    REQUEST_FOR_THUMBNAILS: 'REQUEST_FOR_THUMBNAILS',
    ERROR_OCCURRED_IN_THUMBNAILS: 'ERROR_OCCURRED_IN_THUMBNAILS',
    RESOLVE_THUMBNAILS: 'RESOLVE_THUMBNAILS',
    RESET_THUMBNAILS: 'RESET_THUMBNAILS'
}

export const initialState = {
    currentPage: 1,
    thumbnails: null,
    loading: false,
    error: null,
    lastPage: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case types.REQUEST_FOR_THUMBNAILS:
            return {
                ...state,
                loading: true,
                currentPage: action.payload
            };
        case types.ERROR_OCCURRED_IN_THUMBNAILS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case types.RESOLVE_THUMBNAILS:
            const { thumbnails, currentPage } = action.payload
            const newThumbnails = thumbnails.map(item => item.thumbnailUrl)
            
            return {
                ...state,
                loading: false,
                thumbnails: newThumbnails,
                lastPage: state.thumbnails && newThumbnails.length !== state.thumbnails.length,
                currentPage
            }
        case types.RESET_THUMBNAILS:
            return {
                initialState
            }
        default:
        return {...state}
    }
}