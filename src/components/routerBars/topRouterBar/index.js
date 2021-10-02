import React, { useEffect, useState } from 'react'
import {
    Cover, Nav, NavBtn, NavBtnLink, NavBtns, NavContainer, NavIcon, NavLink, NavLogo, NavMenu, NavMenuLi, NavMenuUl
} from './Styling'
import { FaBars } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
// import {animateScroll as scroll} from 'react-scroll'




const TopRouterBar = ({ isOpen, toggle, menuLogo, menuLogoSpan, showbuttons, displayicon,
    menuList1, menuList2, menuButtonTitle1, menuButtonTitle2, showsignin }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)

        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    })


    return (
        <>
            <Cover isOpen={isOpen} onClick={toggle}></Cover>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavIcon onClick={toggle} displayIcon={displayicon}><FaBars /></NavIcon>
                    <NavLogo to='/'>{menuLogo}<span>{menuLogoSpan}</span></NavLogo>
                    <NavMenu>
                        <NavMenuUl>

                            <NavMenuLi><NavLink to='/'>{menuList1}</NavLink></NavMenuLi>
                            <NavMenuLi><NavLink to='/'>{menuList2}</NavLink></NavMenuLi>

                        </NavMenuUl>
                    </NavMenu>
                    <NavBtns showButtons={showbuttons}>
                        <NavBtn showSignIn={showsignin}>
                            <NavBtnLink to='/signin'>{menuButtonTitle1}</NavBtnLink>
                        </NavBtn>
                        <NavBtn showSignIn={showsignin}>
                            <NavBtnLink to='/payment-form'>{menuButtonTitle2}</NavBtnLink>
                        </NavBtn>
                    </NavBtns>
                </NavContainer>
            </Nav>
        </>
    )
}

export default TopRouterBar
