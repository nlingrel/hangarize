import React from 'react'

function Home(props) {
    return (
        <div className="container-fluid  bg-dark ">
            <div className="card bg-dark text-light text-center border-secondary p-0">
                <div className="card-header">
                    <h3>Welcome to HangarizeSC</h3>
                    <div className="card-body bg-secondary text-light">
                        <div className="card-deck">
                            <div className="card bg-dark text-center m-2 p-2">
                                <h5>How To Use</h5>
                                <h6>
                                    1. Build Your Actual Hangar
                                    <p>
                                        An accurate representation of your
                                        actual hangar as it appears on your Star
                                        Citizen Account, including accurate
                                        prices that you paid for each item, is
                                        needed to get the most out of planning
                                        changes to your fleet
                                    </p>
                                </h6>
                                <h6>
                                    2. Use the Hangarizer
                                    <p>
                                        Make changes to your hangar. Save these
                                        changes as a new hangar without
                                        affecting your actual hangar. You can
                                        save any number of new hangars with any
                                        number of differences between them.
                                    </p>
                                </h6>
                            </div>
                            <div className="card bg-dark text-center m-2 p-2">
                                <h5>How It Works</h5>
                                <h6>
                                    IndexedDB
                                    <p>
                                        HangarizeSC saves information in
                                        IndexedDB, a database controlled by your
                                        browser. The database and app are
                                        completely client-side. Your information
                                        remains on your device and is not
                                        transmitted to an external server via
                                        the app. However, this means that your
                                        hangars are not synced across devices so
                                        you will have to build hangars on each
                                        device you want to use. Syncing and data
                                        back-up are planned optional features
                                        but are not yet implemented.
                                    </p>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center bg-dark text-light">
                        <h6>Disclaimer</h6>
                        <p>
                            This app is a work in progress. Do Not Ever use the
                            app to store private information like your Star
                            Citizen account credentials. While the data stored
                            by the app is client-side only, it is persistent and
                            NOT encrypted and therefore easy to access by anyone
                            with access to your device. It is not necessary to
                            enter monetary amounts for the app to function.
                            Monetary amounts are only used for calculating the
                            impact of potential fleet changes, eg. whether you
                            can buy something with available credit or whether
                            you would have to choose something to melt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
