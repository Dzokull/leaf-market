import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Button} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


const Product = ({ product }) => {
    const classes = useStyles();
    console.log(product);
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name}>
                <Typography variant='h6' gutterBottom>
                    {product.name}
                </Typography>
               
            </CardMedia>
            <CardActions disableSpacing className={classes.cardActions}>    
                <Button endIcon={<AddShoppingCart />} size='small' variant='outlined' color='secondary' aria-label="Add to Cart">
                    {product.price.formatted_with_symbol}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product
