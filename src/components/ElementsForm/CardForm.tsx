import Link from 'next/link'
import React, { FormHTMLAttributes, ReactNode } from 'react'

interface CardFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string
  children: ReactNode
}

const CardForm = ({ children, title, ...props }: CardFormProps) => {
  return (
    <form className='w-[400px] bg-gradient-to-tr from-indigo-500 to-blue-600 p-2 rounded-xl'
    {...props}>
      <h2 className='text-2xl text-white font-bold drop-shadow-[1px_1px_2px_black] mb-6'>
        {title}
      </h2>

      <div className='flex flex-col gap-3'>
        {children}

        
      </div>

      <button className='p-1 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-lg w-[100px] mt-4 text-white drop-shadow-[1px_1px_1px_black]'
        type='submit'>
        <b className='drop-shadow-[1px_1px_1px_black]'>
          Entrar
        </b>
      </button>
    </form>
  )
}

export default CardForm