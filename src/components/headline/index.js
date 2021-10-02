import React from 'react'
import { Dot, PrimaryTitle, SectionTitle, TitleContainer } from './Styling'

const Headline = ({heading}) => {
    return (
        <div>
        <TitleContainer>
        <SectionTitle  className='active' data-id="Latest Products">
          <Dot></Dot>
          <PrimaryTitle>{heading}</PrimaryTitle>
        </SectionTitle>
      </TitleContainer>
        </div>
    )
}

export default Headline
