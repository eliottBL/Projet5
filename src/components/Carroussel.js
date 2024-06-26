import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/Carroussel.scss'
import { useState } from 'react'

function Carroussel({ pictures }) {

    const picturesArray = { pictures }.pictures
    const [index, setIndex] = useState(0)
    const prev = () => {
        if (index - 1 < 0) {
            setIndex(picturesArray.length - 1)
        }
        else setIndex(index - 1)
    }

    const next = () => {
        if (index + 1 > picturesArray.length - 1) {
            setIndex(0)
        }
        else setIndex(index + 1)
    }
    const [style, setStyle] = useState('visible')
    if (picturesArray.length < 3 & style === 'visible') { setStyle('cache') }


    return (
        <div className="carroussel">
            <div className={style}>
                <div className='index'>
                    <span>{index + 1}/{picturesArray.length}</span>
                </div>
                <div className='prevNext'>
                    <FontAwesomeIcon className="prev" onClick={prev} icon={faAngleDown} />
                    <FontAwesomeIcon className="next" onClick={next} icon={faAngleDown} />
                </div>
            </div>
            <img alt='carroussel' className="carroussel-gallery" src={picturesArray[index]}></img>
        </div>)
}

export default Carroussel;