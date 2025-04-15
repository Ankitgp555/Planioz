import React,{useContext,useState} from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Craving something delicious? Your favorites are just a click away!</p>
            <a href="#explore-menu"><button onClick={()=>setMenu('menu')}>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header