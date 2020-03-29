export type CreateUser = {
  name: string
  email: string
  password: string
}

export type PutUserEmail = {
  email: string
}

export type PutUserPassword = {
  password: string
}