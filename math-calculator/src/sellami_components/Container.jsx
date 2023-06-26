import React from 'react'

const Container = ({title,content}) => {
  return (
      <div className='container cont '>
          <div className='titleCont'>
              <div className="title">&nbsp;{title}&nbsp;</div>
          </div>
          <div className='flex-wrap justify-content-center m-3 conti'>
            {content}
            </div>
      </div>
  )
}

export default Container