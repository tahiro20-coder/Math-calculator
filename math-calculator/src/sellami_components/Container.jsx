import React from 'react'
import { BlockMath } from 'react-katex'; 


const Container = ({title,content,mathcontent}) => {

  var tds = document.querySelectorAll("span");
  for (let i = 0; i < tds.length; ++i) {
    tds[i].innerHTML = tds[i].innerHTML.replace(/&nbsp;/g, " ");
  }
  return (
      <div className='container cont '>
          <div className='titleCont'>
              <div className="title">&nbsp;{title}&nbsp;</div>
          </div>
          {
            content != null ? 
            <div className='d-flex flex-wrap justify-content-center m-3 conti'>
            {content}
            </div> :
            null
          }
          {
            mathcontent != null ?
            <div className='m-3 conti '>
            <BlockMath math={mathcontent} />
            </div> :
            null
          }
           
      </div>
  )
}

export default Container