import * as React from 'react'
import Dashboard from '../templates/Dashboard'

const DashboardPage: React.FC = () => {
  const [isEnter, setEnter] = React.useState(false)
  const onClick = () => {
    setEnter(!isEnter)
  }

  return <Dashboard isEnter={isEnter} onClick={onClick} />
}

export default DashboardPage
