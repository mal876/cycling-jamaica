import React from 'react'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
        <br /><br />
        <center>
            <div className='border border-white rounded-lg m-1 md:items-center md:text-left sm:max-xl-p-9'>
                <h3 className='text-5xl font-semibold text-center tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-green-800'>
                    About
                </h3>
                <br />
                <p className='p-3 font-normal text-right text-lg'>
                    The Jamaica Cycling Federation is the national governing body of cycle racing in Jamaica.
                    It is a member of the UCI and COPACI.
                    <br />
                    <br />
                    Cycle sport is competitive physical activity using bicycles.
                    There are several categories of bicycle racing including
                    Road Bicycle Racing, Time Trialing, Cycle-cross
                    Mountain Bike Racing, Track Cycling, BMX, and
                    Cycle Speedway.
                    <br />
                    <br /> 
                    <b>
                        Dr. Wayne Palmer – President <br />
                        Mrs. Donna-Kaye Sharpe – Secretary
                    </b>
                   
                </p>
            </div>
        </center>
        <br /><br />
        <Footer />
        
        
    </div>
  )
}

export default About