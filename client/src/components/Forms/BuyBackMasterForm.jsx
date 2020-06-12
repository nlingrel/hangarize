import React, { Component } from 'react'
import AddPackForm from './AddPackForm'
import AddShipForm from './AddShipForm'
import AddItemForm from './AddItemForm'
import AddCCUForm from './AddCCUForm'
import HideButton from '../Generic/HideButton'

class BuyBackMasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPack: false,
            showShip: false,
            showItem: false,
            showCCU: false,
        }
    }

    togglePack() {
        const currentState = !this.state.showPack
        this.setState({ showPack: currentState })
    }
    toggleShip() {
        const currentState = !this.state.showShip
        this.setState({ showShip: currentState })
    }
    toggleItem() {
        const currentState = !this.state.showItem
        this.setState({ showItem: currentState })
    }
    toggleCCU() {
        const currentState = !this.state.showCCU
        this.setState({ showCCU: currentState })
    }
    render() {
        const onBtn = (
            <svg
                className="bi bi-toggle-on"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                />
            </svg>
        )
        const offBtn = (
            <svg
                className="bi bi-toggle-off"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"
                />
            </svg>
        )

        const packBtn = this.state.showPack ? onBtn : offBtn
        const packActive = this.state.showPack ? 'text-light' : 'text-secondary'
        const shipBtn = this.state.showShip ? onBtn : offBtn
        const shipActive = this.state.showShip ? 'text-light' : 'text-secondary'
        const itemBtn = this.state.showItem ? onBtn : offBtn
        const itemActive = this.state.showItem ? 'text-light' : 'text-secondary'
        const ccuBtn = this.state.showCCU ? onBtn : offBtn
        const ccuActive = this.state.showCCU ? 'text-light' : 'text-secondary'

        return (
            <div className="collapse" id="BuyBackFormCollapse">
                <div className="card">
                    <div className="btn-group" role="group">
                        <button
                            className={`btn btn-dark `}
                            data-toggle="collapse"
                            data-target="#bbPacksFormCollapse"
                            onClick={this.togglePack.bind(this)}
                        >
                            <span className={`${packActive} font-weight-bold`}>
                                Pack&nbsp;
                                {packBtn}
                            </span>
                        </button>

                        <button
                            className={`btn btn-dark`}
                            data-toggle="collapse"
                            data-target="#bbShipsFormCollapse"
                            onClick={this.toggleShip.bind(this)}
                        >
                            <span className={`${shipActive} font-weight-bold`}>
                                Ship&nbsp;
                                {shipBtn}
                            </span>
                        </button>

                        <button
                            className={`btn btn-dark ${itemActive}`}
                            data-toggle="collapse"
                            data-target="#bbItemsFormCollapse"
                            onClick={this.toggleItem.bind(this)}
                        >
                            Item&nbsp;
                            {itemBtn}
                        </button>

                        <button
                            className={`btn btn-dark ${ccuActive}`}
                            data-toggle="collapse"
                            data-target="#bbCCUsFormCollapse"
                            onClick={this.toggleCCU.bind(this)}
                        >
                            CCU&nbsp;
                            {ccuBtn}
                        </button>
                    </div>
                </div>

                <div className="card-deck">
                    <div data-parent="#BuyBackFormCollapse">
                        <AddPackForm
                            name={'bbPacks'}
                            addNewPackToHangar={this.props.addNewPackToHangar}
                            isBuyBackForm={true}
                        />
                    </div>

                    <div data-parent="#BuyBackFormCollapse">
                        <AddShipForm
                            addNewShipToHangar={this.props.addNewShipToHangar}
                            shipNameField={this.props.shipNameField}
                            name={'bbShips'}
                            resetShipAddForm={this.props.resetShipAddForm}
                            isBuyBackForm={true}
                        />
                    </div>
                    <div data-parent="#BuyBackFormCollapse">
                        <AddItemForm
                            name={'bbItems'}
                            addNewItemToHangar={this.props.addNewItemToHangar}
                            isBuyBackForm={true}
                        />
                    </div>
                    <div data-parent="#BuyBackFormCollapse">
                        <AddCCUForm
                            addNewCCUToHangar={this.props.addNewCCUToHangar}
                            name={'bbCCUs'}
                            isBuyBackForm={true}
                        />
                    </div>
                </div>
                <div className="card-footer">
                    <HideButton
                        dataTarget={'#BuyBackFormCollapse'}
                        classes={['btn-block']}
                    />
                </div>
            </div>
        )
    }
}

export default BuyBackMasterForm
