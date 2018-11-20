import React, { Component } from 'react'
import Btn from 'components/Btn'

export default class ClickCounter extends Component {
  render() {
    return (
      <div class="row justify-center p-t bg-tertiary section">
        <div class="card standard-border card-narrow shadow">
          <div class="info">
            <div>Clicks</div>

            <div class="m-t">
              <span class="info-key">Max Value:</span>
              <span class="text-accent">0</span>
            </div>

            <div class="m-t">
              <span class="info-key">clicks:</span>
              <span class="text-accent">0</span>
            </div>

            <div class="m-t">
              <span class="info-key">clicks left:</span>
              <span class="text-accent">0</span>
            </div>

            <div class="m-t">
              <span class="info-key">step:</span>
              <span class="text-accent">1</span>
            </div>
          </div>

          <Btn className="m-t d-block">Click</Btn>
          <Btn className="m-t d-block">Reset</Btn>
          <Btn className="m-t d-block">Increase Step</Btn>
          <Btn className="m-t d-block">Increase Max</Btn>
        </div>
      </div>
    )
  }
}
