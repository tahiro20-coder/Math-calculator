import './App.css';
import React, { useEffect, useState } from 'react';
import TempCalcPage from './sellami_components/TempCalcPage';
import axios from 'axios'
import APIService from './sellami_components/api/APIService'; 

function App() {
  const [getMessage, setGetMessage] = useState({})
  const [data, setdata] = useState("Banananana")

  // useEffect(()=>{
  //   axios.get('http://localhost:5000/flask/hello').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })

  // }, [])
  // const add = () =>{
  //   console.log(JSON.stringify(data))
  //   APIService.add({data})
  //   .then((response) => console.log(response))
  //   .catch(error => console.log('error',error))
  // }
  return (

    <div className="App">
      {/* <div>
        {getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}
      </div>
      <button onClick={add}> jaksoilna</button> */}
      <div className='h-25'></div>
      <TempCalcPage />
    </div>
  );
}

export default App;
