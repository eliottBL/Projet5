import Rating from "./Rating";

function InfoLogement({ title, location, hostPic, hostName, rate }) {

    return (
        <section>
            <div>
                <div>
                    <h2 className="title">{title}</h2>
                    <h3 className="location">{location}</h3>
                </div>
                <div className="host">
                    <div>
                        <p className="host-name">{hostName}</p>
                    </div>
                    <img className="host-pic" src={hostPic}></img>
                </div>
            </div>
            <div>
                <div className="tags">


                </div>

                <Rating rating={rate} />

            </div>
        </section>
    )
}

export default InfoLogement;