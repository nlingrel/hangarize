import React, { Component } from 'react'
import { dbGetAllItems } from '../../logicControl/db'

class ItemNameField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemNameField: '',
            itemSeed: [],
        }
        this.addItemToPack = this.addItemToPack.bind(this)
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

    addItemToPack(item) {
        console.log('Add item to pack', item)
    }

    render() {
        const inputId = `${this.props.name}${this.props.id}inputItemName`
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
                            onClick={this.addShipToPack}
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
