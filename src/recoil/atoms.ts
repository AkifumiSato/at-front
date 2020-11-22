import { atom } from 'recoil'

export const userLogoutTriggerCountState = atom({
  key: 'userLogoutTriggerCountState',
  default: 0,
})

export const attendanceRecordEditingIdState = atom<number | null>({
  key: 'attendanceRecordEditingIdState',
  default: null,
})
