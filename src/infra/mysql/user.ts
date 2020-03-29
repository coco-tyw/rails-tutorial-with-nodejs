import mysql from 'mysql'

export type UserRepository = {
}

export type User = {
  id: number
  name: string
  email: string
  passwordHash: string
  createdAt: number
  string: number
}