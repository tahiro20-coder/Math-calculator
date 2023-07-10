import React from 'react'

const InputParameter = ({value,handleChange , min,max,except}) => {
  return (
    <input
                        // defaultValue={value}
                      value={value}
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
                          if(Number(event.target.value) === except){
                            event.target.value = except+1
                          }
                          if(min != null){
                            if(Number(event.target.value) <min){
                              event.target.value = min
                            }
                          }
                          if(max != null){
                            if(Number(event.target.value) >max){
                              event.target.value = max
                            }
                          }
                          handleChange(Number(event.target.value))
                        }
                          
                      }}
                      onBlur={(event)=>{
                        if((event.target.value === '-' ) || (event.target.value === '+' ) || (event.target.value === '')){
                          if(min != null){
                            event.target.value = min
                            handleChange(min)
                          }else{
                            if(except === 0){
                              event.target.value = 1
                              handleChange(1)
                            }else{
                              event.target.value = 0
                              handleChange(0)
                            }
                          }
                          
                        }
                        
                      }}
                      className='m-1 Matrix_Input'
                    //   style={{ "width":  "100%" }}
                      />
  )
}

export default InputParameter