import { User } from 'firebase'
import { Record } from '../../types/entities'
import { sleep } from '../util/sleeper'

export const fetchRecords = async (user: User): Promise<Record[]> => {
  console.log(`%cfetch start. user is...`, 'background: green;')
  console.log(user)
  await sleep(1000)
  return [
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
  ]
}
