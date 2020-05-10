import express from 'express'
import { User as UserUseCase } from '@/application'
import UserRepositoryInMemory from '@/interface_adapters/storage/UserRepositoryInMemory'
import * as serializers from '@/interface_adapters/serializers'

const userUseCase = new UserUseCase(new UserRepositoryInMemory())

export default class UsersController {

  private static userSerializer = new serializers.UserSerializer()

  constructor() {
  }

  async createUser(req: express.Request, res: express.Response) {
    
  }

  async getUsers(req: express.Request, res: express.Response) {
    const users = await userUseCase.getUsers()
    if (!users) {
      return res.send('<h1>404 not found</h1>')
    }
    return res.send(UsersController.userSerializer.serialize(users))
  }

  async getUser(req: express.Request, res: express.Response) {
    const { id } = req.params
    const user = await userUseCase.getUser(Number(id))
    if (!user) {
      return res.send('<h1>404 not found</h1>')
    }
    return res.send(UsersController.userSerializer.serialize(user))
  }

  async deleteUser(req: express.Request, res: express.Response) {

  }
}