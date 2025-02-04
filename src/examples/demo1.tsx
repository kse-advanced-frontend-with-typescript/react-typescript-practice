import React from 'react'

interface ComponentProps {
  name: string
  tick: number
}

type ComponentState = {
  tick: number
}

export class Greetings extends React.Component<ComponentProps> {
  UNSAFE_componentWillMount() {
    console.log('will mount')
  }

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<ComponentProps>) {
    console.log('will receive props', nextProps)
  }

  shouldComponentUpdate(nextProps: Readonly<ComponentProps>, nextState: Readonly<ComponentState>) {
    console.log('it is to decide', nextProps, nextState)
    return true
  }

  UNSAFE_componentWillUpdate(nextProps: Readonly<ComponentProps>, nextState: Readonly<ComponentState>) {
    console.log('component will be updated', nextProps, nextState)
  }

  componentDidUpdate(nextProps: Readonly<ComponentProps>, nextState: Readonly<ComponentState>) {
    console.log('component has been updated', nextProps, nextState)
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillUnmount() {
    console.log('will unmount')
  }

  render() {
    console.log('======> Render')
    const { name, tick } = this.props
    return (
      <div>
        Hello {name} {tick}
      </div>
    )
  }
}
