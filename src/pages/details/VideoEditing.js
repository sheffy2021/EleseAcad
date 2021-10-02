import React from 'react'
import DetailsPage from '../../components/details'
import Data from '../../components/details/Data'


const VideoEditing = () => {
    // console.log(Data.graphics.id)
    return (
        <>
            {<DetailsPage {...Data.videoEditing} />}
        </>
    )
}

export default VideoEditing
