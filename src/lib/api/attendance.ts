import { User } from 'firebase'
import { Record } from '../../types/entities'

type RecordGetterResponse = {
  result: {
    records: Record[]
  }
}

export const fetchRecords = async (user: User): Promise<Record[]> => {
  console.log(`%cfetch start. user is...`, 'background: green;')
  console.log(user)

  // todo env
  // todo on `npm run start`, add run functions process
  const url =
    'http://localhost:5001/at-app-4dbad/us-central1/attendanceRecordGetter'
  const res: RecordGetterResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {},
    }),
  }).then((res) => res.json())

  return res.result.records.map((item) => ({
    ...item,
    start: new Date(item.start),
    end: new Date(item.end),
  }))
}
