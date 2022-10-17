import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Product from './components/product/Product'
import Results from './components/results/Results'
import Support from './components/support/Support'
import About from './components/about/About'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Product/>
      <Results/>
      <Support/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
