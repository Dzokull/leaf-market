import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, Settings, ShoppingBasket, Shop, ShopOutlined, ShopTwoTwoTone, Store } from '@material-ui/icons';
import useStyles from './styles';
import Leaf1 from '../../assets/images/Leaf_logo_1.png';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit' component={Link} to='/'>
                        <img src={Leaf1} alt='lm' height="50px" className={classes.image} />
                        Leaf Market
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color='inherit' component={Link} to='/store'>
                            <Store />
                        </IconButton>
                        <IconButton aria-label="Show Cart Items" color='inherit'>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        
                        <IconButton aria-label="Show Cart Items" color='inherit'>
                            <Settings />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
