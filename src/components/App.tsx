import * as React from 'react'

type Props = {
  title: string
}

const App: React.FC<Props> = ({ title }) => <h1>{ title }</h1>

export default App