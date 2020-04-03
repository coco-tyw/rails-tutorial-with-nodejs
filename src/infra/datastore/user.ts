import * as model from '@/domain/model'
import moment from 'moment'

type User = model.User


export class UserRepository {
}

export class UserRepository {
  // readonly client: () => void
  // create = () => {}
  // constructor() {
  //   this.client = () => {}
  // } 
}



export function toDomain(u: User): model.User {
  return u
}

export function userFromDomain(u: model.User): User {
  return u
}

export function NewUserRepository () {
  const writer = () => {}
  const reader = () => {}
  return {
    writer,
    reader
  }
}

export function create(u: ReturnType<typeof NewUserRepository>, user: model.User): void {

}

export function update(u: ReturnType<typeof NewUserRepository>, user: model.User): void {

}