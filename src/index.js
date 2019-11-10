import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header.js'
import Footer from './Footer.js'
import Navbar from './Navbar.js'

ReactDOM.render(
    <div>
        <Header/>
        <Navbar/>
        <Footer/>
    </div>,
    document.getElementById('root')
)