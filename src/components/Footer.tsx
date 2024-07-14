import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='text-5xl font-bold mb-2'>
            Toingg
        </div>
        <p className='text-gray-500 font-semibold my-5'>
            We are here to grow your business
            <span className='text-red-500'>  ❤</span>
        </p>
        <div className='flex flex-row justify-center gap-5'>
            <a href="/">Terms and conditions</a>
            <a href="/">Privacy policy</a>
            <a href="/">Contect</a>
            <a href="/">API docs</a>
            <a href="/">Refund policy</a>
        </div>
        <div className='w-full flex flex-row justify-around my-5'>
            <div>
                Copyright © 2024 Toingg, All rights reserved.
            </div>
            <div>
                <div className='flex flex-row gap-4 items-center'>
                    <a href="/">
                        <img className='w-6 h-6 object-fill' src="/img/instagram.svg" alt="img" />
                    </a>
                    <a href="/">
                        <img className='w-6 h-6 object-fill' src="/img/discord.svg" alt="img" />
                    </a>
                    <a href="/">
                        <img className='w-6 h-6 object-fill' src="/img/linkedin.svg" alt="img" />
                    </a>
                    <a href="/">
                        <img className='w-4 h-4 object-fill' src="/img/x-solid.svg" alt="img" />
                    </a>
                    <a href="/">
                        <img className='w-6 h-6 object-fill' src="/img/youtube.svg" alt="img" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer