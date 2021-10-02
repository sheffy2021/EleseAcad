import React, { useEffect, useState } from 'react'
import {
    ArrowDown,
    Cover, Nav, NavBtn, NavBtnLink, NavContainer, NavIcon, NavLink, NavLinkLi, NavLinkLiLink,
    NavLinkUl, NavLogo, NavMenu, NavMenuLi, NavMenuUl
} from './Styling'
import { FaBars } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
// import {animateScroll as scroll} from 'react-scroll'




const Navbar = ({ isOpen, toggle, menuLogo, menuLogoSpan, menuButtonTitle,
    menuList1, menuList2, menuList3 }) => {
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
                    <NavIcon onClick={toggle}><FaBars /></NavIcon>
                    <NavLogo to='home' smooth={false} duration={500} spy={true} exact='true'
                        offset={-220}>{menuLogo}<span>{menuLogoSpan}</span></NavLogo>
                    <NavMenu>
                        <NavMenuUl>

                            <NavMenuLi><NavLink to='media' smooth={false} duration={500} spy={true} exact='true'
                                offset={-220}>{menuList1}</NavLink></NavMenuLi>
                            <NavMenuLi><NavLink to='it' smooth={false} duration={500} spy={true} exact='true'
                                offset={-220}>{menuList2}</NavLink></NavMenuLi>
                            <NavMenuLi>
                                <NavLink to='signup' smooth={false} duration={500} spy={true} exact='true'
                                    offset={-220}>{menuList3}<ArrowDown /></NavLink>
                                <NavLinkUl>
                                    <NavLinkLi> <NavLinkLiLink to='/python'>Python</NavLinkLiLink></NavLinkLi>
                                    <NavLinkLi><NavLinkLiLink to='/computer-fundamentals'>Computer Fundamentals</NavLinkLiLink></NavLinkLi>
                                    <NavLinkLi><NavLinkLiLink to='/peachtree'>PeachTree</NavLinkLiLink></NavLinkLi>
                                    <NavLinkLi><NavLinkLiLink to='/spss'>SPSS</NavLinkLiLink></NavLinkLi>
                                    <NavLinkLi><NavLinkLiLink to='/eview'>E-view</NavLinkLiLink></NavLinkLi>
                                </NavLinkUl>

                            </NavMenuLi>
                        </NavMenuUl>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>{menuButtonTitle}</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
