import {Dispatch} from "redux";
import axios from "axios";
import {PhotoAction, PhotoItem, PhotosActionTypes} from "../../types/catalog";

export const fetchPhotos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS})
            const response = await axios.get<PhotoItem[]>('https://jsonplaceholder.typicode.com/photos', {
                params: {_page: page, _limit: limit}
            })

            const modifyData = response.data.map(el => ({...el, isFavorite: false}))

            dispatch({type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, payload: modifyData})
        } catch (e) {
            dispatch({
                type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
                payload: 'Произошла ошибка при загрузке фото'
            })
        }
    }
}

export function favoriteHandler(id: number): PhotoAction {
    return {type: PhotosActionTypes.FAVORITE_HANDLER, payload: id}
}