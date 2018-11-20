import React, { Component } from 'react'
import Btn from 'components/Btn'
import Logos from 'components/Logos'
import ClickCounter from 'components/ClickCounter'

const createLogo = () => ({ inverse: !!Math.round(Math.random()) })

export default class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
      </div>
    )
  }
}
