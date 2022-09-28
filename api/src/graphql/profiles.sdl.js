export const schema = gql`
  type Profile {
    id: Int!
    displayName: String
    birthday: DateTime
    bio: String
    city: String
    country: String
    image: String
    user: User!
    userId: Int!
    theme: theme!
  }

  enum theme {
    DARK
    LIGHT
  }

  type Query {
    profiles: [Profile!]! @requireAuth
  }

  input CreateProfileInput {
    displayName: String
    birthday: DateTime
    bio: String
    city: String
    country: String
    image: String
    userId: Int!
    theme: theme!
  }

  input UpdateProfileInput {
    displayName: String
    birthday: DateTime
    bio: String
    city: String
    country: String
    image: String
    userId: Int
    theme: theme
  }
`
