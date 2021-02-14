import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products }) => {
    const classes = useStyles()
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={2}> 
            {products.map((item) =>(
                <Grid item key={item.id} xls={12} sm={6} md={4} lg={3}>
                    <Product product={item}/>
                </Grid>
            ))}
        </Grid>    
    </main>
    )
    
}

export default Products;