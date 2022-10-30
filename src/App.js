import './App.css';
import Experience from './components/experience/Experience';
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio';
import Nav from './components/nav/Nav';
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
