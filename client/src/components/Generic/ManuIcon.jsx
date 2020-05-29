import React from 'react'
import Aegis from '../../icons/Aegis.png'
import Anvil from '../../icons/Anvil.png'
import Origin from '../../icons/Origin.png'
import Crusader from '../../icons/Crusader.png'
import Vanduul from '../../icons/Vanduul.png'
import RSI from '../../icons/RSI.png'
import Esperia from '../../icons/Esperia.png'
import Drake from '../../icons/Drake.png'
import Greycat from '../../icons/Greycat.png'
import Banu from '../../icons/Banu.png'
import MISC from '../../icons/MISC.png'
import Aopoa from '../../icons/Aopoa.png'
import CNOU from '../../icons/CNOU.png'
import Kruger from '../../icons/Kruger.png'
import Argo from '../../icons/Argo.png'
import Tumbril from '../../icons/Tumbril.png'
// import Xian from '..icons/Xi’an.png'
// import UEE from '.../icons/UEE.png'

function ManuIcon(props) {
    let className = props.classes.join(' ')
    const manufacturer = props.manufacturer
    const manus = {
        Aegis: Aegis,
        Anvil: Anvil,
        Origin: Origin,
        Crusader: Crusader,
        Vanduul: Vanduul,
        RSI: RSI,
        Esperia: Esperia,
        Drake: Drake,
        Greycat: Greycat,
        Banu: Banu,
        MISC: MISC,
        Aopoa: Aopoa,
        Argo: Argo,
        CNOU: CNOU,
        Kruger: Kruger,
        // UEE: UEE,
        // 'Xi’an': Xian,
        Tumbril: Tumbril,
        'Tumbril Land Systems': Tumbril,
    }
    return <img className={className} src={manus[manufacturer]}></img>
}

export default ManuIcon

//  :'Origin',
//       :'Crusader',
//       :'Vanduul',
//       :'RSI',
//       :'Anvil',
//     Aegis  :Aegis,
//       :'Esperia',
//       :'Drake',
//       :'Greycat',
//       :'Banu',
//       :'MISC',
//       :'Unknown',
//       :'Aopoa',
//       :'Argo',
//       :'CO',
//       :'Kruger',
//       :'UEE',
//       :'Xi’an',
