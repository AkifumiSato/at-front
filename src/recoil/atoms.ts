import { atom } from 'recoil'

export const isUserWantLogoutState = atom<boolean>({
  key: 'isUserWantLogoutState',
  default: false,
})
