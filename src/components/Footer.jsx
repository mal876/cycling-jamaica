import React from 'react'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    
 <div>
     <footer className="bg-green-900">
    
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link to='/' className="flex items-center">
                  <img src="cycle logo.png" className="h-8 me-3" alt="Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Jamaica Cycling <br /> Federation</span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <Link to='https://joa.org.jm/' className='hover:underline'>
                            JOA
                          </Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <Link to='https://www.facebook.com/JamaicaCyclingFederation/' className='hover:underline'>
                            Facebook
                          </Link>
                      </li>
                      <li>
                          <Link to='https://www.instagram.com/jamaicacyclingfederation/' className='hover:underline'>
                            Instagram
                          </Link>
                      </li>
                  </ul>
              </div>
              
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">© 2024 <Link to='#' className="hover:underline">Jamaica Cycling Federation</Link>. All Rights Reserved.
          </span>
          <br />  
          <span className="text-sm text-white sm:text-center ">Site developed by <Link to='https://mal-portfolio.netlify.app/' className='font-semibold'>Malik Dekid</Link>.
          </span>  
      </div>
    </div>
  </footer>
 </div>


  )
}

export default Footer