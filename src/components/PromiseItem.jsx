
const PromiseItem = ({ image, name, detail }) => {
    return (
        <>


                <div className="promise-card">
                    <div className="promise-img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="promise-about">
                        <div className="promise-detail">
                            <h3>{name}</h3>
                            <div><p>{detail}</p></div>
                        </div>
                        <div className="promise-button">
                            <button>done</button>
                            <button>code</button>
                        </div>

                    </div>

                </div>
            
        </>
    );
};

export default PromiseItem;