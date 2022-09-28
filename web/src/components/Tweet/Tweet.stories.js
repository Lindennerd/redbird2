// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Tweet {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Tweet from './Tweet'

export const generated = () => {
  return <Tweet />
}

export default {
  title: 'Components/Tweet',
  component: Tweet,
}
