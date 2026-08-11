import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router-dom';

function User() {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  useEffect(()=> {
    fetchUsers();
    scrollTo(0, 0);
  }, [search])

  const fetchUsers = async () => {
    await fetch(`http://localhost:8000/users/search.php?name=${search}&email=${search}`)
    .then(res => res.json())
    .then(data => setUser(data.data))
    .catch(err => console.log(err));
  }

  const toUserDetail = (id) => {
    navigate(`/userdetail/${id}`)
  }


  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-2xl font-semibold'>Users request</h1>
          </div>
        </div>

        <div className='flex gap-2 w-full flex-row mt-4'>
          <div className='w-80 bg-[#FEFEFE] h-9 border border-[#CDCDCD] rounded-full shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='h-full w-full rounded-full pl-5 outline-0' type="text" placeholder='Search' />
          </div>
          <button className='h-9 bg-[#FEFEFE] px-6 border border-[#4863FD] text-[#4863FD] rounded-full w-max cursor-pointer shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>
            Favorites
          </button>
        </div>

        <div className='bg-[#FEFEFE] mt-4 rounded-md shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>
          <div className='overflow-x-auto'>
            <table className='w-full border-spacing-x-5'>
              <thead className='h-16 border-b-3 border-[#4863FD]'>
                <tr className='px-2'>
                  <th>
                    <div className='flex justify-center items-center'>
                      <input className='w-3.5 h-3.5' type="checkbox" />
                    </div>
                  </th>
                  <th className='px-2 font-semibold'>ID</th>
                  <th className='px-2 font-semibold'>Profile</th>
                  <th className='px-2 font-semibold'>Name</th>
                  <th className='px-2 font-semibold'>Name_kh</th>
                  <th className='px-2 font-semibold'>Email</th>
                  <th className='px-2 font-semibold'>Phone</th>
                  <th className='px-2 font-semibold'>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) =>
                    <tr key={user.id} className='h-12 border-t border-[#CDCDCD] text-[#4F4F4F] hover:bg-[#EEEEEE] cursor-pointer' onClick={()=> toUserDetail(user.id) }>
                      <td className='px-2'>
                        <div className='flex justify-center items-center'>
                          <input type="checkbox" className='w-3.5 h-3.5' />
                        </div>
                      </td>
                      <td className='text-center px-2 shrink-0'>{user.id}</td>
                      <td className='px-2'>
                        <div className='flex justify-center items-center'>
                          <div className='bg-[#D9D9D9] w-10 h-10 rounded-full'></div>
                        </div>
                      </td>
                      <td className='text-center whitespace-nowrap'>
                        {user.name}
                      </td>
                      <td className='text-center px-2 whitespace-nowrap'>
                        {user.name_kh}
                      </td>
                      <td className='text-center px-2 whitespace-nowrap'>
                        {user.email}
                      </td>
                      <td className='text-center px-2'>
                        0{user.phone_number}
                      </td>

                      <td className='px-2'>
                        {
                          user.status === 0 ?
                            <div className='flex justify-center items-center'>
                              <div className='text-[#A2803A] bg-[#FCF3E0] px-4 py-0.5 rounded-full text-[12px] w-max h-max'>
                                Pending
                              </div>
                            </div> : user.status === 1 ?
                              <div className='flex justify-center items-center'>
                                <div className='text-[#578D67] bg-[#E6F5E9] px-4 py-0.5 rounded-full text-[12px] w-max h-max'>
                                  In Progress
                                </div>
                              </div> :
                              <div className='flex justify-center items-center'>
                                <div className='text-[#154471] bg-[#DDE9F9] px-4 py-0.5 rounded-full text-[12px] w-max h-max'>
                                  Completed
                                </div>
                              </div>
                        }

                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>

        <div className='flex gap-2 justify-center md:justify-end mt-4 text-[#4F4F4F]'>
          <button className='rounded-sm p-2 border-[#CDCDCD] border w-6 h-6 flex justify-center items-center cursor-pointer bg-[#FEFEFE] shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>1</button>
          <button className='rounded-sm p-2 border-[#4863FD] border w-6 h-6 flex justify-center items-center cursor-pointer bg-[#FEFEFE] shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>2</button>
          <button className='rounded-sm p-2 border-[#CDCDCD] border w-6 h-6 flex justify-center items-center cursor-pointer bg-[#FEFEFE] shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>3</button>
          <button className='rounded-sm p-2 border-[#CDCDCD] border w-6 h-6 flex justify-center items-center cursor-pointer bg-[#FEFEFE] shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>4</button>
          <button className='rounded-sm p-2 border-[#CDCDCD] border w-6 h-6 flex justify-center items-center cursor-pointer bg-[#FEFEFE] shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>5</button>
          <button className='rounded-sm p-2 border-[#CDCDCD] border w-6 h-6 flex justify-center items-center cursor-pointer bg-[#FEFEFE] shadow-[1px_0px_10px_rgba(0,0,0,0.15)]'>6</button>
        </div>
      </div>
    </>
  )
}

export default User