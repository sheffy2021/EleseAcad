import React from 'react'
import { CollectionBox, CollectionContent, CollectionContentH1, CollectionContentLink, ImgCollection02, ImgContainer, Paragraph } from './Styling'

const Scope = ({ title, paragraph, headPhoneImg }) => {
    return (
        <>
            <CollectionBox>
                <ImgContainer>
                    <ImgCollection02 src={headPhoneImg} alt="" />
                </ImgContainer>
                <CollectionContent>
                    <div>
                        <CollectionContentH1>{title}</CollectionContentH1>
                        <Paragraph>{paragraph}</Paragraph>
                        <CollectionContentLink to="#shop">TAKE A PATH</CollectionContentLink>
                    </div>
                </CollectionContent>
            </CollectionBox>
        </>
    )
}


export default Scope
