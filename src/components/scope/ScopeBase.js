import React from 'react'
import Scope from '.'
import headPhone from '../../img/popup.jpg'
import { ScopeSection, ScopeSectionContainer } from './Styling'


const ScopeBase = () => {
    return (
        <ScopeSectionContainer  id='scope'>
            <ScopeSection>
            <Scope headPhoneImg={headPhone} paragraph="Graphics, Video Editing, Animation..." title="ELESE MEDIA"/>
            <Scope headPhoneImg={headPhone} paragraph="Full Stack with React, Node and MongoDB" title="ELESE IT"/>
            </ScopeSection>
        </ScopeSectionContainer>
    )
}

export default ScopeBase
