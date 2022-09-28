import { useMutation } from '@redwoodjs/web'
import TweetForm from '../TweetForm/TweetForm'

const MUTATION_NEW_TWEET = gql`
  mutation CreateTweet($input: CreateTweetInput!) {
    createTweet(input: $input) {
      user {
        id
      }
      text
      createdAt
    }
  }
`

const NewTweet = () => {
  const [createTweet, { error, loading }] = useMutation(MUTATION_NEW_TWEET)

  function onPost(tweet) {
    createTweet({
      variables: {
        input: tweet,
      },
    })
  }

  return (
    <div className="w-full rounded-md border p-2">
      <TweetForm onSubmit={onPost} />
    </div>
  )
}

export default NewTweet
