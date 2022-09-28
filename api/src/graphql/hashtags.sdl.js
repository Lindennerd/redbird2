export const schema = gql`
  type Hashtag {
    id: Int!
    text: String!
    tweet: tweet
    tweetId: Int
  }

  type Query {
    hashtags: [Hashtag!]! @requireAuth
  }

  input CreateHashtagInput {
    text: String!
    tweetId: Int
  }

  input UpdateHashtagInput {
    text: String
    tweetId: Int
  }
`
