import { atom } from 'recoil'

type Record = {
  start: Date
  end: Date
  break: number
}

export const attendanceRecordsState = atom<Record[]>({
  key: 'attendanceRecord',
  default: [
    {
      start: new Date('2020/10/01 10:12'),
      end: new Date('2020/10/01 19:34'),
      break: 3600000,
    },
    {
      start: new Date('2020/10/02 10:12'),
      end: new Date('2020/10/02 19:34'),
      break: 3600000,
    },
    {
      start: new Date('2020/10/03 10:12'),
      end: new Date('2020/10/03 19:34'),
      break: 7200000,
    },
  ],
})
