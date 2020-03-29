import * as model from '@/domain/model'

export type Micropost = {
  id: number
  content: string
  createdAt: number
  updatedAt: number
}

export type Microposts = {
  items: Micropost[]
}