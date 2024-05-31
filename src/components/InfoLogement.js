import Rating from "./Rating";
import "../styles/InfoLogement.scss"

function InfoLogement({ tags, title, location, hostPic, hostName, rate }) {
    const hostNameSplit = hostName.split(' ')

    return (
        <section>
            <div className="logement-container-haut">
                <div className="head">
                    <h2 className="title">{title}</h2>
                    <h3 className="location">{location}</h3>
                </div>
                <div className="host">
                    <div>
                        <p className="host-name">{hostNameSplit[0]}</p>
                        <p className="host-name">{hostNameSplit[1]}</p>
                    </div>
                    <img className="host-pic" src={hostPic}></img>
                </div>
            </div>
            <div className="logement-container-bas">
                <div className="tags">
                    {tags.map((tag) => (
                        <div key={tag}>
                            {tag}
                        </div>
                    ))}

                </div>

                <Rating rating={rate} />

            </div>
        </section>
    )
}

export default InfoLogement;