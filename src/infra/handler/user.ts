import express from 'express'
import * as service from '@/application/service'
import * as command from '@/application/command'
import * as datastore from '@/infra/datastore'

export class UserHandler {
  private UserRepository: datastore.UserRepository
  private MicropostRepository: datastore.MicropostRepository

  constructor(userRepository: datastore.UserRepository, micropostRepository: datastore.MicropostRepository) {
    this.UserRepository = userRepository
    this.MicropostRepository = micropostRepository
  }
  postUser(req: express.Request, res: express.Response) {
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
}