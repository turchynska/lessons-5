import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
return (
  <div className={styles.appContainer}>
    <Header  className={styles.header}/>
    <div className={styles.main}>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About />} />
      <Route path='/contact' element={ <Contact />} />
      <Route path='/products' element={ <Products />} />
    </Routes>
    </div>
    <Footer  className={styles.footer}/>
  </div>
);
}

export default App
