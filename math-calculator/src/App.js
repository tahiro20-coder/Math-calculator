import '../src/Styles/App.css';
import "./Styles/Fonts.css";
import Header from '../src/Taher_components/Header';
import Footer from '../src/Taher_components/Footer';
import PageContent from './Taher_components/PageContent.js';
import React from 'react'



function App() {

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
    <>
    <Header/>
    <PageContent />
    <Footer/>
    </>
  );
}

export default App;
