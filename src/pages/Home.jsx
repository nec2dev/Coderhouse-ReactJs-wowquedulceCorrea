import React from 'react'
import Carousel from '../components/Animations/Carousel'
import NavBarHome from '../components/NavBar/NavBarHome'
import CategoriesContainer from '../components/Categories/CategoriesContainer'
import Ads from '../components/Animations/Ads'

const Home = () => {
  return (
    <main>
      <Carousel />
      <NavBarHome />
      <CategoriesContainer />
      <Ads />
    </main>
  )
}

export default Home
