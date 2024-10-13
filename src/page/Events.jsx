import React from 'react'

import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

function Events() {
  return (
    <div>
      <br /><br /><br /><br /><br />
      <center>
        <div className='m-auto  md:items-center sm:max-xl-p-9 p-5'>
          <img src="events.PNG" alt="" srcset="" className='border border-black shadow-xl'/>

          <br />

          <Link to='https://jamaicacycling.com/wp-content/uploads/2024/02/JCF-Race-Calendar-2024-updated-Jan-29-2024.pdf' className='text-lg tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
           Click Here To Download PDF
          </Link>

        </div>
      </center>
      <br /><br /><br /><br /><br />

      <Footer />
    </div>
  )
}

export default Events