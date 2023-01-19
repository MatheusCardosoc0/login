import { PrismaClient, User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createToken } from '../../services/functions'

const prisma = new PrismaClient()

async function getUsers(data: User){
  const dat = await prisma.user.findMany()
  const user = dat.find(us => us.name === data.name)
  if(user) throw new Error('Usuario Cadastrado')

   await prisma.user.create({
    data
  })
  
  return createToken(data)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await getUsers(req.body)
    res.status(200).send(user)
  } catch (error: any) {
    res.status(400).send(error)
  }
}
