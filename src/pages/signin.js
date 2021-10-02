import React, { useState } from 'react'
import HiddenRouterBar from '../components/routerBars/hiddenRouterBar';
import SideRouterBar from '../components/routerBars/sideRouterBar';
import TopRouterBar from '../components/routerBars/topRouterBar';
import SignIn from '../components/signin'

const SigninPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        if (isOpen === true) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }
    return (
        <>
            <HiddenRouterBar isOpen={isOpen} toggle={toggle} menuLogo="Boiler" menuLogoSpan='Plate' showBarIcon />
            <TopRouterBar isOpen={isOpen} toggle={toggle} menuLogo="Boiler" menuLogoSpan='Plate'
                menuList1='Media Courses' menuList2='IT Courses' displayicon
            />
            <SideRouterBar isOpen={isOpen} toggle={toggle} menuList1='Graphic Design' menuList2='Video Editing'
                menuList3='Animation' menuList4='Python' menuList5='Javascript' menuList6='Front-end Stack'
                menuList7='Back-end Stack' menuList8='Full Stack' menuList9='React' menuList10='MERN Stack'
            />
            <SignIn />
        </>
    )
}

export default SigninPage
