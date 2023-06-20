import '../src/Styles/App.css';
import Header from './Taher_Components/Header';
import Footer from './Taher_Components/Footer';
import PageContent from './Taher_Components/PageContent';
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
