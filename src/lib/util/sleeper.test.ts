import { sleep, sleepSuspendFactory } from './sleeper'

jest.useFakeTimers()

test('[sleep]', async () => {
  const callback = jest.fn()
  const promise = sleep(10000).then(callback)

  jest.advanceTimersByTime(9000)
  expect(callback).not.toBeCalled()
  jest.advanceTimersByTime(1000)
  await promise

  expect(callback).toBeCalled()
  expect(callback).toHaveBeenCalledTimes(1)
})

test('[sleepSuspendFactory]', async () => {
  const sleep = sleepSuspendFactory(1000)

  let res
  try {
    sleep.suspend()
  } catch (promise) {
    jest.advanceTimersByTime(1000)
    await promise
    res = sleep.suspend()
  }

  expect(res).toBeTruthy()
})
