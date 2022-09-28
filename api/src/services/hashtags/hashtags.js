import { db } from 'src/lib/db'

export const hashtags = () => {
  return db.hashtag.findMany()
}

export const hashtag = ({ id }) => {
  return db.hashtag.findUnique({
    where: { id },
  })
}

export const Hashtag = {
  tweet: (_obj, { root }) => {
    return db.hashtag.findUnique({ where: { id: root?.id } }).tweet()
  },
}
