import express from 'express'
import * as use_case from '@/application_business_rules/use_cases'
import * as repositories from '@/application_business_rules/repositories'
import UserRepositoryInMemory from '@/interface_adapters/storage/UserRepositoryInMemory'
import * as serializers from '@/interface_adapters/serializers'

export default class UsersController {

  private static userSerializer = new serializers.UserSerializer()
  private static userUseCase = new use_case.User(new repositories.UserRepository(new UserRepositoryInMemory()))

  constructor() {
  }

  async createUser(req: express.Request, res: express.Response) {
    
  }

  async getUsers(req: express.Request, res: express.Response) {
    const users = await UsersController.userUseCase.getUsers()
    if (!users) {
      return res.send('<h1>404 not found</h1>')
    }
    return res.send(UsersController.userSerializer.serialize(users))
  }

  async getUser(req: express.Request, res: express.Response) {
    const { id } = req.params
    const user = await UsersController.userUseCase.getUser(Number(id))
    if (!user) {
      return res.send('<h1>404 not found</h1>')
    }
    return res.send(UsersController.userSerializer.serialize(user))
  }

  async deleteUser(req: express.Request, res: express.Response) {

  }
}