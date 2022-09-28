// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Loading {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import LoadingComponent from './Loading'

export const generated = () => {
  return <LoadingComponent />
}

export default {
  title: 'Components/Loading',
  component: LoadingComponent,
}
