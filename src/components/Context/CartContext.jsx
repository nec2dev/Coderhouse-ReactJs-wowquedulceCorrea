import React, { createContext, useState } from 'react';
export const CartContext = createContext([])

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList, wishList, setWishList] = useState([])
    function addToCart(item) {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldItem = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { ...item, quantity: item.quantity + oldItem }])
        } else {
            setCartList([...cartList, item])
        }
    }
    function addToWishList(item) {
        const index = wishList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldItem = wishList[index].quantity
            wishList.splice(index, 1)
            setWishList([...wishList, { ...item, quantity: item.quantity + oldItem }])
        } else {
            setWishList([...wishList, item])
        }
    }
    const removeItem = (id) => {
        const filteredCart = cartList.filter((item) => item.id !== id)
        setCartList(filteredCart)
    }
    const removeItemWishList = (id) => {
        const filteredWishList = wishList.filter((item) => item.id !== id)
        setWishList(filteredWishList)
    }
    function emptyCart() {
        setCartList([])
    }
    function emptyWishList() {
        setWishList([])
    }
    const cartCounter = () => {
        return (
            cartList.reduce((prev, prod) => (prev + prod.quantity), 0)
        )
    }
    // const wishCounter = () => {
    //     return (
    //         wishList.reduce((prev2, prod2) => (prev2 + prod2.quantity), 0)
    //     )
    // }
    const totalBuy = () => {
        return (
            cartList.reduce((prev, prod) => (prev + prod.quantity * prod.precio), 0)
        )
    }
    return (
        <CartContext.Provider value={{ cartList, addToCart, addToWishList, removeItem, removeItemWishList, emptyCart, emptyWishList, cartCounter, totalBuy }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

