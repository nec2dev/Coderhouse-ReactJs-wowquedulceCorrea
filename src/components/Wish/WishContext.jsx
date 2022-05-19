import React, { createContext, useState } from 'react';
export const WishContext = createContext([])

const WishContextProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])
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
    const removeItemWishList = (id) => {
        const filteredWishList = wishList.filter((item) => item.id !== id)
        setWishList(filteredWishList)
    }
    function emptyWishList() {
        setWishList([])
    }
    const wishCounter = () => {
        return (
            wishList.reduce((prev2, prod2) => (prev2 + prod2.quantity), 0)
        )
    }
    const totalWishBuy = () => {
        return (
            wishList.reduce((prev, prod) => (prev + prod.quantity * prod.precio), 0)
        )
    }
    return (
        <WishContext.Provider value={{ wishList, addToWishList, wishCounter, removeItemWishList, emptyWishList, totalWishBuy }}>
            {children}
        </WishContext.Provider>
    )
}

export default WishContextProvider