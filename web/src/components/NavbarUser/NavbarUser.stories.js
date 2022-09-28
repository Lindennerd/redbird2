// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <NavbarUser {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import NavbarUser from './NavbarUser'

export const generated = () => {
  return <NavbarUser />
}

export default {
  title: 'Components/NavbarUser',
  component: NavbarUser,
}
