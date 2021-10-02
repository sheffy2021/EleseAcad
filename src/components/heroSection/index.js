import React from 'react'
import { Heading, Hero, MyImage } from './Styling'

const HeroSection = ({ heading, hiddenNav }) => {
    return (
        <>
            <Hero id='home' hiddenNav={hiddenNav}>
                <MyImage>
                    <Heading heading={heading}></Heading>
                </MyImage>
            </Hero>
        </>
    )
}

export default HeroSection
