import React, { Component } from 'react'
import LockButton from '../Generic/LockButton'
import MinusButton from '../Generic/MinusButton'
import HangarDeleteConfirm from './HangarDeleteConfirm'

class HangarControlBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInput: false,
            showDeleteConfirm: false,
            totalField: '',
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
        const totalFilled = this.props.hangarTotal
            ? 'text-light'
            : 'text-secondary'
        const creditColor =
            this.props.credit > 0
                ? 'text-succes'
                : this.props.credit < 0
                ? 'text-danger'
                : 'text-light'
        const creditGrey = this.props.hangarTotal
            ? 'text-light'
            : 'text-secondary'
        const creditFilled = this.props.hangarTotal ? creditColor : creditGrey
        const totalInput = (
            <>
                <div className="form-group col p-0">
                    <div className="input-group input-group-sm">
                        <input
                            type="text"
                            className="form-control bg-dark text-light"
                            placeholder={`$${this.props.calcTotal}`}
                            value={this.state.totalField}
                            onChange={this.handleChange.bind(this)}
                            onFocus={this.toggleInput.bind(this)}
                        />
                    </div>
                </div>

                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-success"
                        onClick={this.changeTotal.bind(this)}
                    >
                        <svg
                            className="bi bi-check2"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                            />
                        </svg>
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
            <span onClick={this.toggleInput}>${this.props.calcTotal}</span>
        )
        return (
            <>
                <div className="container-fluid mb-1">
                    <div className="card bg-dark border-secondary">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div
                                    className="btn-toolbar bg-dark"
                                    role="toolbar"
                                    aria-label="Toolbar with button groups"
                                >
                                    {' '}
                                    <div className="card-body">
                                        <div className="card-group">
                                            <div className="card border-none bg-dark p-1 ">
                                                <div className=" card-header bg-secondary text-light p-1 ">
                                                    Total
                                                </div>

                                                <div
                                                    className={`card-footer ${totalFilled} bg-dark text-center p-1 `}
                                                >
                                                    {totalView}
                                                </div>
                                            </div>

                                            <div className="card border-none bg-dark p-1">
                                                <div className="card-header bg-secondary text-light text-center p-1 text-nowrap">
                                                    Credit
                                                </div>
                                                <div
                                                    className={`card-footer ${creditFilled} bg-dark text-center p-1`}
                                                >
                                                    ${this.props.credit}
                                                </div>
                                            </div>
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
