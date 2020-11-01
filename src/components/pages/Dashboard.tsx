import * as React from 'react'
import { sleep } from '../../lib/util/sleeper'
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

  return <Dashboard isEnter={isEnter} loading={loading} onClick={onClick} />
}

export default DashboardPage
