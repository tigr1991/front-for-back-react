import React, {Component} from 'react'
import Btn from 'components/Btn'

export default class ClickCounter extends Component {

    initState = {
        clicks: 0,
        step: 1,
        maxValue: 10
    }

    state = this.initState

    handleClickClick = () => {
        let newValue = this.state.clicks + this.state.step;
        this.setState({clicks: newValue})
    }

    handleResetClick = () => {
        this.setState(this.initState)
    }

    handleIncreaseStepClick = () => {
        let newValue = this.state.step + 1;
        this.setState({step: newValue})
    }

    handleIncreaseMaxClick = () => {
        let newValue = this.state.maxValue + 1;
        this.setState({maxValue: newValue})
    }

    render() {
        const { maxValue, clicks, step } = this.state
        return (
            <div className="row justify-center p-t bg-tertiary section">
                <div className="card standard-border card-narrow shadow">
                    <div className="info">
                        <div>Clicks</div>

                        <div className="m-t">
                            <span className="info-key">Max Value:</span>
                            <span className="text-accent">{maxValue}</span>
                        </div>

                        <div className="m-t">
                            <span className="info-key">clicks:</span>
                            <span className="text-accent">{clicks}</span>
                        </div>

                        <div className="m-t">
                            <span className="info-key">clicks left:</span>
                            <span className="text-accent">{maxValue - clicks}</span>
                        </div>

                        <div className="m-t">
                            <span className="info-key">step:</span>
                            <span className="text-accent">{step}</span>
                        </div>
                    </div>

                    <Btn onClick={this.handleClickClick} className="m-t d-block" disabled={clicks >= maxValue}>Click</Btn>
                    <Btn onClick={this.handleResetClick} className="m-t d-block">Reset</Btn>
                    <Btn onClick={this.handleIncreaseStepClick} className="m-t d-block">Increase Step</Btn>
                    <Btn onClick={this.handleIncreaseMaxClick} className="m-t d-block">Increase Max</Btn>
                </div>
            </div>
        )
    }
}
