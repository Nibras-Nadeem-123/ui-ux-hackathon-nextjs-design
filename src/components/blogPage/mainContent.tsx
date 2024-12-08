import React from 'react'
import ContentLeftSide from './contentLeftSide'
import ContentRightSide from './ContentRightSide'

const MainContent = () => {
  return (
    <div className='flex gap-2 px-32 py-16'>
      <ContentLeftSide/>
      <ContentRightSide/>
    </div>
  )
}

export default MainContent
