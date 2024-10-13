import React from 'react'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

function News() {
  return (
    <div>
      <div className='md:items-center  md:text-left sm:max-xl-p-9 m-12'>
       <h4 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
          News
        </h4>
      </div>
      <br /><br />
      <div>
        <div className='flex flex-wrap gap-12 md:items-center md:justify-center'>
          <Link to='https://www.sportsmax.tv/other-sports/column3/cycling/item/152355-jamaica-olympic-association-joa-donates-jmd-1-million-to-jamaica-cycling-federation-for-equipment-upgrade' 
                    className='hover:-translate-y-4 duration-300'>
            <div className='border border-black shadow-lg'>
                <center>
                <img src="jamcycling.jpg" alt="" srcset="" className='w-  p-5'/>
                </center>
                <p className='text-lg tracking-light px-12 p-5 font-semibold text-center  underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
                Jamaica Olympic Association (JOA) donates JMD$1 million 
                to Jamaica Cycling Federation for equipment upgrade
                </p>
            </div>
          </Link>
          <Link to='https://jamaica-gleaner.com/article/sports/20240819/jcf-president-slams-poor-state-velodrome'>
          <div className='border border-black shadow-lg'>
              <center>
              <img src="velodrome2A.jpg" alt="" srcset="" className='w-  p-5'/>
              </center>
              <p className='text-lg tracking-light px-12 p-5 font-semibold text-center  underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
                JCF president slams poor state of velodrome
              </p>
          </div>
          </Link>
          <Link to='https://jamaica-gleaner.com/article/sports/20240819/jcf-president-slams-poor-state-velodrome'>
            <div className='border border-black shadow-lg'>
                <center>
                <img src="velodrome2A.jpg" alt="" srcset="" className='w-  p-5'/>
                </center>
                <p className='text-lg tracking-light px-12 p-5 font-semibold text-center  underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
                  Russell wins Bronze in regional cycling champs
                </p>
            </div>
          </Link>
          <Link to='https://jamaica-gleaner.com/article/sports/20240819/jcf-president-slams-poor-state-velodrome'>
            <div className='border border-black shadow-lg'>
                <center>
                <img src="russell2.jpg" alt="" srcset="" className='w-  p-5'/>
                </center>
                <p className='text-lg tracking-light px-12 p-5 font-semibold text-center  underline underline-offset-8 decoration-2 decoration-solid decoration-green-800 '>
                  Russell wins Bronze in regional cycling champs
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

export default News