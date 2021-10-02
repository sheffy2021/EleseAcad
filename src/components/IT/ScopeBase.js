import React from 'react'
import Media from '.'
import it from '../../img/IT.jpg'
import {ScopeSection, ScopeSectionContainer } from './Styling'


const ITScopeBase = () => {
    return (
        <ScopeSectionContainer>
            <ScopeSection>
                <Media image={it} paragraph="Photo editing, image manipulation, logo design..." title="GRAPHIC DESIGN" signup="ENROLL"/>
                <Media image={it} paragraph="Photo editing, image manipulation, logo design..." title="VEDIO EDITING" signup="ENROLL"/>
                <Media image={it} paragraph="Photo editing, image manipulation, logo design..." title="ANIMATION" signup="ENROLL"/>
                <Media image={it} paragraph="Photo editing, image manipulation, logo design..." title="ANIMATION" signup="ENROLL"/>
                <Media image={it} paragraph="Photo editing, image manipulation, logo design..." title="ANIMATION" signup="ENROLL"/>
                <Media image={it} paragraph="Photo editing, image manipulation, logo design..." title="ANIMATION" signup="ENROLL"/>
            </ScopeSection>
        </ScopeSectionContainer>
    )
}

export default ITScopeBase
