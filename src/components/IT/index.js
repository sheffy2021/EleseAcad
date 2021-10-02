import React from 'react'
import { CollectionBox, CollectionContent, CollectionContentH1, CollectionContentLink, ImgCollection02, ImgContainer, Paragraph } from './Styling'

const It = ({ image, title, paragraph, signup }) => {
    return (
        <>
            <CollectionBox id="it">
                <ImgContainer>
                    <ImgCollection02 src={image} alt="" />
                </ImgContainer>
                <CollectionContent>
                    <div>
                        <CollectionContentH1>{title}</CollectionContentH1>
                        <Paragraph>{paragraph}</Paragraph>
                        <CollectionContentLink to="#shop">{signup}</CollectionContentLink>
                    </div>
                </CollectionContent>
            </CollectionBox>
        </>
    )
}

export default It
