import React, {FC} from 'react';
import {PhotoItem} from "../../types/catalog";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

import classes from './ListItem.module.css'

const ListItem = (props: PhotoItem) => {

    const {url, id, title, isFavorite} = props

    return (
        <Card sx={{maxWidth: 345}} className={classes.container}>
            <CardActionArea>

                <img src="/icon-close.svg" alt=""/>

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