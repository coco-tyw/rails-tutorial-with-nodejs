import * as model from '@/domain/model'
import * as view from '@/application/view'

export class UserResolver {

  private _microposts: view.Micropost[]

  constructor(microposts: view.Micropost[]) {
    this._microposts = microposts
  }
  public resolve(user: model.User): view.User {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      microposts: this._microposts
    }
  }
}