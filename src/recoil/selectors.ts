import { format, startOfToday } from 'date-fns'
import { selector } from 'recoil'
import { attendanceRecordsState } from './atoms'

export const attendanceCalculatedTableState = selector({
  key: 'attendanceCalculatedTableState',
  get: ({ get }) => {
    const records = get(attendanceRecordsState)
    return records.map((record) => [
      format(record.start, 'yyyy/MM/dd'),
      format(record.start, 'HH:mm'),
      format(record.end, 'HH:mm'),
      format(startOfToday().getTime() + record.break, 'HH:mm'),
      format(record.end.getTime() - record.start.getTime(), 'HH:mm'),
    ])
  },
})
