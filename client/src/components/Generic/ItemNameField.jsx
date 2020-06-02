import React, { Component } from 'react'
import { dbGetAllItems } from '../../logicControl/db'

class ItemNameField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemNameField: '',
            itemSeed: [],
            selectedItem: { id: 0 },
        }
        this.addItemToPack = this.addItemToPack.bind(this)
        this.addItemToShip = this.addItemToShip.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        let items = []
        dbGetAllItems()
            .then((docs) => {
                items = docs
                this.setState({ itemSeed: items })
            })

            .catch((err) => {
                console.log('Error getting all items', err)
            })
    }

    handleChange(e) {
        const value = e.target.value
        this.setState({ itemNameField: value })
    }

    addItemToPack(e) {
        this.props.addItemToPack(
            this.props.id,
            this.state.selectedItem,
            this.state.itemNameField
        )
        this.setState({ itemNameField: '' })
    }

    addItemToShip(e) {
        const pId = this.props.inPack ? this.props.packId : undefined
        this.props.addItemToShip(
            this.props.id,
            this.state.selectedItem,
            this.state.itemNameField,
            pId
        )
        this.setState({ itemNameField: '' })
    }

    removeItemFromPack(e) {
        console.log('Remove item from pack', itemId)
    }

    render() {
        const inputId = `${this.props.name}${this.props.id}inputItemName`
        let onClick = this.props.addItemToPack
            ? this.addItemToPack
            : this.addItemToShip
        return (
            <>
                <div className="input-group input-group-sm flex-nowrap">
                    <input
                        type="text"
                        placeholder={this.props.placeholder}
                        className={this.props.className}
                        style={{ color: 'white' }}
                        id={inputId}
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={this.state.itemNameField}
                    />

                    <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-success btn-sm "
                            onClick={onClick}
                        >
                            +
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default ItemNameField
