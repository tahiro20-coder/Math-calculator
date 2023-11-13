import React from 'react'
import "../Css/Components.css"


const Choice = ({choice = 0,setChoice}) => {
  const HandleChange = () =>{
    if(choice === 0){
        setChoice(1)
    }else{
        setChoice(0)
    }
  }
  return (
    <div className=' w-100 d-flex justify-content-center'>
      <div className='choiceCont'>
        <div className='d-flex justify-content-between choice' onClick={HandleChange}>
        <div className='sh'>
        <div className={'slider ' + (choice===0 ?"select1": "select2")}></div>
        </div>
        <div className={'choice1 ' + (choice===0 ?"selected": "")}>
            Standard Dot Product
        </div>
        <div className={'choice2 ' + (choice===1 ?"selected": "")}>
            Matrix inner Product
        </div>
        
    </div>
    </div>
    </div>
    
    
  )
}

export default Choice