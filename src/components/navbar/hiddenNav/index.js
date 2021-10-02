import React, { useEffect, useState, useRef } from 'react'
import { Nav, NavBtn, NavBtnLink, NavContainer, NavIcon, NavLogo } from './Styling'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
// import {animateScroll as scroll} from 'react-scroll'


const HiddenNav = ({ toggle, menuLogo, menuLogoSpan, menuButtonTitle }) => {


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
                        <NavIcon onClick={toggle}><FaBars /></NavIcon>
                        <NavLogo to='home' smooth={false} duration={500} spy={true}
                            exact='true' offset={-140}>{menuLogo}<span>{menuLogoSpan}</span></NavLogo>

                        <NavBtn>
                            <NavBtnLink to='/signin'>{menuButtonTitle}</NavBtnLink>
                        </NavBtn>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default HiddenNav
