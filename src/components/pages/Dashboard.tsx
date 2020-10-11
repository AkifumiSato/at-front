import * as React from 'react'
import { sleep } from '../../lib/util/sleeper'
import Loader from '../atoms/Loader'
import Dashboard from '../templates/Dashboard'

const DashboardPage: React.FC = () => {
  const [isEnter, setEnter] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onClick = async () => {
    setLoading(true)
    await sleep(1000)
    setEnter(!isEnter)
    setLoading(false)
  }

  return (
    <>
      {loading && <Loader />}
      <Dashboard isEnter={isEnter} onClick={onClick} />
    </>
  )
}

export default DashboardPage
