import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'
import { MdKeyboardArrowDown } from 'react-icons/md'




export const Cover = styled.div`
display: ${({ isOpen }) => (isOpen ? "block" : "none")};

@media ${({ theme }) => (theme.mediaQueries.below_768)}{

    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background: black none no-repeat 0 0;
    opacity: ${({ isOpen }) => (isOpen ? "0.6" : "0")};
    z-index: 999;
    transition: all 0.9s ease-in-out;
  }
`

export const Nav = styled.nav`
    z-index: 2;
    top: 0;
    width: 100%;
    background: #fff;
    position: fixed;
    box-shadow: ${({ theme }) => (theme.boxShadow.boxShadow1)};
    height: 8rem;
    display: block;

    @media ${({ theme }) => (theme.mediaQueries.below_768)}{
    display: none;
    z-index: unset;
    top: unset;
    width: unset;
    background: unset;
    position: unset;
    height: 7rem;
}
    @media screen and (max-width:425px){
    height: 5rem;
}
`

export const NavContainer = styled.div`
    max-width: ${({ theme }) => (theme.width.containerWidth)};
    margin: ${({ theme }) => (theme.margin.containerMargin)};

    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`
export const NavLogo = styled(LinkS)`
    color: red;
    font-weight: 700;
    
    span{
        color: green;
        font-weight: 500;
    }

    &:hover{
        cursor: pointer;
    }
    `

export const NavMenu = styled.div`
    width: 40rem;
    height: 100%;

    @media screen and (max-width:768px){
    display: none;
}
    `
export const NavMenuUl = styled.ul`
    display: flex;
    height: 100%;
    justify-content: center;
    `
export const NavMenuLi = styled.li`
    height: 100%;
    `

export const ArrowDown = styled(MdKeyboardArrowDown)`
    color: ${({ theme }) => (theme.colors.black1)};
    margin-left: 1rem;
    font-size: 2rem;
`

export const NavLink = styled(LinkS)`
    height: 100%;
    display: flex;
    padding: 0 2rem;
    font-size: 1.6rem;
    align-items: center;
    color: ${({ theme }) => (theme.colors.black1)};

    /* &:last-child{
        padding: 0 ;
    } */
    
    &:hover{
        background: ${({ theme }) => (theme.colors.primaryColor)};
        cursor: pointer;
    }
    &.active {
        border-bottom: 3px solid ${({ theme }) => (theme.colors.green1)};
    }
`



export const NavIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
    display: block;
    cursor: pointer;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px){
    display:none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: ${({ theme }) => (theme.colors.green1)};
padding: 10px 22px;
color: ${({ theme }) => (theme.colors.black2)};
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
    background: ${({ theme }) => (theme.colors.primaryColor)};
    color: ${({ theme }) => (theme.colors.black1)};
}
`

export const NavLinkUl = styled.ul`
position: absolute;
top: 7rem;
background: ${({ theme }) => (theme.colors.primaryColor)};
/* padding: 1rem 0 0 0; */
/* right: 30.8rem; */
/* width: 20rem; */
font-size:1.6rem;
/* box-shadow: ${({ theme }) => (theme.boxShadow.boxShadow2)}; */
opacity: 0;
visibility: hidden;
transition: top 0.3s;

${NavMenuLi}:hover & {
    opacity: 1;
    visibility: visible;
    top: 8rem;
}
`
export const NavLinkLi = styled.li`
position: relative;
padding: 1rem;
border-bottom: 2px solid ${({ theme }) => (theme.colors.white)};
/* height: 10rem; */
/* width: 100%; */

&:hover{
    background: ${({ theme }) => (theme.colors.white)};
}
`
export const NavLinkLiLink = styled(LinkR)`
color: ${({ theme }) => (theme.colors.black1)};
padding: 0 2rem;
`








