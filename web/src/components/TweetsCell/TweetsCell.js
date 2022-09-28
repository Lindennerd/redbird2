import Tweet from "../Tweet/Tweet"
import ReactLoading from "react-loading";
import LoadingComponent from "../Loading/Loading";

export const QUERY = gql`
  query TweetsQuery {
    tweets {
      createdAt
      text
      user {
        email
      }
    }
  }
`

export const Loading = () => <LoadingComponent />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tweets }) => {
  return (
    <ul>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />
      })}
    </ul>
  )
}
