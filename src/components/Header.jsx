import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Task1 from './Task1'
import Task2 from './Task2'
import Task4 from './Task4'


function Header() {
    return (
        <>
            <section className='w-full bg-[#ccc]'>
                <div className='container mx-auto'>
                    <div className='flex justify-center gap-5 text-[32px]'>
                        {[{ name: 'Task1', path: '/' }, { name: 'Task2', path: '/task2' }, { name: 'Task4', path: '/task4' }].map((item) => (
                            <NavLink
                                key={item.path}
                                className={({ isActive }) => isActive ? 'text-red-600' : 'text-black'}
                                to={item.path}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>

            <Routes>
                <Route path='/' element={<Task1 />}></Route>
                <Route path='/task2' element={<Task2 />}></Route>
                <Route path='/task4' element={<Task4 />}></Route>
            </Routes>
        </>
    )
}

export default Header
