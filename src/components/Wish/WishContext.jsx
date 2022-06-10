import React, { createContext, useState } from 'react'
export const WishContext = createContext([])

const WishContextProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])
    function addToWish(item) {
        const index = wishList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldItem = wishList[index].quantity
            wishList.splice(index, 1)
            setWishList([...wishList, { ...item, quantity: item.quantity + oldItem }])
        } else {
            setWishList([...wishList, item])
        }
    }
    const removeItemWish = (id) => {
        const filteredWish = wishList.filter((item) => item.id !== id)
        setWishList(filteredWish)
    }
    function emptyWish() {
        setWishList([])
    }
    const wishCounter = () => {
        return (
            wishList.reduce((prev, prod) => (prev + prod.quantity), 0)
        )
    }
    const totalBuyWish = () => {
        return (
            wishList.reduce((prev, prod) => (prev + prod.quantity * prod.precio), 0)
        )
    }
    return (
        <WishContext.Provider value={{ wishList, addToWish, removeItemWish, emptyWish, wishCounter, totalBuyWish }}>
            {children}
        </WishContext.Provider>
    )
}

export default WishContextProvider