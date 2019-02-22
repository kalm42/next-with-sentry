import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'
import getConfig from 'next/config'

const { SENTRY_DSN } = getConfig().publicRuntimeConfig

Sentry.init({ dsn: SENTRY_DSN })

// Modified code from Sentry docs.

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      Sentry.showReportDialog()
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render() {
    const { error } = this.state
    const { children } = this.props
    if (error) {
      // render fallback UI
      return (
        <a
          onClick={() => Sentry.showReportDialog()}
          onKeyPress={this.handleKeyPress}
          role="link"
          tabIndex={0}
        >
          Report feedback
        </a>
      )
    }
    // when there's not an error, render children untouched
    return children
  }
}

export default ErrorBoundary
