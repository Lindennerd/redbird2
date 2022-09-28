import { db } from 'src/lib/db'

export const likes = () => {
  return db.like.findMany()
}

export const like = ({ id }) => {
  return db.like.findUnique({
    where: { id },
  })
}

export const Like = {
  tweet: (_obj, { root }) => {
    return db.like.findUnique({ where: { id: root?.id } }).tweet()
  },
  user: (_obj, { root }) => {
    return db.like.findUnique({ where: { id: root?.id } }).user()
  },
}
