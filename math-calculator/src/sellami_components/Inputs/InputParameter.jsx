import React from 'react'

const InputParameter = ({value,handleChange , min=0}) => {
  return (
    <input
                        defaultValue={value}

                      type='text'
                      onKeyPress={(event) => {
                        // console.log(event.target.value)
                        if ((!/[0-9]/.test(event.key))&&(event.key !== '+') && (event.key !== "-")) {
                          if(event.key === "."){
                            if(event.target.value[0] === "." || event.target.value === ""){
                              event.preventDefault();
                            }
                            if((event.target.value.match(/\./g) || []).length >= 1){
                              event.preventDefault();
                            }
                          }else{
                            event.preventDefault();
                          }
                        }
                      }}
                      onInput={(event)=>{
                        if(event.target.value !== ''){
                          event.target.value = event.target.value[0] + event.target.value.substring(1).replace('+','').replace('-','')
                          if(Number(event.target.value) <min){
                            event.target.value = min
                          }
                          handleChange(Number(event.target.value))
                        }
                          
                      }}
                      onBlur={(event)=>{
                        if((event.target.value === '-' ) || (event.target.value === '+' ) || (event.target.value === '')){
                          event.target.value = min
                          handleChange(min)
                        }
                        
                      }}
                      className='m-1 Matrix_Input'
                    //   style={{ "width":  "100%" }}
                      />
  )
}

export default InputParameter