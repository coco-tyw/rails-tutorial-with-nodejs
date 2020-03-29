import * as model from '@/domain/model'
import * as view from '@/application/view'

export type User = {
  id: number
  name: string
  email: string
  microposts: view.Micropost[]
}

export type Users = {
  items: User[]
}