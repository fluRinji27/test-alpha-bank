export interface PhotoItem {
    id: number
    albumId: number
    title: string
    url: string
    thumbnailUrl: string
    isFavorite?: boolean
}

export interface PhotoState {
    photos: PhotoItem[],
    page: number,
    error: string | null,
    limit: number,
    loading: boolean
}

export enum PhotosActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
    FAVORITE_HANDLER = 'FAVORITE_HANDLER'
}

interface fetchPhotos {
    type: PhotosActionTypes.FETCH_PHOTOS
}

interface fetchPhotosSuccess {
    type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS
    payload: PhotoItem[]
}

interface fetchPhotosError {
    type: PhotosActionTypes.FETCH_PHOTOS_ERROR
    payload: string
}

interface isFavoriteHandler {
    type: PhotosActionTypes.FAVORITE_HANDLER
    payload: number
}


export type PhotoAction = fetchPhotos | fetchPhotosSuccess | fetchPhotosError | isFavoriteHandler
