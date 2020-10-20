import * as React from 'react'

type Props = {
  fallback?: React.ReactNode
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: React.PropsWithChildren<null>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <p>
            エラーが発生しました。
            <br />
            リロードするか時間を置いてから再度アクセスしてください。
          </p>
        )
      )
    }

    return this.props.children
  }
}
