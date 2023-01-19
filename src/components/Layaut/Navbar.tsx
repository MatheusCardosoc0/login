import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-gradient-to-t from-blue-400  to-indigo-500 fixed flex justify-center'>
      <div className='flex justify-between p-2 w-[1248px] '>
        <h1 className='text-3xl font-bold font-serif text-white drop-shadow-[1px_1px_0px_teal]'>
        login system
        </h1>



        <div className='flex gap-3 text-2xl drop-shadow-[1px_1px_1px_black] text-teal-300 font-bold'>

          <Link href={"/Cadastro"}>
            Cadastrar
          </Link>
          <b className='text-white'>|</b>
          <Link href={"/Login"}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar