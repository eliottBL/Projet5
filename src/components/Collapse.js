import '../styles/Collapse.scss'
import { useState, useEffect } from 'react'
import svg from '../assets/fleche.png'

function Collapse({ title, contenue }) {
    const [isOpen, setIsOpen] = useState(false)
    const [style, setStyle] = useState("fermé");
    const Rotate = () => {
        if (style == "fermé") setStyle("ouvert");
        else if (style == "ouvert") setStyle("fermé");
    }

    return isOpen ? (
        <div className='collapse'>
            <div className='collapse-head'>
                <h3>{title}</h3>
                <img className={style} onClick={() => { setIsOpen(false); Rotate(); }} src={svg}></img>
            </div>
            <p className='collapse-texte'>{contenue}</p>
        </div>
    ) : (<div className='collapse'>
        <div className='collapse-head'>
            <h3>{title}</h3>
            <img className={style} onClick={() => { setIsOpen(true); Rotate(); }} src={svg}></img>
        </div>
    </div>)
}

export default Collapse; 