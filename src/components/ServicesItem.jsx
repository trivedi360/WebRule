const ServicesItem = ({ image, title, description, isReverse, scroll }) => {
    return (
      <div className={`service ${isReverse ? "reverse" : ""} ${scroll}`}>
        <div className="service-left">
          <div className="service-left-image">
            <img
              src={image}
              className="img-fluid rounded-top"
              alt="service-img"
            />
          </div>
        </div>
        <div className="service-right">
          <div className="service-right-text">
            <h3 className="mid-font">{title}</h3>
            <p className="small-font">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  

export default ServicesItem;