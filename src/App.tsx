import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "./store/hooks/useTypedSelector";
import {useActions} from "./store/hooks/useAction";
import {fetchPhotos} from "./store/actions-creators/catalog";
import ListItem from "./components/ListItem/ListItem";
import {Button} from "@mui/material";
import {PhotoItem} from "./types/catalog";

import './index.css'

function App() {
    const {photos, page, limit, loading, error} = useTypedSelector(state => state.catalog)
    const {fetchPhotos} = useActions()

    const [isSorting, setIsSorting] = useState(false)

    const sortCatalog = (arr: PhotoItem[]) => {
        return arr.filter(el => el.isFavorite)
    }

    useEffect(() => {
        fetchPhotos(page, limit)
    }, [])

    if (error) return <p>{error}</p>
    if (loading) return <p>Загрузка...</p>
    return (
        <div className="App">
            {isSorting
                ? <Button onClick={() => setIsSorting(false)} variant="contained">Сбросить</Button>
                : <Button onClick={() => setIsSorting(true)} variant="contained">Показать избранные</Button>}

            <div className='list'>
                {!isSorting
                    ? photos.map(el => (
                        <ListItem
                            key={el.id}
                            albumId={el.albumId}
                            id={el.id}
                            thumbnailUrl={el.thumbnailUrl}
                            url={el.url}
                            title={el.title}
                            isFavorite={el.isFavorite}
                        />
                    ))
                    : sortCatalog(photos).map(el => (
                        <ListItem
                            key={el.id}
                            albumId={el.albumId}
                            id={el.id}
                            thumbnailUrl={el.thumbnailUrl}
                            url={el.url}
                            title={el.title}
                            isFavorite={el.isFavorite}
                        />
                    ))}
            </div>

        </div>
    );
}

export default App;
