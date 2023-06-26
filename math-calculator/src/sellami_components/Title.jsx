import React from 'react'

const Title = ({title}) => {
  return (
    <div className='TitleContainer'>
        <div className='leftTitle'>
            <div className='mainTitle'>{title} </div>
            <div className='tile1'/>
            <div className='tile2'/>
            <div className='tile3'/>
        </div>
    </div>
  )
}

export default Title