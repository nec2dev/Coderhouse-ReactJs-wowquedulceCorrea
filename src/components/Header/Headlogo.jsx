import React from "react"
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/logo.png"

export default function HeadLogo() {
  return (
       <Link to="/"><img src={Logo} alt="logo wow que dulce" className="w-32" /></Link>
  )
}
