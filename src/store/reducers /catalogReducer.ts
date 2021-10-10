import {PhotoAction, PhotosActionTypes, PhotoState} from "../../types/catalog";

const initialState: PhotoState = {
    photos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const catalogReducer = (state = initialState, action: PhotoAction): PhotoState => {
    switch (action.type) {
        case PhotosActionTypes.FETCH_PHOTOS:
            return {...state, loading: true}
        case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.payload}
        case PhotosActionTypes.FETCH_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PhotosActionTypes.FAVORITE_HANDLER:
            return {
                ...state,
                photos: [...state.photos].map(el =>
                    el.id === action.payload
                        ? {...el, isFavorite: !el.isFavorite}
                        : el)
            }
        default:
            return state
    }
}