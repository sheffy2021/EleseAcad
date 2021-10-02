import React, { useEffect, useState, useRef } from 'react'
import { Nav, NavBtn, NavBtnLink, NavBtns, NavContainer, NavIcon, NavLogo } from './Styling'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
// import {animateScroll as scroll} from 'react-scroll'


const HiddenRouterBar = ({ toggle, menuLogo, menuLogoSpan, showBarIcon, showsignin, menuButtonTitle1,
    menuButtonTitle2, showbuttons }) => {


    const [prevScrollpos, setprevScrollpos] = useState(window.pageYOffset);
    const inputRef = useRef()

    const hiddenNavEffect = () => {
        const currentScrollpos = window.pageYOffset;
        // console.log(inputRef.current)
        if (prevScrollpos <= 80) {
            inputRef.current.style.top = '0'
        }
        else if (prevScrollpos > currentScrollpos) {
            inputRef.current.style.top = '0'
        } else {
            inputRef.current.style.top = '-80px'
        }

        setprevScrollpos(currentScrollpos);
    }

    useEffect(() => {
        window.addEventListener('scroll', hiddenNavEffect)

        return () => {
            window.removeEventListener('scroll', hiddenNavEffect)
        }
    })


    return (
        <>
            <IconContext.Provider value={{ color: 'red' }}>
                <Nav ref={inputRef}>
                    <NavContainer>
                        <NavIcon onClick={toggle} showBarIcon={showBarIcon}><FaBars /></NavIcon>
                        <NavLogo to='/'>{menuLogo}<span>{menuLogoSpan}</span></NavLogo>
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
            </IconContext.Provider>
        </>
    )
}

export default HiddenRouterBar
