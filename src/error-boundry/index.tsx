import { Component, ReactNode } from "react"

interface Props {
  children?: ReactNode
}

interface State {
  error: any
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: false,
    }
  }

  static getDerivedStateFromError(error: any) {
    return {
      error,
    }
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div className="w-full p-4 border-2 rounded-md bg-[color:var(--background-primary)] border-red-500 flex flex-col justify-start gap-y-1">
          <div className="text-red-700 text-[27px] font-bold">Hata</div>
          <div className="text-red-500 ">
            An unexpected error occurred, please try again.
          </div>
          <div>
            <button
              className="p-2 bg-red-500 rounded-lg text-white hover:opacity-50 transition-all"
              onClick={() => {
                this.setState({
                  error: false,
                })
              }}
            >
              Try again
            </button>
          </div>
          <details className="mt-4">
            <summary className="text-white cursor-pointer">
              Click for error detail
            </summary>
            <pre className="bg-black/10 overflow-y-scroll text-red-500 p-4 rounded-md">
              {this.state.error.stack}
            </pre>
          </details>
        </div>
      )
    }

    return this.props.children
  }
}
