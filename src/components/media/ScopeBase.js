import React from 'react'
import Media from '.'
import media from '../../img/media.jpg'
import {ScopeSection, ScopeSectionContainer } from './Styling'


const MediaScopeBase = () => {
    return (
        <ScopeSectionContainer id='media'>
            <ScopeSection>
                <Media image={media} paragraph="Photo editing, image manipulation, logo design, eBook..." title="GRAPHIC DESIGN" signup="ENROLL"/>
                <Media image={media} paragraph="Photo editing, image manipulation, logo design, eBook..." title="VEDIO EDITING" signup="ENROLL"/>
                <Media image={media} paragraph="Photo editing, image manipulation, logo design, eBook..." title="ANIMATION" signup="ENROLL"/>
            </ScopeSection>
        </ScopeSectionContainer>
    )
}

export default MediaScopeBase
