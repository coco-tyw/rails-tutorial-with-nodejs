export class User {
  id: number
  name: string
  email: string
  passwordHash: string

  constructor(
    id: number = NaN,
    name: string,
    email: string,
    passwordHash: string
  ) {
    this.id = id
    this.name =  name
    this.email = email
    this.passwordHash = passwordHash
  }
}

export type UserType = {
  id: number
  name: string
  email: string
  passwordHash: string
}