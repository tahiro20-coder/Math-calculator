import React,{useEffect} from 'react'
import { BlockMath } from 'react-katex'; 
import 'katex/dist/katex.min.css';

const Container = ({title,content,mathcontent,content2}) => {

  
  useEffect (() => {
    var tds = document.querySelectorAll(".mord");
  for (let i = 0; i < tds.length; i++) {

    tds[i].innerHTML = tds[i].innerHTML.replace(/&nbsp;/g, " ");
    tds[i].innerHTML = tds[i].innerHTML.replace(//g, "≠");
  }
  tds = document.querySelectorAll(".base span");
  for (let i = 0; i < tds.length; i++) {

    tds[i].innerHTML = tds[i].innerHTML.replace(/&nbsp;/g, " ");
    tds[i].innerHTML = tds[i].innerHTML.replace(//g, "≠");
  }
  }, [mathcontent]);
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
             <div className='m-3 conti'>
            <BlockMath math={mathcontent} />
            </div> :
            null
          }
          {
            content2 != null?
            <div className='content2'>
              {content2}
            </div>:
            null
          }
           
      </div>
  )
}

export default Container