import React from 'react'
import { CardContainer, CardContent, CardWrapper, Image, ImageWrapper, ProjectDescription, ProjectHeadline, ProjectTitle, Span } from './Styling'
import IT from '../../img/IT.jpg'

const ProjectCard = () => {
    return (
        <>
            <CardContainer>
                <CardWrapper>
                    <ProjectHeadline>1<small>st</small> Project</ProjectHeadline>
                    <ImageWrapper><Image src={IT} alt='Project image' /></ImageWrapper>
                    <CardContent>
                        <ProjectTitle>Banner Design</ProjectTitle>
                        <ProjectDescription><Span>This project covers:</Span> Making Selection, making a composite image...</ProjectDescription>
                    </CardContent>
                </CardWrapper>
            </CardContainer>
        </>
    )
}

export default ProjectCard
