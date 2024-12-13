import React from 'react'
import ContentLeftSide from './contentLeftSide'
import ContentRightSide from './ContentRightSide'

const MainContent = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 px-4 sm:px-8 lg:px-32 py-8'>
      <ContentLeftSide />
      <ContentRightSide />
    </div>
  )
}

export default MainContent
