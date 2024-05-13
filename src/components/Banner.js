import '../styles/Banner.scss'

function Banner({ imageUrl }) {
    return (
        <section className='banner'>
            <p>Chez vous, partout et ailleurs</p>
            <div>
                <img src={imageUrl}></img>
            </div>
        </section>

    )
}

export default Banner; 