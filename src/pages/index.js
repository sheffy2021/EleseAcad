import Sidebar from "../components/navbar/sidebar"
import Navbar from "../components/navbar/topbar"
import React, { useState } from 'react'
import HeroSection from "../components/heroSection";
import Footer from "../components/footer";
import NewsLetter from "../components/newsLetter";
import ScopeBase from "../components/scope/ScopeBase";
import ITScopeBase from "../components/IT/ScopeBase";
import MediaScopeBase from "../components/media/ScopeBase";
import Headline from "../components/headline";
import HiddenNav from "../components/navbar/hiddenNav";



const Home = () => {
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
            <HiddenNav isOpen={isOpen} toggle={toggle} menuLogo="Boiler" menuLogoSpan='Plate' />
            <Navbar isOpen={isOpen} toggle={toggle}
                menuLogo="Boiler" menuLogoSpan='Plate' menuButtonTitle='Sign in'
                menuList1='Media' menuList2='Web Development' menuList3='Others' menuList4 menuList5
                menuList6 menuList7 menuList8 menuList9 menuList10
            />
            <Sidebar isOpen={isOpen} toggle={toggle} menuButtonTitle='Sign in'
                menuList1='Media' menuList2='Web Development' menuList3='Others' menuList4 menuList5
                menuList6 menuList7 menuList8 menuList9 menuList10
            />
            <HeroSection />
            <Headline heading='PATHWAY' />
            <ScopeBase />
            <Headline heading='MEDIA' />
            <MediaScopeBase />
            <Headline heading='WEB DEVELOPMENT' />
            <ITScopeBase />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home
