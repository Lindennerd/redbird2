// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <NewTweet {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import NewTweet from './NewTweet'

export const generated = () => {
  return <NewTweet />
}

export default {
  title: 'Components/NewTweet',
  component: NewTweet,
}
