import { User } from '@prisma/client'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, FormHTMLAttributes, useEffect, useState } from 'react'
import CardForm from '../components/ElementsForm/CardForm'
import Input from '../components/ElementsForm/Input'

const Cadastro = () => {

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
      await axios.post('/api/CreateUser', {
        name: data.name,
        password: data.password
      }).then(json => setCookie("authorization", json.data))
      router.push('/')
    } catch (error: any) {
      setError("Usuario já cadastrado")
    }

  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <CardForm title='Cadastro'
        onSubmit={handleSubmit}>
        {error &&
          <p className='text-lg font-bold drop-shadow-[1px_1px_1px_black] text-red-400'>
            {error}
          </p>}
        <Input type={"text"} placeholder={"name"}
          value={data.name} onChange={e => handleFormEdit(e, "name")}
          required
        />

        <Input type={"text"} placeholder={"senha"} value={data.password} onChange={e => handleFormEdit(e, "password")}
          required
        />
        <Link href={'/Login'}
          className='text-lg font-bold drop-shadow-[1px_1px_1px_black] text-yellow-300'>
          Já tenho uma conta
        </Link>
      </CardForm>
    </div>
  )
}

export default Cadastro