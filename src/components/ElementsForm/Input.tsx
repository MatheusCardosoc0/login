import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder: string
}

const Input = ({placeholder, ...props}: InputProps) => {
  return <input className='w-[300px] rounded-lg drop-shadow-[1px_1px_4px_black] bg-teal-400 outline-none px-2 placeholder:text-gray-700 font-bold text-black'
  placeholder={placeholder}
  {...props}/>
}

export default Input