import '../styles/Gallery.scss'
import listeLogements from '../data/protoLogements.json'
import { useState, useEffect } from 'react'
import Collapse from './Collapse';


function Collapses() {
    return (
        <section>
            <Collapse />
        </section>
    )
}

export default Collapses; 