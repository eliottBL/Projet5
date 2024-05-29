import svg from '../assets/star.svg'
import '../styles/Rating.scss'

function Rating({ rating }) {
    let note = [1, 2, 3, 4, 5]

    return (
        <div className='rate'>
            {note.map((index) => (
                <div key={index}>
                    <img className={`${index < rating ? 'red' : 'grey'}`} src={svg}></img>
                </div>
            ))}
        </div>
    )

}


export default Rating;