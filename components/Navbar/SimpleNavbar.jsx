import React from 'react'

const SimpleNavbar = () => {
  return (
    <div className='h-20 pt-6 container bg-gray-800 p-6 flex items-center justify-between'>
        <nav className=" h-20 p-6  mx-auto px-6">
            <div className="py-4 flex relative ">
                <div className="w-1/3">
                    <a href="#" class="text-white text-xl font-bold">
                        SimpleNavBarLogo
                    </a>
                </div>
                <div className="w-2/3 text-right">
                    <a href="#" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">Home</a>
                    <a href="#" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">Contact Us</a>
                    <a href="#" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">Projects</a>
                    <a href="#" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">Support</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default SimpleNavbar