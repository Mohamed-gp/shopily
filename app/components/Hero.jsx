import { faArrowRight, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="container p-4 flex-wrap flex md:flex-row flex-col gap-y-1 justify-between my-4 items-center">
                <div className='flex flex-col md:w-[440px] gap-5 text-center md:text-left'>
                    <div className='flex flex-col text-3xl font-bold '>
                        <p className='w-full'>DISCOVER IT ALL ON <span className='text-maingreen'>SHOPILY<span className='hidden md:inline'>:</span></span></p>
                        <p>FROM CLOTHING TO JEWELRY AND MORE!</p>
                    </div>
                    <p>Shopily is like having your favorite store in your pocket and on the internet, just like Amazon. It brings the world of online shopping right to your fingertips, making it easier than ever to find and purchase the things you love.</p>
                    <Link href="/shop" className='flex gap-3 justify-center items-center text-white px-3 py-2 rounded-xl bg-maingreen md:text-left  md:w-fit'>
                        <p>Shop Now</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
                <div className="img w-[50%] md:w-[35%] -order-1 md:order-none" >
                    <img src="/assets/imgs/Bookshop-bro.svg" alt="" />
                </div>
                <div className='lg:flex hidden relative h-20 mt-2 p-2 gap-6 justify-between rounded-lg text-sm bg-white w-screen'>
                        <div className='flex gap-4 items-center'>
                            <FontAwesomeIcon className='text-maingreen text-lg' icon={faTruck} />
                            <div className='flex flex-col gap-1'>
                                <p className='font-bold'>Free Shipping</p>
                                <p className='text-gray-400'>Free shipping on all your order</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FontAwesomeIcon className='text-maingreen text-lg' icon={faTruck} />
                            <div className='flex flex-col gap-1'>
                                <p className='font-bold'>Customer Support 24/7</p>
                                <p className='text-gray-400'>Instant access to Support</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FontAwesomeIcon className='text-maingreen text-lg' icon={faTruck} />
                            <div className='flex flex-col gap-1'>
                                <p className='font-bold'>100% Secure Payment</p>
                                <p className='text-gray-400'>We ensure your money is save</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FontAwesomeIcon className='text-maingreen text-lg' icon={faTruck} />
                            <div className='flex flex-col gap-1'>
                                <p className='font-bold'>Money-Back Guarantee</p>
                                <p className='text-gray-400'>30 Days Money-Back Guarantee</p>
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}

export default Hero