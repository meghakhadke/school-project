import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

function Header() {
  const  [open,setOpen]=useState(false)
    return (
        <div>
            {/* top bar */}
            <div className='bg-secondary py-1'>
                <div className='container w-11/12 mx-auto flex justify-between text-white text-xs'>
                    <p>xyz@gmail.com</p>
                    <p>Facebook</p>
                </div>
            </div>
            {/* logo */}
            <div className='container w-11/12 mx-auto py-1 flex justify-between items-center'>
                <img src='./images/logo-name.jpg' className='w-[300px] sm:w-auto h-[40px] sm:h-auto' alt='logo' />
                <div className='sm:hidden'>
                    <button onClick={()=>setOpen(!open)}>{open ? <X color="black"/> : <Menu color="black" />}</button>
                    
                </div>
            </div>
            {/* navigation */}
            <nav className='bg-primary '>
                <ul className={`container  w-11/12 mx-auto divide-y-2 sm:divide-y-0 divide-white sm:flex flex-col sm:flex-row items-center gap-x-5 py-2 text-white ${open?"block":"hidden"}`}>
                    <Link to="/"><li onClick={()=>setOpen(!open)}>Home</li></Link>
                    <Link to="/about"><li onClick={()=>setOpen(!open)}>About Us</li></Link>
                    <Link to="/admission"><li onClick={()=>setOpen(!open)}>Admission</li></Link>
                    <Link to="/mandatory-public-disclosure"><li onClick={()=>setOpen(!open)}>Mandatory Public Disclosure</li></Link>
                    <Link to="/academic"><li onClick={()=>setOpen(!open)}>Academic</li></Link>
                    <Link to="/achievement"><li onClick={()=>setOpen(!open)}>Achievement</li></Link>
                    <Link to="/infrastructure"><li onClick={()=>setOpen(!open)}>Infrastructure</li></Link>
                    <Link to="/gallery"><li onClick={()=>setOpen(!open)}>Gallery</li></Link>
                    <Link to="/contact"><li onClick={()=>setOpen(!open)}>Contact Us</li></Link>
                </ul>
               
            </nav>
        </div>
    )
}

export default Header