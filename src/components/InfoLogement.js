import Rating from "./Rating";
import "../styles/InfoLogement.scss"
import Collapse from './Collapse'

function InfoLogement({ description, equipements, tags, title, location, hostPic, hostName, rate }) {
    const hostNameSplit = hostName.split(' ')

    return (
        <section>
            <div className="info-logement">
                <div className="logement-container-left">
                    <div className="head">
                        <h2 className="title">{title}</h2>
                        <h3 className="location">{location}</h3>
                    </div>
                    <div className="tags">
                        {tags.map((tag) => (
                            <div key={tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="logement-container-right">
                    <div className="host">
                        <div>
                            <p className="host-name">{hostNameSplit[0]}</p>
                            <p className="host-name">{hostNameSplit[1]}</p>
                        </div>
                        <img alt="hote de face" className="host-pic" src={hostPic}></img>
                    </div>
                    <Rating rating={rate} />
                </div>
            </div>
            <div className="logement-container-collapse">
                <Collapse className='collaps' title={'Description'} contenue={description} />
                <Collapse className='collaps' title={'Équipements'} contenue={equipements} />
            </div>
        </section>
    )
}

export default InfoLogement;