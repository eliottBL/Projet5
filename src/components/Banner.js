import '../styles/Banner.scss'

function Banner({ texte, imageUrl }) {
    return (
        <section className='banner'>
            <p>{texte}</p>
            <div>
                <img src={imageUrl}></img>
            </div>
        </section>

    )
}

export default Banner; 