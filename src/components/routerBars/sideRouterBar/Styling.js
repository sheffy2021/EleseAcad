import styled from 'styled-components'
// import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

// import { FaBars } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
position: fixed;
overflow: auto;
z-index:1999;
width: 85vw;
height: 100%;
background: ${({ theme }) => (theme.colors.primaryColor)};
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
display: none;

@media ${({ theme }) => (theme.mediaQueries.below_768)}{
    display: block;
}
`

export const Logo = styled.div`
display: block;
color: ${({ theme }) => (theme.colors.blue2)};
/* text-align: center; */
line-height: 10rem;
font-weight: 700;
font-size: 2.5rem;
padding-left: 3rem;

span{
    color: ${({ theme }) => (theme.colors.white)};
    font-weight: 400;
}
`


// export const PersonIcon = styled(FaBars)`
// background: ${({ theme }) => (theme.colors.white)};
// height: 5rem;
// width: 5rem;
// border-radius: 50%;
// margin: 2rem 3rem;
// `
export const Info = styled.div`
height: 10rem;
background:${({ theme }) => (theme.colors.green1)};
`
export const SidebarWrapper = styled.div`
/* color: #fff; */
`

export const SidebarMenu = styled.ul`
display: flex;
flex-direction: column;
/* justify-content: space-between; */
/* height: 25rem; */
align-items: flex-start;
margin: 3rem 0;
`
export const SidebarMenuList = styled.li`
    width: 100%;
    padding: 1rem 0;
    `

export const SidebarLink = styled(LinkR)`
/* display: flex; */
/* align-items: center; */
transition: 0.2s ease-in-out;
color: ${({ theme }) => (theme.colors.black1)};
cursor: pointer;
width: 100%;
height: 100%;
padding: 1.5rem 3rem;
position: relative;

&:hover{
    color: ${({ theme }) => (theme.colors.green1)};
    /* background: ${({ theme }) => (theme.colors.white)}; */
    transition: 0.2s ease-in-out;
}
`

export const SidebarLinks = styled.div`
/* display: flex; */
/* align-items: center; */
transition: 0.2s ease-in-out;
color: ${({ theme }) => (theme.colors.black1)};
cursor: pointer;
width: 100%;
height: 100%;
padding: 0 3rem;
position: relative;

&:hover{
    /* background: ${({ theme }) => (theme.colors.white)}; */
    color: ${({ theme }) => (theme.colors.green1)};
    transition: 0.2s ease-in-out;
}
`
export const ArrowIcon = styled.span`
transform: ${({ click }) => (click ? 'rotate(90deg)' : 'rotate(0deg)')};
position: absolute;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    padding-bottom: .4rem;
    font-size: 2.5rem;
`

export const SidebarBtnWrap = styled.div`
display: flex;
justify-content: flex-start;
margin-left: 3rem;
`
export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
padding: 10px 24px;
color: ${({ theme }) => (theme.colors.black2)};
font-size: 16px;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
    color: ${({ theme }) => (theme.colors.black1)};
    border: 1px solid ${({ theme }) => (theme.colors.black1)};
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}

`

export const OtherUl = styled.ul`
position: relative;
margin: .5rem 0;
display: ${({ click }) => (click ? 'block' : 'none')};
/* height: 10rem; */
/* background: yellow; */
/* top: 5rem; */
/* left: 6rem; */
transition: display 0.3s ease-in-out;
`
export const OtherLi = styled.li`
position: relative;
padding: .5rem 5rem;
/* display: none; */
`
export const OtherLiLink = styled(LinkR)`
    color: ${({ theme }) => (theme.colors.black1)};
&:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`

