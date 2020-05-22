import React from 'react'
import HangarControlBar from './HangarControlBar'

function NavBar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand btn-link" href="#" onClick={props.navToHome}>
                HangarizeSC
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            onClick={props.navToActual}
                        >
                            Actual Hangar <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            onClick={props.navToHangarize}
                        >
                            Hangarizer
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
