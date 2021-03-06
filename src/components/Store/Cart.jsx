import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
const Cart = ({ cart, handleUpdate, handleRemove, handleEmpty }) => {
    const classes = useStyles();
    const EmptyCart = () =>(
        <Typography variant='subtitle1'>
            You have no items in your Shopping Cart
        </Typography>
    );
    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=> (
                <Grid item xs={12} sm={4} key={item.id}>
                   <CartItem item={item}  updateCart={handleUpdate} removeCart={handleRemove} />
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: {
                        cart.subtotal.formatted_with_symbol
                    }
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmpty}>
                        EmptyCart
                    </Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                        Check Out
                    </Button>
                </div>
        </div>
        </>
    );
    if(!cart.line_items) return 'Loading...';

    return (
       <Container>
           <div className={classes.toolbar_cart} />
           <Typography className={classes.title} variant='h3'>
               Your Shopping Cart
           </Typography>
           { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
       </Container>
    )
}

export default Cart
