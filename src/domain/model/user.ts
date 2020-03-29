export interface UserRepository {
  findById(id: string): User
  findByEmail(id: string): User
  create(user: User): void
  delete(id: number): void
}

export type User = {
  id: number
  name: string
  email: string
  passwordHash: string
  updatedAt: number
  createdAt: number
}

export function NewUser(
  name: string,
  email: string,
  password: string,
  ): User {
  // bcrypt
  return {
    id: 1,
    name: name,
    email: email,
    passwordHash: "passwordHash",
    createdAt: 19991120,
    updatedAt: 19991120
  }
}