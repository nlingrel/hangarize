import React from 'react'

function Home(props) {
    return (
        <div class="container text-center">
            <h3>Welcome to HangarizeSC</h3>
            <div class="accordion" id="accordionExample">
                <div class="card text-center">
                    <div class="card-header text-center" id="headingOne">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link btn-block text-center"
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
                        class="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div class="card-body">
                            Build your hangar to match your star citizen account
                            first, so that your actual hangar can be used for
                            evaluating potential changes to your fleet.
                        </div>
                        <button
                            class="btn btn-outline-info mb-2"
                            onClick={props.navToActual}
                        >
                            {' '}
                            Go{' '}
                        </button>
                    </div>
                </div>

                <div class="card text-center">
                    <div class="card-header text-center" id="headingTwo">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link btn-block text-center collapsed"
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
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <div class="card-body">
                            Build your actual buyback to match your star citizen
                            account so that your personal buyback options are
                            available when evaluating potential fleet changes.
                        </div>
                        <button
                            class="btn btn-outline-info mb-2"
                            onClick={props.navToActual}
                        >
                            {' '}
                            Go{' '}
                        </button>
                    </div>

                    <div class="card text-center">
                        <div class="card-header text-center" id="headingThree">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link btn-block text-center collapsed"
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
                            class="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                Enter your account totals to accurately
                                calculate possible changes using store credit.
                            </div>
                            <button
                                class="btn btn-outline-info mb-2"
                                onClick={props.navToActual}
                            >
                                {' '}
                                Go{' '}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card text-center">
                    <div class="card-header text-center" id="headingFour">
                        <h2 class="mb-0">
                            <button
                                class="btn btn-link btn-block text-center"
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
                        class="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordionExample"
                    >
                        <div class="card-body">
                            Explore potential optimization of your hangar
                        </div>
                        <button
                            class="btn btn-outline-info mb-2"
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
