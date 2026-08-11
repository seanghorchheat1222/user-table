import React from 'react'

function Footer() {

  const actions = [
    {
      id: 1,
      label: 'Apprive'
    },
    {
      id: 2,
      label: 'Reject'
    },
    {
      id: 2,
      label: 'More Actions'
    }
  ]

  return (
    <>
      <div className='bg-[#F5F7F9] shadow-[0px_1px_10px_rgba(0,0,0,0.15)] h-max py-2 fixed bottom-0 w-full  '>
        <div className='max-w-5xl mx-auto px-2 lg:px-0'>
          <div className='flex flex-col md:flex-row gap-2 md:gap-10 items-center'>
            <div className='text-[#4F4F4F]'>2 of 97 selected</div>
            <div className='flex flex-wrap gap-2'>
              {
                actions.map((action) =>
                  <button key={action.id} className='bg-transparent px-3 py-1 border border-[#4863FD] text-[#4863FD] rounded-md hover:bg-[#4863FD] hover:text-[#FFFFFF] transition-all duration-300 ease-in-out cursor-pointer'>{action.label}</button>
                )
              }
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer