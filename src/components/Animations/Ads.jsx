import React from 'react'
import { Link } from 'react-router-dom'
import AdsImg from '../../assets/img/ads.jpg' 

const Ads = () => {
  return (
    <div className="container pb-16">
        <Link to="./pages/underConstruction.html">
          <img src={AdsImg} className="w-full" alt="" />
        </Link>
      </div>
  )
}

export default Ads