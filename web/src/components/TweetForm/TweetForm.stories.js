// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <TweetForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import TweetForm from './TweetForm'

export const generated = () => {
  return <TweetForm />
}

export default {
  title: 'Components/TweetForm',
  component: TweetForm,
}
