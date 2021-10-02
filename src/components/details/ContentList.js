import React, { useState } from 'react'
import {
    ArrowIcon1,
    ArrowIcon2,
    ArrowUp,
    ContentWrapper, Heading, HeadingList1, HeadingList2, HeadingListLi1, HeadingListLi2,
    HeadingListLiList1,
    HeadingListLiList2,
    HeadingListLiListLi, ListContainer
} from './Styling'


const ContentList = () => {

    const [click, setClick] = useState(false);
    const toggleEvent = () => {
        setClick(!click)
    }
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <ContentWrapper>
                <Heading>Contents</Heading>
                <ListContainer>
                    <HeadingList1>
                        <HeadingListLi1 onClick={toggleEvent}>PHOTOSHOP<ArrowIcon1 click={click}><ArrowUp /></ArrowIcon1></HeadingListLi1>
                        <HeadingListLiList1 click={click}>
                            <HeadingListLiListLi>Introduction to the course</HeadingListLiListLi>
                            <HeadingListLiListLi>Poster making</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                        </HeadingListLiList1>
                    </HeadingList1>
                    <HeadingList2>
                        <HeadingListLi2 onClick={toggleShow}>ILLUSTRATOR<ArrowIcon2 show={show}><ArrowUp /></ArrowIcon2></HeadingListLi2>
                        <HeadingListLiList2 show={show}>
                            <HeadingListLiListLi>Introduction to the course</HeadingListLiListLi>
                            <HeadingListLiListLi>Poster making</HeadingListLiListLi>
                            <HeadingListLiListLi>Typography</HeadingListLiListLi>
                        </HeadingListLiList2>
                    </HeadingList2>
                </ListContainer>
            </ContentWrapper>

        </>
    )
}

export default ContentList
