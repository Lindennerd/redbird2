import { Link, routes } from '@redwoodjs/router'

const Tweet = ({ tweet }) => {
  function dateFormat(datetime) {
    const parsedDate = new Date(datetime)
    const month = parsedDate.toLocaleString('default', { month: 'long' })
    return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
  }

  return (
    <div className="w-full rounded-md border hover:cursor-pointer hover:bg-slate-100">
      <Link>
        <div className="flex justify-between p-2">
          <span className="text-sm text-gray-500">{tweet.user.email}</span>
          <span className="text-sm text-gray-500">
            {dateFormat(tweet.createdAt)}
          </span>
        </div>
        <div className="px-4 py-2">{tweet.text}</div>
      </Link>
    </div>
  )
}

export default Tweet
