import * as model from '@/domain/model'
import * as view from '@/application/view'

export class MicropostResolver {

  constructor() {
  }
  public resolve(micropost: model.Micropost): view.Micropost {
    return {
      id: micropost.id,
      content: micropost.content,
      createdAt: micropost.createdAt,
      updatedAt: micropost.updatedAt
    }
  }
}