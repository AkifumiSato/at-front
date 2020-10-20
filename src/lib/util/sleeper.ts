export const sleep = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, delay)
  })

class PromiseState<T> {
  status: 'pending' | 'fulfilled' | 'rejected' = 'pending'
  promise: Promise<T>
  result?: T
  error?: string

  constructor(promise: Promise<T>) {
    this.promise = promise
    this.promise
      .then((res) => {
        this.status = 'fulfilled'
        this.result = res
      })
      .catch((e) => {
        this.status = 'rejected'
        this.error = e.toString()
      })
  }
}

const wrapPromise = (promise: Promise<unknown>) => {
  const promiseState = new PromiseState(promise)

  const suspend = () => {
    if (promiseState.status === 'pending') {
      throw promise
    } else if (promiseState.status === 'rejected') {
      throw promiseState.error
    } else {
      return promiseState.result
    }
  }

  return { suspend }
}

export const sleepSuspendFactory = (delay: number) => wrapPromise(sleep(delay))
