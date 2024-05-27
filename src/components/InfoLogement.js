import Rating from "./Rating";

function InfoLogement({ rate }) {
    return (
        <section>
            <div>
                <div>
                    <h2 className="title"></h2>
                    <h3 className="location"></h3>
                </div>
                <div>
                    <div>
                        <p className="nom"></p>
                    </div>
                    <img></img>
                </div>
            </div>
            <div>
                <div className="tags">
                    { }

                </div>

                <Rating rating={rate} />

            </div>
        </section>
    )
}

export default InfoLogement;