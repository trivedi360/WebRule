import Header from './components/Header'
import Home from './components/Home'
import Services from './components/services'
import Questions from './components/Questions'
import Promise from './components/Promise'
import Footer from './components/Footer'
import useScrollAnimation from './UseScrollAnimation'
import './App.css'
import ContactUs from './components/ContactUs'
import TechStack from './components/Techstack'



function App() {
  useScrollAnimation();
  return (
    <>
     
    
      <Header scroll="fade-in"/>
      <Home scroll="fade-in"/>
      <Services scroll="fade-in"></Services>
      <Promise scroll="fade-in"></Promise>
      <TechStack scroll="fade-in"></TechStack>
      <Questions scroll="fade-in"></Questions>
      <ContactUs scroll="fade-in"></ContactUs>
      <Footer scroll="fade-in"></Footer>
    </>
  )
}

export default App
