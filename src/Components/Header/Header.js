import React from 'react'
import TabContainer from '../TabContainer/TabContainer'
import Logo from '../../images/starter-code/assets/shared/logo.svg'
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="horizontalLine"></div>  
        <div className="navBar">
            <TabContainer/>
        </div>      
    </div>
  )
}

export default Header