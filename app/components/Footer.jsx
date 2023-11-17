import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvira } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (

    <footer className='py-7'>
      <div className="container flex justify-between p-4 gap-4 text-center md:text-left md:flex-row flex-col items-center">
        <Link className="flex gap-2 items-center font-bold text-xl md:text-3xl" href="/" >
          <FontAwesomeIcon icon={faEnvira} />
          <p>Shopily</p>
        </Link>
        <div className='flex flex-col'>
          <p className='font-bold'>Subcribe our Newsletter</p>
          <p className='md:text-sm'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
        </div>
        <div className='flex w-[300px] h-12'>
          <input type="text" className='w-[70%] rounded-l-3xl focus:outline-none pl-6' placeholder='your email adresse' />
          <button className='w-[30%] bg-maingreen text-white rounded-r-3xl'>subscribe</button>
        </div>
      </div>
      <div className='container p-4 flex '>
        <div className='flex flex-col w-[19%]'>
          <p className="title">ABOUT SHOPILY</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero iure optio eaque deleniti magni!</p>
          <p>(213) 658-3916 <span>or</span> shopily@contact.io</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer