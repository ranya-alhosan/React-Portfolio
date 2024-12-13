import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Connection from './Components/Connection'
import Experience from './Components/Experience'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

     <NavBar/>
     <Hero/>
     <About/>
     <Skills/>
     <Experience/>
     <Connection/>
     <Project/>
     <Contact/>
     <Footer/>
</body>
    </>
  )
}

export default App