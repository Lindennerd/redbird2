export const schema = gql`
  type Tweet {
    id: Int!
    user: User!
    userId: Int!
    text: String!
    image: String
    createdAt: DateTime!
    replyId: Int
    reply: Tweet
    replies: [Tweet]!
    retweetId: Int
    retweet: Tweet
    retweets: [Tweet]!
    likes: [Like]!
    hashtags: [Hashtag]!
  }

  type Query {
    tweets: [Tweet!]! @skipAuth
    tweet(id: Int!): Tweet @skipAuth
  }

  input CreateTweetInput {
    userId: Int!
    text: String!
    image: String
    replyId: Int
    retweetId: Int
  }

  input UpdateTweetInput {
    userId: Int
    text: String
    image: String
    replyId: Int
    retweetId: Int
  }

  type Mutation {
    createTweet(input: CreateTweetInput!): Tweet! @requireAuth
    updateTweet(id: Int!, input: UpdateTweetInput!): Tweet! @requireAuth
    deleteTweet(id: Int!): Tweet! @requireAuth
  }
`
