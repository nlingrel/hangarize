import React from 'react'

function Home(props) {
    return (
        <div className="container-fluid text-center bg-dark text-light">
            <h3>Welcome to HangarizeSC</h3>
            <div className="accordion" id="accordionExample">
                <div className="card text-center bg-secondary text-light">
                    <div className="card-header text-center" id="headingOne">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-outline-light btn-block text-center"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                Set up Your Hangar
                            </button>
                        </h2>
                    </div>

                    <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                            Build your hangar to match your star citizen account
                            first, so that your actual hangar can be used for
                            evaluating potential changes to your fleet.
                        </div>
                        <button
                            className="btn btn-outline-light mb-2"
                            onClick={props.navToActual}
                        >
                            {' '}
                            Go{' '}
                        </button>
                    </div>
                </div>

                <div className="card text-center bg-secondary text-light">
                    <div className="card-header text-center" id="headingTwo">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-outline-light btn-block text-center collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Set up your Buyback
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                            Build your actual buyback to match your star citizen
                            account so that your personal buyback options are
                            available when evaluating potential fleet changes.
                        </div>
                        <button
                            className="btn btn-outline-light mb-2"
                            onClick={props.navToActual}
                        >
                            {' '}
                            Go{' '}
                        </button>
                    </div>

                    <div className="card text-center bg-secondary text-light">
                        <div
                            className="card-header text-center"
                            id="headingThree"
                        >
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-outline-light btn-block text-center collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Set up your financials
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                Enter your account totals to accurately
                                calculate possible changes using store credit.
                            </div>
                            <button
                                className="btn btn-outline-light mb-2"
                                onClick={props.navToActual}
                            >
                                {' '}
                                Go{' '}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card text-center bg-secondary text-light">
                    <div className="card-header text-center" id="headingFour">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-outline-light btn-block text-center"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="true"
                                aria-controls="collapseFour"
                            >
                                Hangarize
                            </button>
                        </h2>
                    </div>

                    <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                            Explore potential optimization of your hangar
                        </div>
                        <button
                            className="btn btn-outline-light mb-2"
                            onClick={props.navToHangarize}
                        >
                            {' '}
                            Go{' '}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
