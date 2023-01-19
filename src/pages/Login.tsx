import { User } from '@prisma/client'
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, FormHTMLAttributes, useEffect, useState } from 'react'
import CardForm from '../components/ElementsForm/CardForm'
import Input from '../components/ElementsForm/Input'
import { Verification } from '../services/functions'

const Login = () => {

  const [data, setData] = useState<User>({
    id: '',
    name: '',
    password: ''
  })
  const [error, setError] = useState('')

  const router = useRouter()

  const handleFormEdit = (event: any, name: string) => {
    setData({
      ...data,
      [name]: event.target.value
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const user = await axios.post('/api/User', {
        name: data.name,
        password: data.password
      })

      const json = await user.data
      setCookie("authorization", json)

      router.push('/')
    } catch (error: any) {
      setError("Usuario não encontrado")
    }

  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <CardForm title='Login'
        onSubmit={handleSubmit}>
        {error && <p className='text-lg font-bold drop-shadow-[1px_1px_1px_black] text-red-400'>
          {error}
        </p>}
        <Input type={"text"} placeholder={"name"}
          value={data.name} onChange={e => handleFormEdit(e, "name")}
          required
        />

        <Input type={"text"} placeholder={"senha"} value={data.password} onChange={e => handleFormEdit(e, "password")}
          required
        />

        <Link href={'/Cadastro'} 
        className='text-lg font-bold drop-shadow-[1px_1px_1px_black] text-yellow-300'>
          Não possui conta?
        </Link>
      </CardForm>
    </div>
  )
}

export default Login