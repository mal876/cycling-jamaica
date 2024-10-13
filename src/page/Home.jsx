import React from 'react'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer'


function Home() {
  return (
    <div>
       <section className='w-full bg-green-900'>
        <br /><br /><br /><br /><br />
          <div className=' border border-green-900 grid gap-1 md:grid-cols-2 md:items-center md:text-left sm:max-xl-p-9'>
            <img src="cyclers.jpg" alt="" srcset="" className='   md:w-full rounded-full p-5'/>
            <div className='leading-normal p-4 '>
              <h1 className='text-6xl text-white font-semibold text-center tracking-tight'>
                The <br /> Jamaica
                
                Cycling 
                <br />
                Federation
              </h1>
              <p className=' text-5xl mb-3 p-5 font-bold text-white text-sm text-center'>
                We Ride Together!
              </p>
              <center>
                  <button className='bg-white border border-black text-green-900 text-green-900 font-bold rounded-3xl w-28 shadow-xl p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                      <Link to='/contact'>
                        Contact
                      </Link>
                  </button>
              </center>
            </div>
          </div>
       </section>
       <div className='bg-white '>
       <br />
          <div className='  md:items-center md:text-left sm:max-xl-p-9 p-5'>
            <div>
            <h4 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
              A Little About Us
            </h4>
            <br />
            <h6 className='px-12 p-5 text-right tracking-light text-lg'>
              The Jamaica Cycling Federation is the national governing body of cycle racing in Jamaica.
              It is a member of the UCI and COPACI.

              <br />
              <br />

              Cycle sport is competitive physical activity using bicycles.
              There are several categories of bicycle racing including
              Road Bicycle Racing, Time Trialing, Cycle-cross
              Mountain Bike Racing, Track Cycling, BMX, and
              Cycle Speedway.
            </h6>
            {/* <h5 className='text-4xl font-bold text-center tracking-light px-12 text-green-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'>
              <Link to="/about">
                Learn More
              </Link>
            </h5> */}
            </div>
          </div>
       </div>
       <br /> <br /> 
       <hr />
       <br /> 
       <div className='bg-white md:grid-cols-2 md:items-center md:text-left sm:max-xl-p-9 m-12'>
          <h4 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
              Explore
          </h4>
          <br /><br />
         <div className='flex flex-wrap gap-12 md:items-center md:justify-center'>
           <div className='w-96 h-96  rounded-tl-lg hover:translate-y-4 duration-300 cursor-pointer'>
            <Link to='/road'>
                <h3 className='text-green-900 font-semibold text-center text-4xl'>
                  <img src="track2.jpg" alt="" srcset="" />
                  <br />
                  Road
                </h3>
            </Link>
           </div>
           <div className='w-96 h-96  rounded-lg hover:translate-y-4 duration-300 cursor-pointer'>
            <Link to='/track'>
                <h3 className='text-green-900 font-semibold text-center text-4xl'>
                  <img src="track0.jpg" alt="" srcset=""/>
                  <br />
                  Track
                </h3>
            </Link>
           </div>
           <div className='w-96 h-96 rounded-br-lg hover:translate-y-4 duration-300 cursor-pointer'>
            <Link to='/events'>
                <h3 className='text-green-900 font-semibold text-center text-4xl'>
                  <img src="cycling.jpg" alt="" srcset="" className='h-full'/>
                  <br />
                  Events
                </h3>
            </Link>
           </div>
         </div>
       </div>
       <br />
       <hr />
       <div className='bg-white md:items-center  md:text-left sm:max-xl-p-9 m-12'>
          <h4 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
              Upcoming Events
          </h4>
          <br /><br />
          <center> <div className='md:items-center md:justify-center'>
            <div className='border border-black w-3/4 shadow-lg hover:translate-x-4 duration-300'>
              <img src="UCI_TRACK.png" alt="" srcset="" className='w-48 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                2024 UCI World Track Cycling Championships <br />
                October 16 to 20 <br />
                Ballerup, Denmark
              </p>
            </div>
            <br /><br />
            <div className='border border-black w-3/4 shadow-lg hover:translate-x-4 duration-300'>
              <img src="uci.png" alt="" srcset="" className='w-48 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                2024 Elite Caribbean Road Cycling Championships <br />
                October 17, 2024 <br />
                TBA
              </p>
            </div>
            <br /><br />
            <div className='border border-black w-3/4 shadow-lg hover:translate-x-4 duration-300'>
              <img src="elevation.jpg" alt="" srcset="" className='w-40 float-left p-5'/>
              <p className='text-lg tracking-light px-12 p-5 font-semibold'>
                Elevation Cycling Club Road Race <br />
                December 15, 2024 <br />
                Clarendon, Jamaica
              </p>
            </div>
          </div> </center>
          

          
       </div>
       <hr />
       <br /><br /><br />
       <div className='bg-white  md:items-center md:text-left sm:max-xl-p-9 p-5'>
          <center>
            <div className='  items-center  '>

              <Link to='https://www.uci.org/'>
              <img src="uci.png" alt="" />
              </Link>
              

              <Link to='https://www.copaci.org/en/home/'>
                <img src="copaci.png" alt="" srcset="" />
              </Link>
              
              <Link to='https://joa.org.jm/'>
                <img src="joa.png" alt="" />
              </Link>
            </div>
          </center>
       </div>

       <Footer />
       
       
       
    </div>
  )
}

export default Home