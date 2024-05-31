
import '../styles/Rating.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating({ rating }) {
    let note = [1, 2, 3, 4, 5]

    return (
        <div className='rate'>
            {note.map((index) => (
                <div key={index}>
                    <FontAwesomeIcon className={`${index < rating ? 'red' : 'grey'}`} icon={faStar} />
                </div>
            ))}
        </div>
    )

}


export default Rating;