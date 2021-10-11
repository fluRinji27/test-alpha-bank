import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useActions} from "../../store/hooks/useAction";
import {PhotoItem} from "../../types/catalog";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

import {ReactComponent as CloseIcon} from './icon-close.svg'

import classes from './ListItem.module.css'

const ListItem = (props: PhotoItem) => {

    const {url, id, title, isFavorite} = props

    const {removePhotoItem} = useActions()

    return (
        <Card sx={{maxWidth: 345}} className={classes.container}>
            <CardActionArea>
                <CloseIcon onClick={() => removePhotoItem(id)}/>

                <CardMedia
                    component="img"
                    height="140"
                    image={url}
                    alt="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <FavoriteIcon id={id} isFavorite={isFavorite ? isFavorite : false}/>
                </CardContent>

            </CardActionArea>
        </Card>
    );
};

export default ListItem;