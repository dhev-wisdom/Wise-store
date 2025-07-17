import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // Check if product already in cart, increment product count
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            (cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1, subTotal: parseInt(cartItem.quantity * cartItem.price)} : 
            cartItem));
    }

    // if not in cart, add fresh product
    return [...cartItems, {...productToAdd, quantity: 1, subTotal: productToAdd.price}];
}

export const CartContext = createContext({
    open: false,
    setOpen: () => {},
    cartItems: [],
    setCartItems: () => {},
    addProductToCart: () => {},
    cartItemsCount: 0,
    itemsTotalAmount: 0,
    setItemsTotalAmount: () => {},
    increaseProductCount: () => {},
    decreaseProductCount: () => {},
    removeFromCart: () => {},
});

export const CartProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [itemsTotalAmount, setItemsTotalAmount] = useState(0);

    const addProductToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    
    useEffect(() => {
        const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        const itemsTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setCartItemsCount(totalItemsCount);
        setItemsTotalAmount(itemsTotal.toFixed(2));
    }, [cartItems]);
    
    const increaseProductCount = (product) => {
        const productToIncrease = cartItems.find(item => item.id === product.id);
        if (productToIncrease) {
            const newCart = cartItems.map(item => (item.id === product.id ? {...product, quantity: product.quantity + 1} : item));
            setCartItems(newCart);
        }

    }

    const decreaseProductCount = (product) => {
        const productToDecrease = cartItems.find(item => item.id === product.id);
        if (productToDecrease && product.quantity > 1) {
            const newCart = cartItems.map(item => (item.id === product.id ? {...product, quantity: product.quantity - 1} : item));
            setCartItems(newCart);
        } else if (productToDecrease && product.quantity === 1) {
            const newCart = cartItems.filter(item => item.id !== product.id);
            setCartItems(newCart);
        }
    }

    const removeFromCart = (product) => {
        const productToRemove = cartItems.find(item => item.id === product.id);
        if (productToRemove) {
            const newCart = cartItems.filter(item => item.id !== product.id);
            setCartItems(newCart);
        }
    }

    const value = {
        open, setOpen, 
        cartItems, setCartItems, addProductToCart, 
        cartItemsCount, itemsTotalAmount,
        increaseProductCount, decreaseProductCount, removeFromCart
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}