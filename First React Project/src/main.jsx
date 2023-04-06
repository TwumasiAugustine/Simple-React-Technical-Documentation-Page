import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
)
