import React, {useEffect, useMemo, useState} from 'react';
import {Button} from "@mui/material";
import {useTypedSelector} from "./store/hooks/useTypedSelector";
import {useActions} from "./store/hooks/useAction";
import ListItem from "./components/ListItem/ListItem";

import './index.css'

function App() {

    const {photos, page, limit, loading, error} = useTypedSelector(state => state.catalog)
    const [isSorting, setIsSorting] = useState(false)

    const {fetchPhotos} = useActions()

    const sortCatalog = useMemo(() => {
        return [...photos].filter(el => el.isFavorite)
    }, [photos])

    useEffect(() => {
        fetchPhotos(page, limit)
    }, [])

    if (error) return <p>{error}</p>
    if (loading) return <p>Загрузка...</p>

    return (
        <div className="App">
            {isSorting
                ? <Button
                    onClick={() => setIsSorting(false)}
                    variant="contained"
                >
                    Сбросить
                </Button>
                : <Button
                    onClick={() => setIsSorting(true)}
                    variant="contained"
                >
                    Показать избранные
                </Button>
            }

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
                    : sortCatalog.length > 0 ? sortCatalog.map(el => (
                        <ListItem
                            key={el.id}
                            albumId={el.albumId}
                            id={el.id}
                            thumbnailUrl={el.thumbnailUrl}
                            url={el.url}
                            title={el.title}
                            isFavorite={el.isFavorite}
                        />
                    )) : <p>Ничего нет..</p>}
            </div>

        </div>
    );
}

export default App;
