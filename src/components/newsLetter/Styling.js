import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const NewsLetterS = styled.section`
    padding: 6rem 0;
    border-top: 2px solid ${({theme})=>(theme.colors.primaryColor)};

    @media only screen and (max-width: 998px) {
      padding: 6rem 4rem;
    }
`
export const Container = styled.div`
    max-width: ${({theme})=>(theme.width.containerWidth)};
    margin: ${({theme})=>(theme.margin.containerMargin)};
`

export const NewsLetterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1075px) {
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (max-width: 768px) {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
`
export const NewsLetterDataH3 = styled.h3`
    font-size: 2.4rem;
    font-weight: inherit;
    margin-bottom: 1rem;

    @media only screen and (max-width: 568px) {
    font-size: 1.6rem;
    }
`
export const NewsLetterData = styled.div`

    @media only screen and (max-width: 1075px) {
      margin-bottom: 2rem;
    }
`
export const NewsLetterDataP = styled.p`
    font-size: 1.5rem;
    color: ${({theme})=>(theme.colors.black1)};

    @media only screen and (max-width: 568px) {
    font-size: 1rem;
    }
`
export const NewsLetterEmail = styled.input`
    font-size: 1.4rem;
    display: inline-block;
    width: 37rem;
    padding: 1.6rem;
    background-color: ${({theme})=>(theme.colors.primaryColor)};
    border: none;
    text-indent: 1rem;

    &:focus{
        outline: none;
    }

    @media only screen and (max-width: 1075px) {
      width: 45rem;
    }

    @media only screen and (max-width: 768px) {
      width: 45rem;
      display: block;
      margin-bottom: 1.6rem;
    }

    @media only screen and (max-width: 568px) {
      width: 23rem;
      font-size: 1.2rem;
    }
  
`
export const NewsLetterLink = styled(LinkR)`

    &:link, &:visited{
        display: inline-block;
        padding: 1.4rem 3rem;
        margin-left: -0.5rem;
        background-color: ${({theme})=>(theme.colors.black2)};
        color: ${({theme})=>(theme.colors.white)};
        transition: 0.3s;
    }

    &:hover{
        background-color: #000;
    }

    @media only screen and (max-width: 568px) {
        &:link, &:visited{
        padding: 1.2rem 2rem;
        margin-left: 0;
    }
    }
`


  

   