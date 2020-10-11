import { atom } from 'recoil'
import { Record } from '../types/entities'

/**
 * test
 * @deprecated
 */
export const attendanceRecordsState = atom<Record[]>({
  key: 'attendanceRecord',
  default: [],
})
