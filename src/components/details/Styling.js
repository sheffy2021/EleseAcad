import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import { MdKeyboardArrowUp } from 'react-icons/md'


// ========================Content List=========================

export const ContentWrapper = styled.div`
padding: 1rem;
`

export const ListContainer = styled.div`
    overflow-y: auto;
    height: 100vh;
`


export const Heading = styled.h4`
    border-bottom: .3rem solid ${({ theme }) => (theme.colors.black1)};
    /* border-top: 1px solid black; */
    color: ${({ theme }) => (theme.colors.black1)};
    margin-bottom: 1rem;
    /* width: 35vw; */
    text-transform: uppercase;
    
    @media screen and (max-width:430px){
        border-bottom: .15rem solid ${({ theme }) => (theme.colors.black1)};
        font-size: 1.3rem;
    }
`
export const HeadingList1 = styled.ul`
    
`
export const HeadingList2 = styled.ul`
    
`
export const HeadingListLi1 = styled.li`
    color: ${({ theme }) => (theme.colors.black2)};
    font-size: 1.5rem;
    font-size: 1.5rem;
    padding: 1rem 0;
    font-weight: bold;
    width: 12%;
    position: relative;

    &:hover{
        cursor: pointer;
    }
    
    @media screen and (max-width:430px){
        font-size: 1.2rem;
    }
`
export const HeadingListLi2 = styled.li`
    color: ${({ theme }) => (theme.colors.black2)};
    font-size: 1.5rem;
    padding: 1rem 0;
    font-weight: bold;
    width: 12%;
    position: relative;

    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width:430px){
        font-size: 1.2rem;
    }
`
export const HeadingListLiList1 = styled.ul`
    margin: 0 2rem;
    display: ${({ click }) => (click ? 'none' : 'block')};
    font-size: 1.5rem;

    @media screen and (max-width:430px){
        font-size: 1.2rem;
    }
`
export const HeadingListLiList2 = styled.ul`
    margin: 0 2rem;
    display: ${({ show }) => (show ? 'block' : 'none')};
    font-size: 1.5rem;

    @media screen and (max-width:430px){
        font-size: 1.2rem;
    }
`
export const HeadingListLiListLi = styled.li`
    /* font-size: 1.3rem; */
    font-weight: 300;
    padding: .6rem 0;
    &:hover{
        cursor: pointer;
        background: ${({ theme }) => (theme.colors.primaryColor)};
    }
`
export const ListHeading = styled.h5`
    color: ${({ theme }) => (theme.colors.black1)};
`
export const DetailsContainer4 = styled.div`
    
`
export const ArrowUp = styled(MdKeyboardArrowUp)`
    /* padding-bottom: .4rem; */
    font-size: 2rem; 

    @media screen and (max-width:430px){
        font-size: 1.5rem;
    }
`
export const ArrowIcon1 = styled.span`
    transform: ${({ click }) => (click ? 'rotate(0deg)' : 'rotate(180deg)')};
    position: absolute;
    margin-left: .5rem;
    left: 10rem;
    top: 0.5rem;
    
    @media screen and (max-width:430px){
        top: 0.8rem;
        font-size: 1.2rem;
    }
`
export const ArrowIcon2 = styled.span`
    transform: ${({ show }) => (show ? 'rotate(180deg)' : 'rotate(0deg)')};
    position: absolute;
    margin-left: .5rem;
    top: 0.5rem;
    left: 11rem;

    @media screen and (max-width:430px){
        top: 0.8rem;
        font-size: 1.2rem;
    }
    `

// ========================Project Card=====================================


export const CardContainer = styled.div`
    /* margin-left: 6rem; */
    background: ${({ theme }) => (theme.colors.primaryColor)};
    display: flex;
    justify-content: center;
`
export const CardWrapper = styled.div`
    margin: 1rem;
    width: 45vw;

`

export const ImageWrapper = styled.div``

export const Image = styled.img``


export const ProjectHeadline = styled.h3`
    text-transform: uppercase;
`

export const CardContent = styled.div`
`
export const ProjectTitle = styled.h4`
    text-transform: uppercase;
`

export const ProjectDescription = styled.p`
    padding: 1rem 0;
    font-size:1.3rem;
    font-weight: normal;

    @media screen and (max-width:430px){
        font-size: 1.2rem;
    }
`
export const Span = styled.span`
    font-weight: bold;
`

// =============================Details Page Layout==========================

export const CourseTitle = styled.h2`
    padding: 2rem;
    margin-left: 3rem;
`

export const ProjectCards = styled.div`
        height: 100vh;
        overflow: auto;
        /* padding: 7rem 0; */
`
export const DetailsPageLayout = styled.div`
    margin-top: 10rem;
    display: grid;
    grid-template-columns: 65% 35%;
    
    @media screen and (max-width:425px){
        margin-top: 8rem;

    }
`


