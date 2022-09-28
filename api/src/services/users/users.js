import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const User = {
  profile: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).profile()
  },
  tweet: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).tweet()
  },
  like: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).like()
  },
}
