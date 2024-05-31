import '../styles/Collapse.scss'
import { useState } from 'react'
import svg from '../assets/fleche.png'

function Collapse({ title, contenue }) {
    let contenueArray = ''
    if (Array.isArray(contenue)) {
        contenueArray = contenue
    } else { contenueArray = [contenue] }

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
            <div className='collapse-texte'>
                {contenueArray.map((element, index) => (
                    <p key={index}>{element}</p>
                ))}
            </div>
        </div>
    ) : (<div className='collapse'>
        <div className='collapse-head'>
            <h3>{title}</h3>
            <img className={style} onClick={() => { setIsOpen(true); Rotate(); }} src={svg}></img>
        </div>
    </div>)
}

export default Collapse; 