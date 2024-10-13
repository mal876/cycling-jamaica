import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Documents() {
  return (
    <div>
      <div className='md:items-center  md:text-left sm:max-xl-p-9 m-12'>
       <h4 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
          Documents
        </h4>
      </div>
      <br /><br />
      <div>
        <div className='flex flex-wrap gap-12 md:items-center md:justify-center'>
          <Link to='https://jamaicacycling.com/wp-content/uploads/2024/02/JCF-Selection-policy-final.pdf' className='hover:-translate-y-4 duration-300'>
            <div className='border border-black shadow-lg'>
                <center>
                <img src="jcf-selection.PNG" alt="" srcset="" className='w-  p-5'/>
                </center>
                <p className='text-lg tracking-light px-12 p-5 font-semibold text-center  underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
                  J.C.F. Selection Policy
                </p>
            </div>
          </Link>
          <Link to='https://jamaicacycling.com/wp-content/uploads/2024/02/JCF-Standard-Times-for-Team-Selection-2024.pdf'className='hover:-translate-y-4 duration-300'  >
          <div className='border border-black shadow-lg'>
              <center>
              <img src="jcf-standards.PNG" alt="" srcset="" className='w-  p-5'/>
              </center>
              <p className='text-lg tracking-light px-12 p-5 font-semibold text-center  underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
                J.C.F. 2024 Standards
              </p>
          </div>
          </Link>
          <Link to='https://jamaicacycling.com/wp-content/uploads/2024/02/New-Federation-Constitution-new-final.pdf' className='hover:-translate-y-4 duration-300' >
          <div className='border border-black shadow-lg'>
              <center>
              <img src="constitution.PNG" alt="" srcset="" className='w-  p-5'/>
              </center>
              <p className='text-lg tracking-light px-12 p-5 font-semibold text-center  underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
                New Federation Constitution
              </p>
          </div>
          </Link>
        </div>
      </div>
      <br /><br />
       <Footer />
    </div>
  )
}

export default Documents