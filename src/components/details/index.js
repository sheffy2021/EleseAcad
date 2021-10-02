import React from 'react'
import ContentList from './ContentList'
import ProjectCard from './ProjectCard'
import { CourseTitle, DetailsPageLayout, ProjectCards } from './Styling'

const DetailsPage = () => {
    // console.log(id)

    return (
        <>
            <DetailsPageLayout>
                <ProjectCards>
                    <CourseTitle>GRAPHICS DESIGN</CourseTitle>
                    <ProjectCard />
                    <ProjectCard />
                </ProjectCards>
                <ContentList />
            </DetailsPageLayout>
        </>
    )
}

export default DetailsPage
