import React from 'react'
import { Link } from 'react-router-dom'
import Cover1 from '../../assets/img/cover.png'

export default function Cover01() {
  return (
    <Link to="/"><img src={Cover1} alt="wow que dulce portada" /></Link>
  )
}

