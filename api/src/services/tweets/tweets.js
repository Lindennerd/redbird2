import { db } from 'src/lib/db'

export const tweets = () => {
  return db.tweet.findMany()
}

export const tweet = ({ id }) => {
  return db.tweet.findUnique({
    where: { id },
  })
}

export const createTweet = ({ input }) => {
  return db.tweet.create({
    data: input,
  })
}

export const updateTweet = ({ id, input }) => {
  return db.tweet.update({
    data: input,
    where: { id },
  })
}

export const deleteTweet = ({ id }) => {
  return db.tweet.delete({
    where: { id },
  })
}

export const Tweet = {
  user: (_obj, { root }) => {
    return db.tweet.findUnique({ where: { id: root?.id } }).user()
  },
  reply: (_obj, { root }) => {
    return db.tweet.findUnique({ where: { id: root?.id } }).reply()
  },
  replies: (_obj, { root }) => {
    return db.tweet.findUnique({ where: { id: root?.id } }).replies()
  },
  retweet: (_obj, { root }) => {
    return db.tweet.findUnique({ where: { id: root?.id } }).retweet()
  },
  retweets: (_obj, { root }) => {
    return db.tweet.findUnique({ where: { id: root?.id } }).retweets()
  },
  likes: (_obj, { root }) => {
    return db.tweet.findUnique({ where: { id: root?.id } }).likes()
  },
  hashtags: (_obj, { root }) => {
    return db.tweet.findUnique({ where: { id: root?.id } }).hashtags()
  },
}
