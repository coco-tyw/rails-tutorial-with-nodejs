import * as model from '@/domain/model'

namespace view {
  export interface User extends model.User {
  }
}

// micro post などが入ってきたとき用
declare function UserFromDomain(user: model.User): view.User