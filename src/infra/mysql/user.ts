import * as model from '@/domain/model'
import moment from 'moment-timezone'

type User = model.User & {

}

interface UserRepository {

}

function verifyPassword(raw: string): boolean {
  return true
}

function newUser(): User {
  return {
    id: 1,
    name: "a",
    email: "a",
    updatedAt: moment(),
    createdAt: moment()
  }
}