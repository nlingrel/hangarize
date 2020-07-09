import React from 'react'

function Home(props) {
    return (
        <div className="container-fluid  bg-dark ">
            <div className="card bg-dark text-light text-center border-secondary p-0">
                <div className="card-header">
                    <h3>Welcome to Hangarize</h3>
                    <div className="card-body bg-secondary text-light">
                        <div className="card-deck">
                            <div className="card bg-dark text-center m-2 p-2">
                                <h5>How To Use</h5>
                                <h6>
                                    1. Build Your Actual Hangar
                                    <p>
                                        An accurate representation of your
                                        actual hangar -- as it appears on your
                                        Star Citizen Account -- will help you
                                        plan potential changes to your fleet.
                                        <button
                                            className="btn btn-link font-weight-bold"
                                            onClick={props.navToActual}
                                        >
                                            Take me There
                                        </button>
                                    </p>
                                </h6>
                                <h6>
                                    2. Use The Hangarizer
                                    <p>
                                        Once you've built your Actual hangar,
                                        you can then make changes in the
                                        Hangarizer. Save these changes as a new
                                        hangar without affecting your Actual
                                        hangar. You can save any number of new
                                        hangars with any number of differences
                                        between them.
                                        <button
                                            className="btn btn-link font-weight-bold"
                                            onClick={props.navToHangarize}
                                        >
                                            Take me There
                                        </button>
                                    </p>
                                    3. Refer to the Docs
                                    <p>
                                        If you are not sure how to do something,
                                        the answer may be in Documentation. A
                                        purposeful design choice of this app is
                                        to minimize extraneous information
                                        presentation to provide the best
                                        experience for users after
                                        familiarization. Intuitive cues are used
                                        when possible, but may not be effective
                                        in every instance.
                                        <button
                                            className="btn btn-link font-weight-bold"
                                            onClick={props.navToDocs}
                                        >
                                            Take me There
                                        </button>
                                    </p>
                                </h6>
                            </div>
                            <div className="card bg-dark text-center m-2 p-2">
                                <h5>How It Works</h5>
                                <h6>
                                    IndexedDB
                                    <p>
                                        Hangarize saves information in{' '}
                                        <a
                                            href="https://en.wikipedia.org/wiki/Indexed_Database_API"
                                            className="btn-link font-weight-bold"
                                        >
                                            IndexedDB
                                        </a>
                                        , a database controlled by your browser.
                                        The database and app are completely
                                        client-side. Your information remains on
                                        your device and is not transmitted to an
                                        external server via the app. However,
                                        this means that your hangars are not
                                        synced across devices so you will have
                                        to build hangars on each device you want
                                        to use. Syncing and data back-up are
                                        planned optional features but are not
                                        yet implemented.
                                    </p>
                                </h6>
                            </div>
                        </div>
                        <div className="card bg-dark text-center m-2 p-2">
                            <h6>Disclaimer</h6>
                            <p>
                                This app is not yet perfect, there may be bugs.
                                Do Not Ever use the app to store private
                                information like your Star Citizen account
                                credentials. While the data stored by the app is
                                client-side only, it is persistent and NOT
                                encrypted and therefore easy to access by anyone
                                with access to your device. It is not necessary
                                to enter monetary amounts for the app to
                                function. Monetary amounts are used solely for
                                user convenience in calculating the impact of
                                potential fleet changes, eg. whether you can buy
                                something with available credit or whether you
                                would have to choose something to melt.
                            </p>
                            <p>
                                This is a fan-built un-official app. It is not
                                affilliated with Star Citzen the game or Cloud
                                Imperium Games or Roberts Space Industries or
                                any Game Studio, Publisher, or other enitity to
                                which affiliation could possibly be construed
                                other than the author of this app.
                            </p>
                            <p>
                                Internet Explorer is not supported. It's 2020.{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div>
                                <p>
                                    Checkout the{' '}
                                    <a
                                        href="http://www.robertsspaceindustries.com"
                                        className="btn-link font-weight-bold"
                                    >
                                        Star Citizen
                                    </a>{' '}
                                    game at the official site
                                </p>
                            </div>
                            <div>
                                <p>
                                    Create an accout using this{' '}
                                    <a
                                        href="http://www.robertsspaceindustries.com/enlist?referral=STAR-LYNT-9ZGT"
                                        className="btn-link font-weight-bold"
                                    >
                                        Referral Link
                                    </a>
                                    . Signing up with this link will give both
                                    you and the app's author in-game rewards
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
