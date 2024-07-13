import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-5">
                <div>
                    <h6 className="font-bold uppercase py-2">Solutions</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>
                <div>
                    <h6 className="font-bold uppercase py-2">Solutions</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>
                <div>
                    <h6 className="font-bold uppercase py-2">Solutions</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>
                <div>
                    <h6 className="font-bold uppercase py-2">Solutions</h6>
                    <ol>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Marketing</li>
                    </ol>
                </div>

                <div className="col-span-2 pt-2 md:pt-2">
                    <p className='font-bold uppercase'>Subscribe To Our Newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources sent to your inbox weekly</p>

                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" className="w-full p-2 mr-4 rounded-md mb-2" placeholder='Enter your email' />
                        <button className="p-2 mb-2 bg-[#00B86E]">Subscribe</button>
                    </form>
                </div>

            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
                <p>2022 CWTS, LLC. All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] py-4 text-2xl gap-5'>
                    <FaFacebook />
                    <FaGithub />
                    <FaInstagram />
                    <FaTwitter />
                    <FaTwitch />
                </div>
            </div>




        </div>
    )
}

export default Footer