import React from 'react'

const ButtonsGradient = () => {
  return (
    <div>
      

        <a
        class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="/download"
        >
        <span
            class="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
        >
            Download
        </span>
        </a>



        <a
        class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="/download"
        >
        <span
            class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
        >
            Download
        </span>
        </a>

    </div>
  )
}

export default ButtonsGradient