import * as functions from 'firebase-functions'
import { Record } from '../types/entities'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((_request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})

type RecordGetterResponse = {
  records: Record[]
}

export const attendanceRecordGetter = functions.https.onCall(
  (_data, context): RecordGetterResponse => {
    console.log('context.auth: ' + JSON.stringify(context.auth))
    functions.logger.info('attendanceRecordGetter', { structuredData: true })

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

    return {
      records: apiResponse.map((item) => ({
        ...item,
        start: new Date(item.start),
        end: new Date(item.end),
      })),
    }
  }
)
