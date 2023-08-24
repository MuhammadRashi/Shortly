import React, { Fragment } from 'react'

export const NavBar = () => {
  return (
    <Fragment>
        {/* Nav Container */}
        <nav className='relative container mx-auto p-6'>
            {/* Flex container for all items */}
            <div className="flex items-center justify-between">
                {/* flex container for logo and Menu */}

                <div className="flex item-center space-x-20">
                    <img src="images/logo.svg" alt="" />
                    {/* Left Menu */}
                    <div className="hidden space-x-8 lg:flex ">
                        <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Features</a>
                    </div>
                    <div className="hidden space-x-8 lg:flex ">
                        <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Pricing</a>
                    </div>
                    <div className="hidden space-x-8 lg:flex ">
                        <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Resources</a>
                    </div>
                   
                </div>
                {/* Right Buttons Menus */}
                <div className='hidden  lg:flex items-center space-x-6 font-bold text-grayishViolet'>
                    <div className='hover:text-veryDarkViolet'>
                    Login
                    </div>
                    <a href="#" className='px-8, py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>Sign Up</a>
                </div>

            </div>
        </nav>
    </Fragment>
  )
}
