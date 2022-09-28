export const schema = gql`
  type Tweet {
    id: Int!
    user: user!
    userId: Int!
    text: String!
    image: String
    createdAt: DateTime!
    replyId: Int
    reply: tweet
    replies: [tweet]!
    retweetId: Int
    retweet: tweet
    retweets: [tweet]!
    likes: [like]!
    hashtags: [hashtag]!
  }

  type Query {
    tweets: [Tweet!]! @requireAuth
    tweet(id: Int!): Tweet @requireAuth
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
