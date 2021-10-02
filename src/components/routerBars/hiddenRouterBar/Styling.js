import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'



export const Nav = styled.nav`
    z-index: 1;
    top: 0;
    width: 100%;
    background: #fff;
    position:  fixed;
    box-shadow: ${({ theme }) => (theme.boxShadow.boxShadow1)};
    height: 8rem;
    transition: top 0.3s;
    display: none;

    @media ${({ theme }) => (theme.mediaQueries.below_768)}{
    height: 7rem;
    display: block;
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
export const NavLogo = styled(LinkR)`
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
    justify-content: space-between;
    `
export const NavMenuLi = styled.li`
    height: 100%;
    `

export const NavLink = styled(LinkS)`
    height: 100%;
    padding: 0 1.9rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => (theme.colors.black1)};
    
    &:hover{
        background: ${({ theme }) => (theme.colors.primaryColor)};
        cursor: pointer;
    }
    &.active {
        border-bottom: 3px solid ${({ theme }) => (theme.colors.primaryColor)};
    }
`

export const NavIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
    display:  ${({ showBarIcon }) => (showBarIcon ? 'block' : 'none')};
    cursor: pointer;
}
`
export const NavBtns = styled.div`
display: ${({ showButtons }) => (showButtons ? 'flex' : 'none')};
justify-content: flex-end;

`

export const NavBtn = styled.div`
/* display: flex; */
/* align-items: center; */
display:${({ showSignIn }) => (showSignIn ? 'block' : 'none')};
border-radius: 50px;
background: ${({ theme }) => (theme.colors.green1)};
padding: 10px 22px;
color: ${({ theme }) => (theme.colors.black2)};
transition: all 0.2s ease-in-out;
margin-right: 2rem;

@media screen and (max-width:768px){
    margin-right: 1rem;
    border-radius: 15px;
    padding: 6px 14px;
}

@media screen and (max-width:425px){
    border-radius: 15px;
    padding: 4px 8px;
    font-size: 1.3rem;
}

&:hover{
    cursor: pointer;
    background: ${({ theme }) => (theme.colors.primaryColor)};
    color: ${({ theme }) => (theme.colors.black1)};
}
`
export const NavBtnLink = styled(LinkR)`
    /* color: ${({ theme }) => (theme.colors.black2)}; */
`



