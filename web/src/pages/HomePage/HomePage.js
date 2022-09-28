import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import NewTweet from 'src/components/NewTweet/NewTweet'
import TweetsCell from 'src/components/TweetsCell';

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {isAuthenticated && <NewTweet />}
      {!isAuthenticated && (
        <div className="rounded-md border bg-primary py-2 text-center text-white">
          Register or Login to join the conversation!
        </div>
      )}
      <TweetsCell />

    </>
  )
}

export default HomePage
