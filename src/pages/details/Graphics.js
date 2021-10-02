import React from 'react'
import DetailsPage from '../../components/details'
import Data from '../../components/details/Data'
import HiddenRouterBar from '../../components/routerBars/hiddenRouterBar'
import TopRouterBar from '../../components/routerBars/topRouterBar'


const GraphicDetails = () => {
    console.log(Data.graphics.id)
    return (
        <>
            <TopRouterBar menuLogo="Boiler" menuLogoSpan='Plate' menuButtonTitle1='Sign In'
                menuButtonTitle2='ENROLL' showsignin showbuttons />
            <HiddenRouterBar menuLogo="Boiler" menuLogoSpan='Plate' showsignin menuButtonTitle1='Sign In'
                menuButtonTitle2='ENROLL' showbuttons />
            <DetailsPage {...Data.graphics} />
        </>
    )
}

export default GraphicDetails
