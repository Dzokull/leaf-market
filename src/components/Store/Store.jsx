import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import Products from '../Products/Products';
import clsx from 'clsx';
import { CssBaseline , Drawer, Box, AppBar, Toolbar, List, Typography,
Divider, IconButton, Badge, Container, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { AddShoppingCart, Settings } from '@material-ui/icons';
import { mainListItems, secondaryListItems, } from '../Dashboard/listItems';
import useStyles from './styles';
import Cart from './Cart';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://nyte-portfolio.netlify.app">
          Nathaniel k Yuave
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const App = () => {
    //======FETCH API FUNCTIONS=========
    const [products , setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }
    const fetchCart = async () =>{
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }
    const handleUpdate = async (productId, quantity) => {
      const {cart} = await commerce.cart.update(productId,{ quantity});
      setCart(cart);
    }
    const handleRemove = async (productId) => {
      const {cart} = await commerce.cart.remove(productId);
      setCart(cart);
    }
    const handleEmpty = async () => {
      const {cart} = await commerce.cart.empty();
      setCart(cart);
    }
    useEffect(() => {
        fetchProducts();
        fetchCart()
    }, []);
    //====Inner APP Functions
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
     setOpen(true);
     };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Leaf Market
          </Typography>
          <IconButton color="inherit">
            <Badge color="secondary" badgeContent={cart.total_items}>
              <AddShoppingCart />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Settings />
            </Badge>
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
            <Products products={products} onAddToCart={handleAddToCart}/>
            <Cart cart={cart} 
            handleUpdate ={handleUpdate}
            handleRemove={handleRemove}
            handleEmpty={handleEmpty}
            />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    )
}

export default App