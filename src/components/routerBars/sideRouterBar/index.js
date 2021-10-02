import React from 'react'
import {
    // ArrowIcon,
    // ArrowRight,
    Info, Logo, SidebarContainer, SidebarLink,
    SidebarMenu, SidebarMenuList, SidebarWrapper,
} from './Styling'



const SideRouterBar = ({ isOpen, toggle, menuList1, menuList2, menuList3, menuList4,
    menuList5, menuList6, menuList7, menuList8, menuList9, menuList10 }) => {

    // const [click, setClick] = useState(false);
    // const toggleEvent = () => {
    //     setClick(!click)
    // }

    return (
        <SidebarContainer isOpen={isOpen}>
            <Info>
                <Logo>COURSES</Logo>
            </Info>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarMenuList>
                        <SidebarLink to='/graphic-details' onClick={toggle}>{menuList1}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/video-editing'>{menuList2}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList3}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList4}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList5}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList6}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList7}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList8}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList9}</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='/details'>{menuList10}</SidebarLink>
                    </SidebarMenuList>

                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideRouterBar
