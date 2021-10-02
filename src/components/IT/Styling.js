import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const CollectionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 3rem;
    background-color: ${({ theme }) => (theme.colors.primaryColor)};

    @media screen and (max-width:430px){
        padding: 2rem;
    }
    `

export const ImgContainer = styled.div`
    margin: 1rem;
    width: 100%;

    @media ${({ theme }) => (theme.mediaQueries.below_768)}{
       margin-bottom: 1rem;
    }
`

export const CollectionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    `
export const Paragraph = styled.p`
        color: ${({ theme }) => (theme.colors.blue1)};
        font-size: 1.1rem;
        margin: .8rem 0;
        
`

export const ImgCollection02 = styled.img`
    width: 100%;
`
export const CollectionContentH1 = styled.h1`
    font-size: 2rem;

    @media screen and (max-width:430px){
        font-size: 1.5rem;
    }
`
export const CollectionContentLink = styled(LinkR)`
    &:visited, &:link{
        font-weight: 700;
        font-size: 1.3rem;
        display: inline-block;
        padding: 1rem 1.4rem;
        margin: 1rem 0;
        border-radius: 3rem;
        border: 2px solid ${({ theme }) => (theme.colors.secondaryColor)};
        color: ${({ theme }) => (theme.colors.primaryColor)};
        background-color: ${({ theme }) => (theme.colors.secondaryColor)};
        transition: all 0.3s ease-in-out;

        &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
        
        @media ${({ theme }) => (theme.mediaQueries.below_768)}{
            padding: 1rem 1.4rem;
            border-radius: 2rem;
            margin-top: 2rem;
        }

        @media screen and (max-width:430px){
        padding: .8rem 1.2rem;
        border-radius: 3rem;
        font-size: 1rem;
    }
    }

    `

// ==============================  ScopeBase  ==============================

export const ScopeSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 6rem;
 

    @media ${({ theme }) => (theme.mediaQueries.below_768)}{
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:425px){
        grid-template-columns: repeat(1, 1fr);
        flex-direction: column;
        padding: unset;
        margin-bottom: 4rem;
    }
    `

export const ScopeSectionContainer = styled.div`
    max-width: ${({ theme }) => (theme.width.containerWidth)};
    margin: ${({ theme }) => (theme.margin.containerMargin)};
`

export const MarginRight = styled.div`
    margin-right: 2rem;
    

    @media screen and (max-width:425px){
        margin-right: unset;
        width: 100%;
    }
`

