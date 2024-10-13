import React from 'react'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

function Road() {
  return (
    <div>
      <div className='md:items-center  md:text-left sm:max-xl-p-9 m-12'>
        <h4 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
            Road
          </h4>
          <br /><br />
          <div className='border border-black w-3/4 shadow-lg  '>
              <img src="road02.jpg" alt="" srcset="" className='w-48 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                2024 Caribbean Junior Cycling Championships <br />
                Sandy Ground, St. Martin <br />
                Melaika Russell <br />
                Junior Road Race <br />
                Bronze
              </p>
        </div>
          <br /><br />
          <div className='border border-black w-3/4 shadow-lg  '>
              <img src="road01.jpg" alt="" srcset="" className='w-48 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                2023 Caribbean Juvenile Road Championships <br />
                Santo Domingo, Dominican Republic <br />
                Melaika Russell <br />
                Juvenile Road Race
                Gold
              </p>
        </div>
          <br /><br />
          <div className='border border-black w-3/4 shadow-lg  '>
              <img src="road04.jpg" alt="" srcset="" className='w-48 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                2023 Caribbean Junior Cycling Championships <br />
                Santo Domingo, Dominican Republic <br />
                Cajur Chue <br />
                Juvenile Road Race <br />
                Silver
              </p>
        </div>
          <br /><br />
          <div className='border border-black w-3/4 shadow-lg  '>
              <img src="road05.PNG" alt="" srcset="" className='w-48 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                2023 Caribbean Junior Cycling Championships <br />
                Santo Domingo, Dominican Republic <br />
                Melaika Russell <br />
                Juvenile Road Race <br />
                Silver
              </p>
        </div>
          <br /><br />
          <div className='border border-black w-3/4 shadow-lg  '>
              <img src="road03.jpg" alt="" srcset="" className='w-48 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                2023 Caribbean Cycling Championships <br />
                Les Abymes, Guadaloupe <br />
                Llori Sharpe <br />
                Elite Womens Road Race
                Silver
              </p>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Road