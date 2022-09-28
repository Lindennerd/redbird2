export const schema = gql`
  type Like {
    id: Int!
    tweet: tweet!
    user: user!
    tweetId: Int!
    userId: Int!
  }

  type Query {
    likes: [Like!]! @requireAuth
  }

  input CreateLikeInput {
    tweetId: Int!
    userId: Int!
  }

  input UpdateLikeInput {
    tweetId: Int
    userId: Int
  }
`
