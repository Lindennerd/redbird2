import { db } from 'src/lib/db'

export const profiles = () => {
  return db.profile.findMany()
}

export const profile = ({ id }) => {
  return db.profile.findUnique({
    where: { id },
  })
}

export const Profile = {
  user: (_obj, { root }) => {
    return db.profile.findUnique({ where: { id: root?.id } }).user()
  },
}
