import React, { Component } from 'react'
import { dbGetAllHangars } from '../logicControl/db'
import HangarizeControlBar from '../components/Hangars/HangarizeControlBar'
import HangarControlBar from './Hangars/HangarControlBar'
import HangarContainer from './Hangars/HangarContainer'

class Hangarize extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentHangar: {},
            currentBuyback: {},
            hangars: [],
        }
        this.refreshHangarize = this.refreshHangarize.bind(this)
        this.selectHangar = this.selectHangar.bind(this)
    }

    componentDidMount() {
        dbGetAllHangars()
            .then((hangars) => {
                this.setState({ hangars: hangars })
            })
            .catch((err) => {
                console.log('Error getting all hangars', err)
            })
    }
    refreshHangarize() {
        dbGetAllHangars()
            .then((hangars) => {
                this.setState({ hangars: hangars })
                console.log('hangarize hangars refreshed')
            })
            .catch((err) => {
                console.log('Error getting all hangars', err)
            })
    }

    selectHangar(e) {
        e.preventDefault()
        const value = parseInt(e.target.value) || 1

        this.props.selectHangarizeHangar(value)
        this.refreshHangarize()
    }

    render() {
        return (
            <div>
                <HangarizeControlBar
                    hangars={this.state.hangars}
                    addNewHangarFromActual={this.props.addNewHangarFromActual}
                    selectHangar={this.selectHangar}
                />
                <HangarControlBar
                    allCanDelete={this.props.allCanDelete}
                    allDeleteLock={this.props.allDeleteLock}
                    calcTotal={this.props.calcTotal}
                    credit={this.props.credit}
                    changeTotal={this.props.changeTotal}
                    hangarTotal={this.props.hangarTotal}
                    hangarName={this.props.hangarName}
                    removeHangar={this.props.removeHangar}
                    hagarId={this.props.hangarId}
                />
                <HangarContainer
                    packs={this.props.packs}
                    ships={this.props.ships}
                    ccus={this.props.ccus}
                    items={this.props.items}
                    buyback={this.props.buyback}
                    setBuyBackFilter={this.props.setBuyBackFilter}
                    buybackFilter={this.props.buybackFilter}
                    addNewShipToHangar={this.props.addNewShipToHangar}
                    suggestShipNames={this.props.suggestShipNames}
                    renderSuggestedShipNames={
                        this.props.renderSuggestedShipNames
                    }
                    shipNameField={this.props.shipNameField}
                    addNewPackToHangar={this.props.addNewPackToHangar}
                    addNewItemToHangar={this.props.addNewItemToHangar}
                    addNewCCUToHangar={this.props.addNewCCUToHangar}
                    resetShipAddForm={this.props.resetShipAddForm}
                    addShipToPack={this.props.addShipToPack}
                    addItemToPack={this.props.addItemToPack}
                    addItemToShip={this.props.addItemToShip}
                    removePackFromHangar={this.props.removePackFromHangar}
                    removePackFromBuyBuyBack={
                        this.props.removePackFromBuyBuyBack
                    }
                    removeShipFromPack={this.props.removeShipFromPack}
                    bbRemoveShipFromPack={this.props.bbRemoveShipFromPack}
                    removeItemfromPack={this.props.removeItemfromPack}
                    bbRemoveItemfromPack={this.props.bbRemoveItemfromPack}
                    removeShipFromHangar={this.props.removeShipFromHangar}
                    removeShipFromBuyBack={this.props.removeShipFromBuyBack}
                    removeCCUFromHangar={this.props.removeCCUFromHangar}
                    removeCCUFromBuyBack={this.props.removeCCUFromBuyBack}
                    removeItemFromHangar={this.props.removeItemFromHangar}
                    removeItemFromBuyBack={this.props.removeItemFromBuyBack}
                    removeItemFromShip={this.props.removeItemFromShip}
                    bbRemoveItemFromShip={this.props.bbRemoveItemFromShip}
                    packsDeleteLock={this.props.packsDeleteLock}
                    packsCanDelete={this.props.packsCanDelete}
                    shipsDeleteLock={this.props.shipsDeleteLock}
                    shipsCanDelete={this.props.shipsCanDelete}
                    itemsDeleteLock={this.props.itemsDeleteLock}
                    itemsCanDelete={this.props.itemsCanDelete}
                    ccusDeleteLock={this.props.ccusDeleteLock}
                    ccusCanDelete={this.props.ccusCanDelete}
                    buybacksDeleteLock={this.props.buybacksDeleteLock}
                    buybacksCanDelete={this.props.buybacksCanDelete}
                    meltPack={this.props.meltPack}
                    buyBackPack={this.props.buyBackPack}
                    meltShip={this.props.meltShip}
                    buyBackShip={this.props.buyBackShip}
                    meltItem={this.props.meltItem}
                    buyBackItem={this.props.buyBackItem}
                    meltCCU={this.props.meltCCU}
                    buyBackCCU={this.props.buyBackCCU}
                    upgradeShip={this.props.upgradeShip}
                />
            </div>
        )
    }
}

export default Hangarize
