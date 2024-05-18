import '../styles/Gallery.scss'
import listeLogements from '../data/protoLogements.json'
import { useState, useEffect } from 'react'
import Collapse from './Collapse';


function Collapses() {
    return (
        <div>
            <Collapse title={'title'} listeArray={['aa', 'nn', 'cc']} />
        </div>
    )
}

export default Collapses;
