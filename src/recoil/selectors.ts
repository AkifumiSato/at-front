import { format, startOfToday } from 'date-fns'
import { DefaultValue, selector } from 'recoil'
import { fetchRecords } from '../lib/api/attendance'
import { getUser } from '../lib/api/firebase'
import { userLogoutTriggerCountState } from './atoms'

type AttendanceRecord = {
  id: number
  date: string
  start: string
  end: string
  break: string
  sum: string
}

export const attendanceCalculatedTableState = selector<AttendanceRecord[]>({
  key: 'attendanceCalculatedTableState',
  get: async () => {
    const user = await getUser()
    const records = await fetchRecords(user)

    return records.map((record, i) => ({
      id: i,
      date: format(record.start, 'yyyy/MM/dd'),
      start: format(record.start, 'HH:mm'),
      end: format(record.end, 'HH:mm'),
      break: format(startOfToday().getTime() + record.break, 'HH:mm'),
      sum: format(record.end.getTime() - record.start.getTime(), 'HH:mm'),
    }))
  },
})

export const isUserLoginState = selector({
  key: 'isUserLoginState',
  get: async ({ get }) => {
    // register dependencies
    get(userLogoutTriggerCountState)
    return await getUser()
      .then(() => true)
      .catch(() => false)
  },
  set: ({ set }, value) => {
    if (value instanceof DefaultValue) {
      set(userLogoutTriggerCountState, (v) => v + 1)
    }
  },
})
