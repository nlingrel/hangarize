import React, { Component } from 'react'
import LockButton from '../Generic/LockButton'
import MinusButton from '../Generic/MinusButton'
import HangarDeleteConfirm from './HangarDeleteConfirm'

class HangarControlBar extends Component {
    constructor(props) {
        super(props)
        this.totalExists =
            this.props.hangarTotal > 0 ? this.props.hangarTotal : ''
        this.state = {
            showInput: false,
            showDeleteConfirm: false,
            totalField: this.totalExists,
        }
        this.toggleInput = this.toggleInput.bind(this)
        this.toggleConfirm = this.toggleConfirm.bind(this)
    }
    toggleConfirm() {
        const toggle = !this.state.showDeleteConfirm
        this.setState({ showDeleteConfirm: toggle })
    }
    handleChange(e) {
        const value = e.target.value
        const intValue = parseInt(value)
        const totalValue = Number.isNaN(intValue) ? '' : intValue

        this.setState({ totalField: totalValue })
    }
    toggleInput() {
        const input = !this.state.showInput
        this.setState({ showInput: input })
    }
    changeTotal() {
        const total = this.state.totalField
        this.props.changeTotal(total)
        this.resetField()
    }
    resetField() {
        this.setState({ showInput: false, totalField: '' })
    }
    render() {
        const credit = this.props.hangarTotal - this.props.calcTotal
        const totalFilled = this.props.hangarTotal
            ? 'text-light'
            : 'text-secondary'
        const creditColor =
            credit > 0
                ? 'text-success'
                : credit < 0
                ? 'text-danger'
                : 'text-light'
        const creditGrey = this.props.hangarTotal ? '' : 'text-secondary'
        const creditFilled = this.props.hangarTotal ? creditColor : creditGrey
        const totalInput = (
            <>
                <div className="form-group">
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend mr-2">Total</div>
                        <input
                            type="text"
                            className="form-control bg-dark text-light"
                            placeholder={`$${this.props.calcTotal}`}
                            value={this.state.totalField}
                            onChange={this.handleChange.bind(this)}
                            // onFocus={this.toggleInput.bind(this)}
                        />
                    </div>
                </div>

                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-success"
                        onClick={this.changeTotal.bind(this)}
                    >
                        OK
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={this.resetField.bind(this)}
                    >
                        X
                    </button>
                </div>
            </>
        )
        const totalView = this.state.showInput ? (
            totalInput
        ) : (
            <>
                <div className="bg-secondary text-light">Total</div>
                <div onClick={this.toggleInput}>
                    {' '}
                    $
                    {this.props.hangarTotal
                        ? this.props.hangarTotal
                        : this.props.calcTotal}
                </div>
            </>
        )
        return (
            <>
                <div className="container-fluid mb-1">
                    <div className="card bg-dark border-secondary">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div className="btn-group">
                                    <div className="card border-none bg-dark p-1 ">
                                        <div
                                            className={` ${totalFilled} bg-dark text-center text-nowrap m-1`}
                                        >
                                            {totalView}
                                        </div>
                                    </div>

                                    <div className="card border-none bg-dark p-1">
                                        <div
                                            className={` ${creditFilled} bg-dark text-center text-nowrap m-1`}
                                        >
                                            <>
                                                <div className="bg-secondary text-light">
                                                    Credit
                                                </div>
                                                <div>${credit}</div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="card-body bg-dark text-light border-none">
                                    <span className="h4 text-light">
                                        {this.props.hangarName}
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="btn-group" role="group">
                                    <div className="card-body">
                                        {this.props.hangarId > 1 &&
                                        this.props.allCanDelete ? (
                                            this.state.showDeleteConfirm ? (
                                                <>
                                                    <HangarDeleteConfirm
                                                        hangarId={
                                                            this.props.hangarId
                                                        }
                                                        confirm={
                                                            this.props
                                                                .removeHangar
                                                        }
                                                        cancel={
                                                            this.toggleConfirm
                                                        }
                                                    />
                                                </>
                                            ) : (
                                                <MinusButton
                                                    onClick={this.toggleConfirm}
                                                />
                                            )
                                        ) : (
                                            ''
                                        )}
                                        <LockButton
                                            deleteLocked={
                                                this.props.allCanDelete
                                            }
                                            toggleDeleteLock={(e) => {
                                                if (
                                                    this.state.showDeleteConfirm
                                                ) {
                                                    this.toggleConfirm()
                                                }

                                                this.props.allDeleteLock(e)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HangarControlBar
