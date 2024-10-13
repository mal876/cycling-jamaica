import React from 'react'
import { useState } from "react"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


import Home from '../page/Home'
import About from '../page/About'
import Documents from '../page/Documents'
import Join from '../page/Join'
import News from '../page/News'
import Track from '../page/Track'
import Events from '../page/Events'
import Road from '../page/Road'
import Contact from '../page/Contact'



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
        <BrowserRouter>
          <nav className='flex justify-between items-center text-black py-6 px-3 md:px-3 bg-white drop-shadow-lg md:h-full md:w-full'>
            <Link to="/">
               <img src="cycle logo.png" alt="" srcset="" className='w-28'/>
            </Link>

            <ul className='hidden xl:flex items-center gap-12 text-base'>
                <li className='p-2 transition-all cursor-pointer hover:scale-110 duration-300'>
                    <Link to='/about'>
                      About
                    </Link>
                </li>
                <li className='p-2 transition-all cursor-pointer hover:scale-110 duration-300'>
                    <Link to='/news'>
                      News
                    </Link>
                </li>
                <li className='p-2 transition-all cursor-pointer hover:scale-110 duration-300'>
                    <Link to='/documents'>
                      Documents
                    </Link>
                </li>
            </ul>
            <div className='relative hidden md:flex items-center justify-center gap-3'>
                <button className='px-4 py-2 border border-green-900  text-white font-semibold bg-green-900 w-28 rounded hover:bg-green-700'>
                    <Link to='/join'>
                      Join
                    </Link>
                </button>
            </div>

            <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

            <div className={`absolute xl:hidden top-24 left-0 w-full bg-green-300 text-white flex flex-col items-center gap-6 font-bold  text-lg transform transition-transform
              ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}} >

                <li className='list-none p-2 transition-all cursor-pointer'>
                    <Link to='/about'>
                      About
                    </Link>
                </li>
                <li className='list-none p-2 transition-all cursor-pointer'>
                    <Link to='/news'>
                      News
                    </Link>
                </li>
                <li className='list-none p-2 transition-all cursor-pointer'>
                    <Link to='/documents'>
                      Documents
                    </Link>
                </li>
                <li className='list-none p-2 transition-all cursor-pointer'>
                  <button className='px-4 py-2 border border-green-900  text-white font-semibold bg-green-900 w-28 rounded'>
                     <Link to='/join'>
                      Join
                     </Link>
                  </button>
                </li>
            </div>
          </nav>
          <main>
            <Routes>
              <Route index element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='documents' element={<Documents />} />
              <Route path='join' element={<Join />} />
              <Route path='news' element={<News />}/>
              <Route path='track' element={<Track />}/>
              <Route path='events' element={<Events />}/>
              <Route path='road' element={<Road />} />
              <Route path='contact' element={<Contact />} />
              <Route />
            </Routes>
          </main>
        </BrowserRouter>
        
    </div>
  )
}

export default Navbar