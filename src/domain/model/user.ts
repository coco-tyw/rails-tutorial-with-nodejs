import moment from 'moment-timezone'

export type Users = {
  Items: User[]
}

export interface UserRepository {
  findById(id: string): User
}

export type User = {
  id: number
  name: string
  email: string
  updatedAt: moment.Moment
  createdAt: moment.Moment
}