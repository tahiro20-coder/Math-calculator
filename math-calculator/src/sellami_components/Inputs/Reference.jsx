import React from 'react'

import { JournalText } from 'react-bootstrap-icons';

const Reference = ({link}) => {
  return (
    <a className='resourcebtn btn btn-dark ' href={link} target='_blank'>
          for more 
          <JournalText style={{marginLeft:"5px"}}/>
         </a>
  )
}

export default Reference