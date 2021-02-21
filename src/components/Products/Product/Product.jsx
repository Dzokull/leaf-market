import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, FormControlLabel, Button , Checkbox} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

function CheckboxExample({product, addToCart}){
    const [checked, setChecked] = React.useState(false)
    return (
        <div>
            <FormControlLabel 
                control={<Checkbox 
                    icon={<Button endIcon={<AddShoppingCart />} size='small' variant='outlined' color='secondary'>
                    {product.price.formatted_with_symbol}
                </Button>}
                    checkedIcon={<Button endIcon={<AddShoppingCart />} size='small' variant='contained' color='secondary' aria-label="Add to Cart" >
                    Added To Cart
                </Button>}
                    checked={checked}
                    onChange={(e) =>setChecked(e.target.checked)}
                    inputProps={{
                        'aria-label': 'secondary checkbox'
                    }}
                    />}
            />
            
        </div>
    )
}
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name}>
                <Typography variant='h6' gutterBottom>
                    {product.name}
                </Typography>
            </CardMedia>
            <CardActions disableSpacing className={classes.cardActions}> 
                <CheckboxExample product={product} addToCart={onAddToCart}/>
                {/*<Button endIcon={<AddShoppingCart />} size='small' variant='outlined' color='secondary' aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    {product.price.formatted_with_symbol}
            </Button>*/}
            </CardActions>
        </Card>
    )
}

export default Product
