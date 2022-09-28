import { useAuth } from '@redwoodjs/auth'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { useState } from 'react'

const TweetForm = ({ onSubmit, loading }) => {
  const { currentUser } = useAuth()
  const [tweet, setTweet] = useState('')

  function onSendTweet() {
    onSubmit({
      text: tweet,
      userId: currentUser.id,
    })

    setTweet('')
    toast.success('Tweeted!')
  }

  return (
    <div>
      <Toaster />
      <textarea
        className="w-full rounded-md border p-2 outline-none focus:shadow-xl"
        placeholder="What's going on?"
        name="tweet"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />

      <div className="flex justify-between">
        <div>Tweet Stuff</div>
        <button
          disabled={loading}
          className="px-4 py-2 border rounded-full bg-primary text-white hover:shadow-md"
          onClick={(e) => onSendTweet()}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  )
}

export default TweetForm
