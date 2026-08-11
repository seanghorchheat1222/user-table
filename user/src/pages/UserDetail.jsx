import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

function UserDetail() {
  const {id} = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
     showUser();
     scrollTo(0, 0)
  }, [])

  const showUser = async () => {
    await fetch(`http://localhost:8000/users/show.php?id=${id}`)
    .then(res => res.json())
    .then(data => setUser(data.data))
    .catch(err => console.log(err));
  }
  
  return (
    <>
      <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
        <div className='md:w-[70%] h-full'>
          <h1 className='text-2xl font-semibold'>User request detail</h1>
          <div className='flex flex-col items-center sm:items-start  sm:flex-row gap-2 mt-4'>
            <div className='bg-[#D9D9D9] w-24 h-24 rounded-full'>
            </div>
            <div>
              <div className='text-lg text-center sm:text-start'>{user?.name}</div>
              <div className='text-sm text-[#4F4F4F] text-center sm:text-start'>Email: {user?.email}</div>
              <div className='text-sm text-[#4F4F4F] text-center sm:text-start'>Location: Californa, LA.</div>
              <div className='text-sm text-[#4F4F4F] text-center sm:text-start'>Bio: Try to be better!</div>
            </div>
          </div>
          <h1 className='mt-4 text-[#4F4F4F]'>
            Most Like Post!
          </h1>
          <div className='w-full h-full mt-2'>
            <img className='w-full h-full object-cover rounded-md' src="https://imgs.search.brave.com/sEoRCkSEZlmZ1MUgUquJM-C-p204frTD-s7Tg1vvyD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmF0/bWFuLWxhcHRvcC0x/YzZ2Z2o3MzZ1Z3o5/YTc5LmpwZw" alt="" />
          </div>
          <div className='flex flex-col gap-2 mt-2 md:flex-row'>
            <div className='text-[#4F4F4F]'>Duration: 3 days ago</div>
            <div className='text-[#4F4F4F]'>Comment: 1K</div>
            <div className='text-[#4F4F4F]'>Like: 4.5K</div>
          </div>
          <div className='text-[#4F4F4F] mt-2'>
            Description: What a nice Poster ever! 🔥🔥🔥
          </div>
        </div>
        <div className='bg-[#FEFEFE] md:w-[30%] h-auto p-2 rounded-sm'>
          <h1 className='text-[#4F4F4F]'>User intestest!</h1>
          <ul className='text-[#4F4F4F]'>
            <li>- Football</li>
            <li>- Space & Astronomy</li>
            <li>- Mathematics</li>
            <li>- Scientific Research</li>
            <li>- Technology</li>
            <li>- Artificial Intelligence</li>
            <li>- Programming</li>
            <li>- History</li>
            <li>- World Politics</li>
            <li>- Business & Finance</li>
            <li>- Psychology</li>
            <li>- Medicine & Health</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default UserDetail