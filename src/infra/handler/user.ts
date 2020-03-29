import express from 'express'
import * as service from '@/application/service'
import * as command from '@/application/command'
import * as datastore from '@/infra/datastore'

// type UserHandler = {
//   s: service.User
// }

export class UserHandler {
  private s: service.User
  constructor() {
    const userRepository = new datastore.UserRepository()
    const micropostRepository = new datastore.MicropostRepository()
    this.s = service.User(
      userRepository,
      micropostRepository
    )
  }
}

export function postUser(u: UserHandler, req: express.Request, res: express.Response) {
  type com = command.CreateUser
  const user: com = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  let error
  if (error = command.validate(user)) {
    return error
  }
  
}

export declare function getUsers(): void

export declare function getUser(): void

export declare function deleteUser(): void