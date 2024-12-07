import Header from './components/Header'
import Home from './components/Home'
import Services from './components/services'
import Questions from './components/Questions'
import Promise from './components/Promise'
import './App.css'
import ContactUs from './components/ContactUs'
import TechStack from './components/Techstack'



function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <TechStack></TechStack>
      <ContactUs></ContactUs>
      

      <Promise></Promise>
      <Questions></Questions>

    </>
  )
}

export default App
