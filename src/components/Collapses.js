import '../styles/Gallery.scss'
import listeLogements from '../data/protoLogements.json'
import { useState, useEffect } from 'react'
import Collapse from './Collapse';


function Collapses() {
    const titleArray = ['bbb', 'hhh', 'ccc']
    const listeArray = ['BBB', 'HHH', 'CCC']

    for (let i = 0; i < 3; i++) {
        return (
            <Collapse title={titleArray[i]} liste={listeArray[i]} />
        )
    }
}

export default Collapses; 