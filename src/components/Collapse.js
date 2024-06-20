import '../styles/Collapse.scss'
import { useState } from 'react'
import svg from '../assets/fleche.png'

function Collapse({ title, contenue }) {
    let contenueArray = ''
    if (Array.isArray(contenue)) {
        contenueArray = contenue
    } else { contenueArray = [contenue] }

    const [style, setStyle] = useState("close");
    const OpenClose = () => {
        if (style === "close") setStyle("open");
        else if (style === "open") setStyle("close");
    }

    return (
        <div className='collapse'>
            <div className='collapse-head'>
                <h4>{title}</h4>
                <img alt='' className={style} onClick={OpenClose} src={svg}></img>
            </div>
            <div>
                <div className={`txt-${style}`} id='collapse-txt'>
                    {contenueArray.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collapse; 