import { User } from "@/domain/models";

export default class UserSerializer {
  static _serialize(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  serialize(data: User[] | User) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null')
    }
    if (Array.isArray(data)) {
      return data.map(UserSerializer._serialize)
    }
    return UserSerializer._serialize(data)
  }
}