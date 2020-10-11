import { format, startOfToday } from 'date-fns'
import { selector } from 'recoil'
import { fetchRecords } from '../lib/api/attendance'
import { getUser } from '../lib/api/firebase'

export const attendanceCalculatedTableState = selector({
  key: 'attendanceCalculatedTableState',
  get: async () => {
    const user = await getUser()
    const records = await fetchRecords(user)

    return records.map((record) => [
      format(record.start, 'yyyy/MM/dd'),
      format(record.start, 'HH:mm'),
      format(record.end, 'HH:mm'),
      format(startOfToday().getTime() + record.break, 'HH:mm'),
      format(record.end.getTime() - record.start.getTime(), 'HH:mm'),
    ])
  },
})
