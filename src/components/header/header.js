import React from 'react'
import MobileMenu from './mobile-menu/mobile-menu'
import Avatar from './avatar/avatar'
import "./header.css"
import Name from './name/name'
import SocialIcons from './social-icons/social-icons'
import MainNav from './main-nav/main-nav'
import CopyRight from './copyright/copyright'

const Header = () => {
  return (
    <header className="header pull-left">
        <MobileMenu/>
        <Avatar/>
        <Name/>
        <SocialIcons/>
        <MainNav/>
        <CopyRight/>
    </header>
  )
}

export default Header