import Header from './components/Header'
import Home from './components/Home'
import Services from './components/services'
import Questions from './components/Questions'
import Promise from './components/Promise'
import Footer from './components/Footer'
import useScrollAnimation from './UseScrollAnimation'
import './App.css'


function App() {
  useScrollAnimation();
  return (
    <>
      <Header scroll="fade-in"/>
      <Home scroll="fade-in"/>
      <Services scroll="fade-in"></Services>
      <Promise scroll="fade-in"></Promise>
      <Questions scroll="fade-in"></Questions>
      <Footer/>

    </>
  )
}

export default App
