import React from 'react'
import Footer from '../Reusable/Footer.jsx'
import Navbar from '../Reusable/Navbar.jsx'
import Subscribe from '../Reusable/Subscribe.jsx'
import Title from './Title.jsx'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Title title={"Contact"} />

      <Subscribe />
      <Footer />
    </div>
  )
}

export default Contact
