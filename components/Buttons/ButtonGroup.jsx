import React from 'react'

const ButtonGroup = () => {
  return (
    <div>
        <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
            <button
                class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
            >
                Edit
            </button>

            <button
                class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
            >
                View
            </button>

            <button
                class="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
            >
                Delete
            </button>
        </div>

    </div>
  )
}

export default ButtonGroup