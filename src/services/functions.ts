import jwt from 'jsonwebtoken'


const SECRET = process.env.JWT_SECRET

export function createToken(user: any){
  if(!SECRET) return
  return jwt.sign({email: user.email, name: user.name}, SECRET)
}

export function readToken(token: any){
  if(!SECRET) return
  try {
    return jwt.verify(token, SECRET)
  } catch (error) {
    throw new Error('Invalido')
  }
}

export function Verification(token: any){
  return readToken(token)
}