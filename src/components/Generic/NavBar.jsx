import React from 'react'
// import HangarControlBar from '../Hangars/HangarControlBar'

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a
                className="navbar-brand btn-link"
                href="#"
                onClick={props.navToHome}
            >
                Hangarize
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link text-light"
                            href="#"
                            onClick={props.navToActual}
                        >
                            Actual Hangar{' '}
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link text-light"
                            href="#"
                            onClick={props.navToHangarize}
                        >
                            Hangarizer
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link text-light"
                            href="#"
                            onClick={props.navToDocs}
                        >
                            Docs
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
