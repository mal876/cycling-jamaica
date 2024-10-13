import React from 'react'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <br /><br />
      <h3 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
          Contact
      </h3>
      <div className='text-center font-bold'>
        <br /><br />
        P.O. Box 230 Kingston 10, Jamaica W.I. <br />
        info@jamaicacylcing.com <br />
        jcfsecretary.info@gmail.com
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
    
  )
}

export default Contact