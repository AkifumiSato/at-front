import { User } from 'firebase'
import { Record } from '../../types/entities'
import { sleep } from '../util/sleeper'

export const fetchRecords = async (user: User): Promise<Record[]> => {
  console.log(`%cfetch start. user is...`, 'background: green;')
  console.log(user)

  await sleep(1000)

  const apiResponse = [
    {
      start: 1601514720000,
      end: 1601634840000,
      break: 3600000,
    },
    {
      start: 1601601120000,
      end: 1601721240000,
      break: 3600000,
    },
    {
      start: 1601687520000,
      end: 1601721240000,
      break: 7200000,
    },
  ]

  return apiResponse.map((item) => ({
    ...item,
    start: new Date(item.start),
    end: new Date(item.end),
  }))
}
